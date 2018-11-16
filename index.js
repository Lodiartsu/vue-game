"use strict"

var app =  new Vue({
    el: '#game',
    data: {
      singleUnusedEl: '',
      userScore: 0,
      locationX: 100,
      locationY: 100,
      foodLocationX: 160,
      foodLocationY: 180,
      divColor: 'red',
      foodColor: 'green',
      divPosition: 'absolute'
    },
    mounted: function () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        window.addEventListener("keydown", function(e) {
          if (e.keyCode === 37) {app.moveLeft()};
          if (e.keyCode === 38) {app.moveUp()};
          if (e.keyCode === 39) {app.moveRight()};
          if (e.keyCode === 40) {app.moveDown()};
        });
      });
    },
    methods: {
      check: function() {
        if (this.foodLocationX == this.locationX && this.foodLocationY == this.locationY) {
          this.generateFood();
          this.addPoints();
        }
      },
      generateFood: function() {
        console.log('more food!');
        this.foodLocationX = Math.ceil(Math.floor((Math.random() * 100) + 1) / 10) * 10; 
        this.foodLocationY = Math.ceil(Math.floor((Math.random() * 100) + 1) / 10) * 10;
      },
      addPoints: function() {
        console.log('more points!');
        this.userScore += 10;
      },
      moveUp: function () {
        console.log('uped!');
        this.locationY -= 10;
        this.check();
      },
      moveDown: function () {
        console.log('downed!');
        this.locationY += 10;
        this.check()
      },
      moveRight: function () {
        console.log('uped!');
        this.locationX += 10;
        this.check()
      },
      moveLeft: function () {
        console.log('downed!');
        this.locationX -= 10;
        this.check()
      }
    }
})