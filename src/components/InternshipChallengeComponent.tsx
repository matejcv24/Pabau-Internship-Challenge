import React, { useState, useEffect } from 'react';

type GridProps = {
    grid: string[];
};

const InternshipChallengeComponent: React.FC<GridProps> = ({ grid }) => {
    const [path, setPath] = useState<string>('');
    const [letters, setLetters] = useState<string>('');

    useEffect(() => {
        const findPathAndLetters = (): void => {
            let pathTemp = '>';
            let lettersTemp = '';
            const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            let direction = 0;
            let [x, y] = [0, grid[0].indexOf('>')];

            const move = () => {
                const [dx, dy] = directions[direction];
                x += dx;
                y += dy;
            };

            const isInGrid = (x: number, y: number): boolean => x >= 0 && x < grid.length && y >= 0 && y < grid[x].length;

            while (grid[x][y] !== 's') {
                move();
                const currentChar = grid[x][y];

                if ('A' <= currentChar && currentChar <= 'Z') lettersTemp += currentChar;

                pathTemp += currentChar;

                if (currentChar === '+' || ('A' <= currentChar && currentChar <= 'Z')) {
                    for (let i = -1; i <= 1; i += 2) {
                        const newDirection = (direction + i + 4) % 4;
                        const [dx, dy] = directions[newDirection];
                        if (isInGrid(x + dx, y + dy) && grid[x + dx][y + dy] !== ' ' && grid[x + dx][y + dy] !== '+') {
                            direction = newDirection;
                            break;
                        }
                    }
                }
            }

            setPath(pathTemp);
            setLetters(lettersTemp);
        };

        findPathAndLetters();
    }, [grid]);

    return (
        <div>
            <div>Path: {path}</div>
            <div>Letters: {letters}</div>
        </div>
    );
};

export default InternshipChallengeComponent;