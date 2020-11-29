import React, { useEffect, useRef } from 'react';
import './App.scss';

class Circle {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, dx: number, dy: number) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.strokeStyle = 'blue';
    this.ctx.stroke();
  }

  update() {
    this.draw();

    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > window.innerHeight / 2 || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

function createArrayOfCircles(array: Circle[], ctx: CanvasRenderingContext2D) {
  const radius = 45;
  const x = Math.random() * (window.innerWidth - radius * 2) + radius;
  const y = Math.random() * (window.innerHeight / 2 - radius * 2) + radius;
  const dx = (Math.random() - 0.5) * 2;
  const dy = (Math.random() - 0.5) * 2;

  // пушу каждый круг в массив
  array.push(new Circle(ctx, x, y, radius, dx, dy));
}

function App() {

  /** Создаю 2 рефа.
   * contextRef - нужен для того, чтобы Я привязал к нему реальный контекст canvas единожды
   * И потом спокойно обращался к нему
   */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const circleArray = useRef<Circle[] | null>(null);

  function animate() {
    requestAnimationFrame(animate);

    if (contextRef.current) {
      contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (circleArray.current !== null) {
        circleArray.current.forEach(circle => {
          circle.update();
        });
      }
    }
  }

  console.log('RENDER');

  // Хук при инициализации
  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight / 2;

      const context = canvas.getContext('2d');

      if (context) {
        contextRef.current = context;
        circleArray.current = []; // массив будущих кругов

        for (let i = 0; i < 100; i++) {
          createArrayOfCircles(circleArray.current, contextRef.current);
        }

        animate();
      }
    }
  });

  return (
    <div className="App">
      <div className="app-wrapper">
        <canvas ref={ canvasRef } className="canvas"/>
      </div>
    </div>
  );
}

export default App;
