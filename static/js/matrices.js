/* Javascript file for all matrice declarations */


// Master Matrix
var m_mat = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Constant Hexomino Matrices
const h_mat = [{
        id: 1,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [0, 1],
                    [1, 1],
                    [1, 1]
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0, 0],
                    [1, 1, 1, 1],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 1],
                    [1, 1],
                    [1, 0],
                    [1, 0]
                ]
            },
            {
                degree: "270",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 1],
                    [0, 0, 1, 1],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 0],
                    [1, 1],
                    [1, 1]
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1, 1],
                    [1, 1, 0, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1],
                    [1, 1],
                    [0, 1],
                    [0, 1]
                ]
            },
            {
                degree: "270F",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 1],
                    [1, 1, 1, 1],
                ]
            },
        ]
    },
    {
        id: 2,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 1],
                    [1, 0],
                    [1, 0],
                    [1, 1]
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 1],
                    [1, 0, 0, 1],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 1],
                    [0, 1],
                    [0, 1],
                    [1, 1]
                ]
            },
            {
                degree: "270",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0, 1],
                    [1, 1, 1, 1],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1],
                    [0, 1],
                    [0, 1],
                    [1, 1]
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 0, 0, 1],
                    [1, 1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [1, 1],
                    [1, 0],
                    [1, 0],
                    [1, 1]
                ]
            },
            {
                degree: "270F",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1, 1],
                    [1, 0, 0, 1],
                ]
            },
        ]
    },
    {
        id: 3,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 1],
                    [1, 0],
                    [1, 1],
                    [0, 1]
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [0, 1, 1, 1],
                    [1, 1, 0, 1],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 0],
                    [1, 1],
                    [0, 1],
                    [1, 1]
                ]
            },
            {
                degree: "270",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 1, 1],
                    [1, 1, 1, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1],
                    [0, 1],
                    [1, 1],
                    [1, 0]
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 1, 0, 1],
                    [0, 1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [0, 1],
                    [1, 1],
                    [1, 0],
                    [1, 1]
                ]
            },
            {
                degree: "270F",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1, 0],
                    [1, 0, 1, 1],
                ]
            },
        ]
    },
    {
        id: 4,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 1],
                    [1, 1],
                    [0, 1]
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1, 1],
                    [1, 1, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0],
                    [1, 1],
                    [1, 1],
                    [0, 1]
                ]
            },
            {
                degree: "270",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 1, 1, 1],
                    [1, 1, 1, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [1, 1],
                    [1, 1],
                    [1, 0]
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1, 0],
                    [0, 1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [0, 1],
                    [1, 1],
                    [1, 1],
                    [1, 0]
                ]
            },
            {
                degree: "270F",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 0],
                    [0, 1, 1, 1],
                ]
            },
        ]
    },
    {
        id: 44,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [1, 1],
                    [1, 1],
                    [1, 0]
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1, 0],
                    [0, 1, 1, 1],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [0, 1],
                    [1, 1],
                    [1, 1],
                    [1, 0]
                ]
            },
            {
                degree: "270",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 0],
                    [0, 1, 1, 1],
                ]
            },
        ]
    },
    {
        id: 5,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 1],
                    [1, 1],
                    [1, 0]
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 1],
                    [0, 1, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [1, 1],
                    [1, 1],
                    [0, 1]
                ]
            },
            {
                degree: "270",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1, 0],
                    [1, 1, 1, 1],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [1, 1],
                    [1, 1],
                    [0, 1]
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 1, 1, 0],
                    [1, 1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 1],
                    [1, 1],
                    [1, 0]
                ]
            },
            {
                degree: "270F",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1, 1],
                    [0, 1, 1, 0],
                ]
            },
        ]
    },
    {
        id: 6,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 1],
                    [1, 0],
                    [1, 1]
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1, 1],
                    [1, 0, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1],
                    [0, 1],
                    [1, 1],
                    [0, 1]
                ]
            },
            {
                degree: "270",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 1, 0, 1],
                    [1, 1, 1, 1],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [1, 1],
                    [0, 1],
                    [1, 1]
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 1, 0],
                    [1, 1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 1],
                    [1, 0],
                    [1, 1],
                    [1, 0]
                ]
            },
            {
                degree: "270F",
                size_row: 2,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 1],
                    [0, 1, 0, 1],
                ]
            },
        ]
    },
    {
        id: 7,
        matrices: [{
                degree: "0",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [1, 1, 1],
                    [1, 0, 0],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 1, 1],
                ]
            },
            {
                degree: "180",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [1, 1, 1],
                    [1, 1, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [1, 1, 0],
                    [0, 1, 1],
                ]
            },
            {
                degree: "0F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [1, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [0, 1, 1],
                    [1, 1, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 1],
                    [0, 1, 1],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [1, 1, 0],
                    [1, 1, 0],
                ]
            },
        ]
    },
    {
        id: 8,
        matrices: [{
                degree: "0",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [1, 1, 0],
                    [0, 1, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 1],
                    [1, 0, 1],
                ]
            },
            {
                degree: "180",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [0, 1, 1],
                    [1, 1, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 1],
                    [1, 1, 1],
                    [0, 1, 0],
                ]
            }
        ]
    },
    {
        id: 9,
        matrices: [{
                degree: "0",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 1, 1],
                    [1, 0, 0],
                    [1, 1, 0],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 3,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [1, 0, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "180",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 1, 1],
                    [0, 0, 1],
                    [1, 1, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 0, 1],
                    [1, 1, 1],
                ]
            },
            {
                degree: "0F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1],
                    [0, 0, 1],
                    [0, 1, 1],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [1, 0, 1],
                    [1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 1, 0],
                    [1, 0, 0],
                    [1, 1, 1],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 3,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [1, 0, 1],
                    [1, 0, 0],
                ]
            },
        ]
    },
    {
        id: 10,
        matrices: [{
                degree: "0",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [1, 1, 1],
                    [0, 1, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 0],
                    [1, 1, 1],
                ]
            },
            {
                degree: "180",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [1, 1, 1],
                    [1, 0, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [0, 1, 1],
                    [0, 1, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 1],
                    [1, 1, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [1, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [1, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 1],
                    [1, 1, 1],
                ]
            }
        ]
    },
    {
        id: 11,
        matrices: [{
                degree: "0",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 1],
                    [0, 1, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 1],
                    [1, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [1, 1, 1],
                    [0, 1, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [1, 1, 1],
                    [0, 1, 0],
                ]
            }
        ]
    },
    {
        id: 12,
        matrices: [{
                degree: "0",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [0, 1, 0],
                    [1, 1, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 1],
                    [1, 0, 1],
                ]
            },
            {
                degree: "180",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [0, 1, 0],
                    [1, 1, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 1],
                    [1, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "0F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [0, 1, 0],
                    [1, 1, 1],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 1],
                    [1, 1, 1],
                    [1, 0, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [0, 1, 0],
                    [0, 1, 1],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [1, 1, 1],
                    [1, 0, 1],
                ]
            }
        ]
    },
    {
        id: 13,
        matrices: [{
                degree: "0",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [1, 1, 0],
                    [1, 0, 0],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [0, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "180",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [0, 1, 1],
                    [1, 1, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 0],
                    [1, 1, 1],
                ]
            }
        ]
    },
    {
        id: 14,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 1],
                    [1, 1, 0],
                    [1, 0, 0],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0, 0],
                    [0, 1, 1, 1],
                    [0, 0, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [0, 1, 1],
                    [1, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 1, 0, 0],
                    [1, 1, 1, 0],
                    [0, 0, 1, 1],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1, 0],
                    [0, 1, 1, 1],
                    [1, 1, 0, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 1, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 1],
                    [1, 1, 1, 0],
                    [0, 1, 0, 0],
                ]
            },
        ]
    },
    {
        id: 15,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 1, 0],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1, 0],
                    [1, 1, 1, 1],
                    [0, 1, 0, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 1, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 0],
                    [1, 1, 1, 1],
                    [0, 1, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 1],
                    [1, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 1, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 1],
                    [1, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 1, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 1, 0],
                ]
            },
        ]
    },
    {
        id: 16,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 0, 1],
                    [1, 1, 1, 1],
                    [1, 0, 0, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 0, 1],
                    [1, 1, 1, 1],
                    [1, 0, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 1],
                ]
            },
        ]
    },
    {
        id: 17,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [1, 1, 1],
                    [0, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 0],
                    [1, 1, 1, 0],
                    [0, 0, 1, 1],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 1],
                    [1, 0, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0, 0],
                    [0, 1, 1, 1],
                    [0, 1, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 1],
                    [0, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 1],
                    [1, 1, 1, 0],
                    [0, 0, 1, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0, 0],
                    [0, 1, 1, 1],
                    [1, 1, 0, 0],
                ]
            },
        ]
    },
    {
        id: 18,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 0, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 0, 1],
                    [0, 0, 1, 1],
                    [1, 1, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 1, 0],
                    [0, 1, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1, 1],
                    [1, 1, 0, 0],
                    [1, 0, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [1, 1, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 0],
                    [0, 0, 1, 1],
                    [0, 0, 0, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [0, 0, 1],
                    [0, 1, 1],
                    [1, 1, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 1, 1],
                ]
            },
        ]
    },
    {
        id: 19,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 1],
                    [0, 1, 1, 0],
                    [1, 1, 0, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1, 1],
                    [0, 1, 1, 0],
                    [1, 1, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [0, 1, 1],
                    [1, 1, 0],
                    [1, 0, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [0, 1, 1],
                    [1, 1, 0],
                    [1, 0, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 1, 1],
                ]
            },
        ]
    },
    {
        id: 20,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 1],
                    [0, 0, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 1],
                    [0, 0, 1, 0],
                    [1, 1, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1, 1],
                    [0, 1, 0, 0],
                    [1, 1, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [1, 1, 1],
                    [1, 0, 0],
                    [1, 0, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [0, 0, 1],
                    [1, 1, 1],
                    [1, 0, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 1, 1],
                ]
            },
        ]
    },
    {
        id: 21,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [1, 1, 1],
                    [0, 0, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [1, 1, 1, 1],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 1, 1],
                    [1, 0, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1, 1],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 1],
                    [1, 0, 0],
                    [1, 0, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 1],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [0, 0, 1],
                    [1, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [1, 1, 1, 1],
                ]
            },
        ]
    },
    {
        id: 22,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 1],
                    [1, 1, 1, 0],
                    [1, 0, 0, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 0, 1],
                    [0, 1, 1, 1],
                    [1, 1, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [0, 1, 1],
                    [0, 1, 0],
                    [1, 1, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 0, 0, 0],
                    [1, 1, 1, 0],
                    [0, 0, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [0, 1, 0],
                    [1, 1, 0],
                    [1, 0, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0, 0],
                    [0, 1, 1, 1],
                    [0, 0, 0, 1],
                ]
            },
        ]
    },
    {
        id: 23,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 0],
                    [1, 1, 1, 1],
                    [1, 0, 0, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                    [0, 1, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 0, 0, 1],
                    [1, 1, 1, 1],
                    [0, 1, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 1],
                    [0, 1, 0],
                    [1, 1, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 1, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [0, 1, 0],
                    [1, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 1],
                ]
            },
        ]
    },
    {
        id: 24,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 1],
                    [0, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 0],
                    [1, 1, 1, 1],
                    [0, 0, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 1],
                    [0, 1, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0, 0],
                    [1, 1, 1, 1],
                    [0, 1, 0, 0],
                ]
            }
        ]
    },
    {
        id: 25,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1],
                    [1, 1, 0],
                    [0, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 1],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                    [1, 1, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 1, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 0, 1],
                    [1, 1, 1, 1],
                    [0, 0, 1, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 0],
                    [0, 1, 1],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0, 0],
                    [1, 1, 1, 1],
                    [1, 0, 0, 0],
                ]
            },
        ]
    },
    {
        id: 26,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 3,
                pivot_col: 0,
                matrix: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 1, 1],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 0,
                matrix: [
                    [1, 1, 1, 1],
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1],
                    [0, 0, 1],
                    [0, 0, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 2,
                pivot_col: 3,
                matrix: [
                    [0, 0, 0, 1],
                    [0, 0, 0, 1],
                    [1, 1, 1, 1],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 3,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1],
                    [0, 0, 1],
                    [0, 0, 1],
                    [1, 1, 1],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                    [1, 1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 0,
                pivot_col: 0,
                matrix: [
                    [1, 1, 1],
                    [0, 0, 1],
                    [0, 0, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 3,
                matrix: [
                    [1, 1, 1, 1],
                    [0, 0, 0, 1],
                    [0, 0, 0, 1],
                ]
            },
        ]
    },
    {
        id: 27,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 0],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 3,
                matrix: [
                    [0, 0, 0, 1],
                    [1, 1, 1, 1],
                    [0, 0, 0, 1],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 3,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 0, 0, 0],
                    [1, 1, 1, 1],
                    [1, 0, 0, 0],
                ]
            }
        ]
    },
    {
        id: 28,
        matrices: [{
                degree: "0",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 1],
                    [1, 0, 0],
                    [1, 0, 0],
                ]
            },
            {
                degree: "90",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 0],
                    [0, 0, 1, 1],
                    [0, 0, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 0, 1],
                    [0, 0, 1],
                    [1, 1, 1],
                    [0, 1, 0],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 1, 1],
                ]
            },
            {
                degree: "0F",
                size_row: 4,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0],
                    [1, 1, 1],
                    [0, 0, 1],
                    [0, 0, 1],
                ]
            },
            {
                degree: "90F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 0],
                    [0, 0, 1, 1],
                    [1, 1, 1, 0],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 1, 1],
                    [0, 1, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1, 1],
                    [1, 1, 0, 0],
                    [0, 1, 0, 0],
                ]
            },
        ]
    },
    {
        id: 29,
        matrices: [{
                degree: "0",
                size_row: 5,
                size_col: 2,
                pivot_row: 0,
                pivot_col: 0,
                matrix: [
                    [1, 1],
                    [1, 0],
                    [1, 0],
                    [1, 0],
                    [1, 0],
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 5,
                pivot_row: 0,
                pivot_col: 4,
                matrix: [
                    [1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 1],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 4,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [0, 1],
                    [0, 1],
                    [0, 1],
                    [1, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 0, 0, 0, 0],
                    [1, 1, 1, 1, 1],
                ]
            }, {
                degree: "0F",
                size_row: 5,
                size_col: 2,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [1, 1],
                    [0, 1],
                    [0, 1],
                    [0, 1],
                    [0, 1],
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 5,
                pivot_row: 1,
                pivot_col: 4,
                matrix: [
                    [0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 4,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 0],
                    [1, 0],
                    [1, 0],
                    [1, 1],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 0,
                matrix: [
                    [1, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0],
                ]
            },
        ]
    },
    {
        id: 30,
        matrices: [{
                degree: "0",
                size_row: 5,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 0],
                    [1, 1],
                    [1, 0],
                    [1, 0],
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 5,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 1, 1],
                    [0, 0, 1, 0, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [0, 1],
                    [1, 1],
                    [0, 1],
                    [0, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 0, 0],
                    [1, 1, 1, 1, 1],
                ]
            }, {
                degree: "0F",
                size_row: 5,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [0, 1],
                    [1, 1],
                    [0, 1],
                    [0, 1],
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 5,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 0, 0],
                    [1, 1, 1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 0],
                    [1, 1],
                    [1, 0],
                    [1, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 1, 1],
                    [0, 0, 1, 0, 0],
                ]
            },
        ]
    },
    {
        id: 31,
        matrices: [{
                degree: "0",
                size_row: 5,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 0],
                    [1, 1],
                    [0, 1],
                    [0, 1],
                    [0, 1],
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 5,
                pivot_row: 1,
                pivot_col: 3,
                matrix: [
                    [0, 0, 0, 1, 1],
                    [1, 1, 1, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 3,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 0],
                    [1, 0],
                    [1, 1],
                    [0, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [0, 1, 1, 1, 1],
                    [1, 1, 0, 0, 0],
                ]
            }, {
                degree: "0F",
                size_row: 5,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [0, 1],
                    [1, 1],
                    [1, 0],
                    [1, 0],
                    [1, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 5,
                pivot_row: 0,
                pivot_col: 3,
                matrix: [
                    [1, 1, 1, 1, 0],
                    [0, 0, 0, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 3,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [0, 1],
                    [0, 1],
                    [1, 1],
                    [1, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 0, 0, 0],
                    [0, 1, 1, 1, 1],
                ]
            },
        ]
    },
    {
        id: 32,
        matrices: [{
                degree: "0",
                size_row: 5,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 0],
                    [1, 1],
                    [0, 1],
                    [0, 1],
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 5,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 1, 1],
                    [1, 1, 1, 0, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [1, 0],
                    [1, 0],
                    [1, 1],
                    [0, 1],
                    [0, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [0, 0, 1, 1, 1],
                    [1, 1, 1, 0, 0],
                ]
            },
            {
                degree: "0F",
                size_row: 5,
                size_col: 2,
                pivot_row: 2,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [0, 1],
                    [1, 1],
                    [1, 0],
                    [1, 0],
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 5,
                pivot_row: 1,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 0, 0],
                    [0, 0, 1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 2,
                pivot_col: 0,
                matrix: [
                    [0, 1],
                    [0, 1],
                    [1, 1],
                    [1, 0],
                    [1, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 2,
                matrix: [
                    [1, 1, 1, 0, 0],
                    [0, 0, 1, 1, 1],
                ]
            },
        ]
    },
    {
        id: 33,
        matrices: [{
                degree: "0",
                size_row: 5,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 1],
                    [1, 0],
                    [1, 0],
                    [1, 0],
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 5,
                pivot_row: 0,
                pivot_col: 3,
                matrix: [
                    [1, 1, 1, 1, 1],
                    [0, 0, 0, 1, 0],
                ]
            },
            {
                degree: "180",
                size_row: 4,
                size_col: 3,
                pivot_row: 3,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [0, 1],
                    [0, 1],
                    [1, 1],
                    [0, 1],
                ]
            },
            {
                degree: "270",
                size_row: 3,
                size_col: 4,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1, 0, 0, 0],
                    [1, 1, 1, 1, 1],
                ]
            }, {
                degree: "0F",
                size_row: 5,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [0, 1],
                    [1, 1],
                    [0, 1],
                    [0, 1],
                    [0, 1],
                ]
            },
            {
                degree: "90F",
                size_row: 2,
                size_col: 5,
                pivot_row: 1,
                pivot_col: 3,
                matrix: [
                    [0, 0, 0, 1, 0],
                    [1, 1, 1, 1, 1],
                ]
            },
            {
                degree: "180F",
                size_row: 4,
                size_col: 3,
                pivot_row: 3,
                pivot_col: 0,
                matrix: [
                    [1, 0],
                    [1, 0],
                    [1, 0],
                    [1, 1],
                    [1, 0],
                ]
            },
            {
                degree: "270F",
                size_row: 3,
                size_col: 4,
                pivot_row: 0,
                pivot_col: 3,
                matrix: [
                    [1, 1, 1, 1, 1],
                    [0, 0, 0, 1, 0],
                ]
            },
        ]
    },
    {
        id: 34,
        matrices: [{
                degree: "0",
                size_row: 6,
                size_col: 1,
                pivot_row: 0,
                pivot_col: 0,
                matrix: [
                    [1],
                    [1],
                    [1],
                    [1],
                    [1],
                    [1],
                ]
            },
            {
                degree: "90",
                size_row: 1,
                size_col: 6,
                pivot_row: 0,
                pivot_col: 5,
                matrix: [
                    [1, 1, 1, 1, 1, 1],
                ]
            },
            {
                degree: "180",
                size_row: 5,
                size_col: 1,
                pivot_row: 5,
                pivot_col: 0,
                matrix: [
                    [1],
                    [1],
                    [1],
                    [1],
                    [1],
                    [1],
                ]
            },
            {
                degree: "270",
                size_row: 1,
                size_col: 5,
                pivot_row: 0,
                pivot_col: 0,
                matrix: [
                    [1, 1, 1, 1, 1, 1],
                ]
            },
        ]
    },
    {
        id: 35,
        matrices: [{
                degree: "0",
                size_row: 3,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 0,
                matrix: [
                    [1, 1],
                    [1, 1],
                    [1, 1],
                ]
            },
            {
                degree: "90",
                size_row: 2,
                size_col: 3,
                pivot_row: 0,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [1, 1, 1],
                ]
            },
            {
                degree: "180",
                size_row: 3,
                size_col: 2,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1],
                    [1, 1],
                    [1, 1],
                ]
            },
            {
                degree: "270",
                size_row: 2,
                size_col: 3,
                pivot_row: 1,
                pivot_col: 1,
                matrix: [
                    [1, 1, 1],
                    [1, 1, 1],
                ]
            },
        ]
    },
];