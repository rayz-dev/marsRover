<template>
  <div class="main">
    <canvas ref="canvas" :width="planetSizePx" :height="planetSizePx"></canvas>
    <p>Send a secuence of commands to the Rover</p>
    <div class="commands" :disabled=isMoving>
      <input v-model="secuence" type="text" name="secuence" id="secuence" disabled>
      <button @click="secuence+=command" v-for="command in commands" :key="command" :disabled=isMoving>{{ command }}</button>
      <button @click="secuence=''" :disabled=isMoving>Reset</button>
      <button @click="executeCommands(secuence); secuence='';" :disabled=isMoving><b>Send</b></button>
    </div>
    <div class="reports">
      <h2>Reports</h2>
      <p v-if="reports.length == 0">Nothing to report yet.</p>
      <div class="report-list" v-for="(report, index) in reports" :key="index">
        <p v-bind:class="(index == 0)?'recent-report':'report'">{{report}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import directions from "./directions";
import consts from "./consts"

export default {
  name: 'TheGameCanvas',
  data() {
    return {
      planetSize: 20,
      planetCellSize: 30,
      commands: ['F', 'L', 'R'],
      directions: directions,
      consts: consts,
      secuence: "",
      isMoving: false,
      obstacles: [],
      reports: []
    }
  },
  computed: {
    planetSizePx: function() {
      return this.planetSize * this.planetCellSize;
    }
  },
  created() {
    this.rover = {
        x: Math.floor(Math.random() * this.planetSize),
        y: Math.floor(Math.random() * this.planetSize),
        direction: Math.floor(Math.random() * this.directions.length)
    }
  },
  mounted() {
    this.canvasContext = this.$refs.canvas.getContext("2d");
    this.generateObstacles();
    this.drawPlanet();
  },
  methods: {
    drawPlanet() {
      this.canvasContext.clearRect(0,0,this.planetSizePx,this.planetSizePx);
      this.obstacles.forEach(obstacle => {
        this.drawCell(obstacle, "sienna");
      });
      this.drawRover(this.rover);
    },
    drawRover({x,y,direction}) {
      this.drawCell({x,y});
      this.drawRoverEyes({x,y,direction});
    },
    drawRoverEyes({x,y,direction}) {
      switch (direction) {
        case consts.NORTH:
          this.roverLeftEye = {
            x: x * this.planetCellSize + (this.planetCellSize)/8,
            y: y * this.planetCellSize + (this.planetCellSize)/8
          } 
          this.roverRightEye = {
            x: x * this.planetCellSize + 5*(this.planetCellSize)/8,
            y: y * this.planetCellSize + (this.planetCellSize)/8,
          }
          break;
        case consts.SOUTH:
          this.roverLeftEye = {
            x: x * this.planetCellSize + (this.planetCellSize)/8,
            y: y * this.planetCellSize + 5*(this.planetCellSize)/8
          }
          this.roverRightEye = {
            x: x * this.planetCellSize + 5*(this.planetCellSize)/8,
            y: y * this.planetCellSize + 5*(this.planetCellSize)/8,
          }
          break;
        case consts.EAST:
          this.roverLeftEye = {
            x: x * this.planetCellSize + 5*(this.planetCellSize)/8,
            y: y * this.planetCellSize + 5*(this.planetCellSize)/8
          }
          this.roverRightEye = {
            x: x * this.planetCellSize + 5*(this.planetCellSize)/8,
            y: y * this.planetCellSize + (this.planetCellSize)/8,
          }
          break;
        case consts.WEST:
          this.roverLeftEye = {
            x: x * this.planetCellSize + (this.planetCellSize)/8,
            y: y * this.planetCellSize + 5*(this.planetCellSize)/8
          }
          this.roverRightEye = {
            x: x * this.planetCellSize + (this.planetCellSize)/8,
            y: y * this.planetCellSize + (this.planetCellSize)/8,
          }
          break;
      }
      this.drawEye(this.roverLeftEye);
      this.drawEye(this.roverRightEye);
    },
    drawEye({x,y}) {
      this.canvasContext.beginPath();
      this.canvasContext.rect(
        x,
        y,
        this.planetCellSize / 4,
        this.planetCellSize / 4
      );
      this.canvasContext.fillStyle = "black";
      this.canvasContext.fill();
    },
    drawCell({x,y}, fill = 'white') {
      this.canvasContext.beginPath();
      this.canvasContext.rect(
        x * this.planetCellSize,
        y * this.planetCellSize,
        this.planetCellSize,
        this.planetCellSize
      );
      this.canvasContext.fillStyle = fill;
      this.canvasContext.strokeStyle = "black";
      this.canvasContext.fill();
      this.canvasContext.stroke();
    },
    generateObstacles() {
      let i = 0;
      while (i < this.planetSize) {
        let newObstacle = {
          x: Math.floor(Math.random() * this.planetSize),
          y: Math.floor(Math.random() * this.planetSize)
        }
        if(!this.areBlocksColiding(this.rover, newObstacle)) {
          let goodPlacement = true;
          let j = 0;
          while (goodPlacement && j < this.obstacles.length) {
            if (this.areBlocksColiding(newObstacle, this.obstacles[j])) {
              goodPlacement = false;
            } else {
              j++;
            }
          }
          if (goodPlacement) {
            this.drawCell(newObstacle, "sienna");
            this.obstacles.push(newObstacle);
            i++;
          }
        }
      }
    },
    async executeCommands(secuence) {
      if (!this.isMoving) {
        this.isMoving = true;
        let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        let charIndex = 0;
        let validMove = true;
        while (validMove && charIndex < secuence.length) {
          let command = secuence[charIndex];
          if (this.move(command)) {
            this.drawPlanet();
            charIndex++;
          } else {
            validMove = false;
          }
          await sleep(200);
        }
        this.isMoving = false;
      }
    },
    areBlocksColiding(block1, block2) {
      if ((block1.x == block2.x) && (block1.y == block2.y)) {
          return true;
        } else {
          return false;
        }
    }, 
    nextMove(command) {
      let newDirection = this.rover.direction;
      switch (command) {
        case consts.LEFT:
          if (newDirection == consts.EAST) {
            newDirection = consts.NORTH;
          } else {
            newDirection++;
          }
          break;
        case consts.RIGHT:
          if(newDirection == consts.NORTH) {
            newDirection = consts.EAST;
          } else {
            newDirection--;
          }
          break;
      }
      return newDirection;
    },
    isOutsideLimits({x,y}) {
      return this.planetSize <= x 
        || x < 0
        || this.planetSize <= y
        || y < 0;
    },
    obstacleFound(newPos) {
      let i = 0;
      let found = false;
      while (!found && i < this.obstacles.length) {
        let obstacle = this.obstacles[i];
        if (this.areBlocksColiding(newPos, obstacle)) {
          found = true;
        } else {
          i++;
        }
      }
      return found;
    },
    reportObstacle({x,y}, limit = false) {
      if (this.reports.length > 10) {
        this.reports.pop();
      }
      let report = "";
      if (limit) {
        report = "Limit found";
      } else {
        report = "Obstacle found";
      }
      this.reports.unshift(`STOP. ${report} at (${x},${y}).`);
    },
    validateMove(newDirection) {
      let newPos = {
        x: this.rover.x + this.directions[newDirection].move.x,
        y: this.rover.y + this.directions[newDirection].move.y
      }
      if (this.isOutsideLimits(newPos)) {
        this.reportObstacle(newPos, true);
        return false;
      } else {
        if (this.obstacleFound(newPos)) {
          this.reportObstacle(newPos);
          return false;
        } 
        return true;
      }
    },
    move(command) {
      let newDirection = this.nextMove(command);
      if (this.validateMove(newDirection)) {
        this.rover.direction = newDirection;
        this.rover.x += this.directions[this.rover.direction].move.x;
        this.rover.y += this.directions[this.rover.direction].move.y;
        return true;
      } else {
        return false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  canvas {
    background: #7B523F;
    border: 1px solid black;
  }
  button {
    padding: 1rem;
    cursor: pointer;
  }
  input {
    display: block;
    width: 100%;
    background: white;
    padding: 1rem;
    margin: 0;
  }
  .commands {
    display: inline-block;
  }
  .main {
    position: relative;
  }
  .reports {
    position: absolute;
    top: 0;
    width: 20vw;
    padding: 1rem;
    text-align: left;
    right: -22vw;
  }
  .report {
    color: rgb(87, 26, 26);
  }
  .recent-report {
    color: rgb(184, 44, 44);
  }
</style>
