class Automata1D
{
    constructor(initialStateStr)
    {
        this.world = new Map(); 

        // add each cell from initalStateStr to world 
    }

    draw(ctx, x, y, w, cellSize, centerCell) 
    {
        var minX = centerCell - Math.round(w/2); 
        var maxX = centerCell + Math.round(w/2); 
        for (var cell in this.world)
        {
            // if cell in window
            if (cell.x > minX && cell.x < maxX)
            {
                // if cell alive
                if (this.world.get(cell) == 1)
                {
                    var rectX = x+cellSize*(cell.x-minX); 
                    ctx.fillRect(rectX, y, cellSize, cellSize); 
                }
            }
        }
    }
}

class Cell
{
    /*
        Takes an array [x, [y, z]] representing this cell's 
        position in the world.
    */
    constructor(pos)
    {
        this.pos = pos; 
        this.dim = pos.length; 
        this.neighbors; 

        // num neighbors depends on dim
        if (dim == 1) 
        {
            neighbors.push(Cell([pos[0]-1]));
            neighbors.push(Cell([pos[0]+1]));
        }
        else if (dim == 2) 
        {
            for (var x = pos[0]-1; x <= pos[0]+1; x++)
                for (var y = pos[1]-1; y <= pos[1]+1; y++)
                    if (x != pos[0] && y != pos[1])
                        neighbors.push(Cell([x, y]));
        }
        else if (dim == 3) 
        {
            for (var x = pos[0]-1; x <= pos[0]+1; x++)
                for (var y = pos[1]-1; y <= pos[1]+1; y++)
                    for (var z = pos[2]-1; z <= pos[2]+1; z++)
                        if (x != pos[0] && y != pos[1] && z != pos[2])
                            neighbors.push(Cell([x, y, z]));
        }
    }
}