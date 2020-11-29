import React, { useEffect, useRef, useState } from 'react';
import './App.scss';

const CONSTANTS = {
  width: window.innerWidth,
  height: window.innerHeight,
};

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
    this.ctx.clearRect(0, 0, CONSTANTS.width, CONSTANTS.height);

    // if (this.x + this.radius > CONSTANTS.width || this.x - this.radius < 0) {
    //   this.dx = -this.dx;
    // }
    //
    // if (this.y + this.radius > CONSTANTS.height || this.y - this.radius < 0) {
    //   this.dy = -this.dy;
    // }
    //
    this.x += 15;
    this.y += 15;
    this.draw();
  }
}

function createArrayOfCircles(array: Circle[], ctx: CanvasRenderingContext2D) {
  const radius = 15;
  const x = Math.random() * (CONSTANTS.width - radius * 2) + radius;
  const y = Math.random() * (CONSTANTS.height - radius * 2) + radius;
  const dx = (Math.random() - 0.5) * 2;
  const dy = (Math.random() - 0.5) * 2;

  // пушу каждый круг в массив
  array.push(new Circle(ctx, x, y, radius, dx, dy));
}

function App() {

  console.log('render');
  /** Создаю 3 рефа.
   * contextRef - нужен для того, чтобы Я привязал к нему реальный контекст canvas единожды
   * И потом спокойно обращался к нему
   */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const circleArray = useRef<Circle[] | null>(null);
  const [isDraggable, setDraggable] = useState(false);

  // Хук при инициализации
  useEffect(() => {
    function animate() {
      requestAnimationFrame(animate);

      if (contextRef.current) {
        contextRef.current.clearRect(0, 0, CONSTANTS.width, CONSTANTS.height);

      }

      if (circleArray.current) {
        circleArray.current.forEach(circle => circle.draw());
      }
    }

    const canvas = canvasRef.current;

    if (canvas) {
      canvas.width = CONSTANTS.width;
      canvas.height = CONSTANTS.height;

      const context = canvas.getContext('2d');

      if (context) {
        contextRef.current = context;
        circleArray.current = []; // массив будущих кругов

        // Создаем объекты
        for (let i = 0; i < 50; i++) {
          createArrayOfCircles(circleArray.current, contextRef.current);
        }

        animate();
      }
    }
  }, []);

  const mouseDown = () => setDraggable(true);
  const mouseUp = () => setDraggable(false);

  const mouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDraggable) {
      const { pageX, pageY } = event;

      if (circleArray.current !== null) {

        for (let k = 0; k < circleArray.current.length; k++) {
          const circle = circleArray.current[k];
          const { x, y, radius } = circle;

          if ((pageX - x <= radius && pageX - x >= -radius) && (pageY - y <= radius && pageY - y >= -radius)) {
            circle.x = pageX;
            circle.y = pageY;
            break;
          }
        }
      }
    }
  };

  return (
    <div className="App">
      <div className="app-wrapper">
        <h1>Welcome to CANVAS</h1>
        <canvas onMouseMove={ mouseMove } onMouseDown={ mouseDown } onMouseUp={ mouseUp } ref={ canvasRef } className="canvas"/>
      </div>
    </div>
  );
}

export default App;
