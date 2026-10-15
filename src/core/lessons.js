// Teaching content. Stage ids match the ids produced by core/solver.js.
import { ALGORITHMS } from './solver.js';

const show = (moves) => moves.join(' ');

export const NOTATION = [
  { move: 'R', text: 'Turn the Right face a quarter turn clockwise (as if you were looking straight at that face).' },
  { move: "R'", text: "An apostrophe (said \"prime\") means counter-clockwise: R' turns the Right face the other way." },
  { move: 'R2', text: 'A 2 means a half turn (180°). The direction does not matter.' },
  { move: 'U', text: 'U = Up (top). The others are F = Front, B = Back, L = Left, D = Down (bottom).' },
  { move: 'F', text: 'F turns the face looking at you. Always judge "clockwise" by looking directly at the face that is turning.' },
];

export const CONCEPTS = [
  {
    title: 'Anatomy of the cube',
    body: [
      'A 3x3 has 6 centres, 12 edges and 8 corners. Centres only have one colour and never move relative to each other - they tell you what colour each face will be.',
      'Edges have two colours, corners have three. A piece always stays the same piece: the white-green edge can never become a white-blue one.',
      'A 2x2 has only corners. There are no centres, so we fix one corner (bottom-left-back) and solve everything relative to it.',
    ],
  },
  {
    title: 'Think in pieces, not stickers',
    body: [
      'Beginners chase colours around. Solvers track pieces. To place the white-green edge, find it, and then move it between its two target centres (white and green).',
      'Solve a little at a time and protect what you have already solved: every stage below leaves the earlier stages intact.',
    ],
  },
  {
    title: 'Algorithms are tools',
    body: [
      'An algorithm is a memorised move sequence that changes a few pieces while putting everything else back. The last-layer algorithms here only disturb the top layer.',
      'You do not need to understand them completely at first - learn what they do (e.g. "Sune twists corners"), practise them with the Try button, then the understanding follows.',
    ],
  },
  {
    title: 'Orientation of this app',
    body: [
      'The cube is shown with the white face on the bottom, yellow on top and green in front. Solving builds the cross on the bottom (white) so the last layer is on top where it is easy to see.',
      'If your physical cube has a different colour scheme the app still works: the colour of each centre defines that face. Hold your cube like the picture when you enter it.',
    ],
  },
];

export const STAGE_LESSONS = {
  3: [
    {
      id: 'cross',
      title: 'White cross',
      goal: 'Four white edges on the bottom, each also matching the centre of the side it touches.',
      concept:
        'Find a white edge, then bring it to the bottom layer without disturbing the edges you already placed. Look at the other colour of the edge: it must line up with the centre of the same colour on the side. Four edges, one at a time.',
      tip: 'Check the sides, not just the white face: a "white cross" is only right if the side stickers match their centres.',
    },
    {
      id: 'f2l',
      title: 'First two layers',
      goal: 'The bottom layer and the middle layer completely solved.',
      concept:
        'Each white corner belongs next to its matching middle-layer edge. Pair a corner with its edge up in the top layer, then slide the pair into its slot. After four pairs the bottom and middle layers are done.',
      tip: 'Slot names come from the colours: the white-red-green corner goes between the red and green centres.',
    },
    {
      id: 'ollCross',
      title: 'Yellow cross',
      goal: 'The four top edges all show yellow on the top face (their side colours are ignored for now).',
      concept:
        'Look at the yellow edges on top: a dot, an L-shape or a line. The algorithm F R U R\' U\' F\' adds yellow edges. Hold the L in the back-left or the line horizontal, repeat until you see a plus sign.',
      algorithm: ALGORITHMS.yellowCross,
    },
    {
      id: 'ollFace',
      title: 'Yellow face',
      goal: 'The whole top face is yellow (corners may still be in the wrong place).',
      concept:
        'This is "orienting" the corners: twisting them without moving them out of the top layer. Sune twists three corners; its mirror Anti-Sune twists them the other way. Repeat from the right angle until the top is all yellow.',
      algorithm: ALGORITHMS.sune,
    },
    {
      id: 'pllCorners',
      title: 'Place the corners',
      goal: 'All four top corners sit between the correct centres (edges can still be wrong).',
      concept:
        'Turn the top layer until at least one corner is in the right place, then cycle the other three with the A-perm. It moves three corners around the one that is already correct and leaves the edges alone.',
      algorithm: ALGORITHMS.cornerCycle,
    },
    {
      id: 'pllEdges',
      title: 'Place the edges',
      goal: 'The cube is solved.',
      concept:
        'The last step cycles three top edges with the Ua-perm, which does not touch corners. Repeat once more if the remaining edges are still wrong.',
      algorithm: ALGORITHMS.edgeCycle,
    },
  ],
  2: [
    {
      id: 'layer',
      title: 'First layer',
      goal: 'One face (bottom) complete, with the side stickers of each corner matching.',
      concept:
        'There is no centre, so the colour you start with defines the face. Place the other three bottom corners relative to the fixed back-left corner: twist and slot each in until the side colours also line up.',
      tip: 'Use only R, U and F turns; they never move the fixed corner.',
    },
    {
      id: 'orient',
      title: 'Orient the top',
      goal: 'The top face has a single colour.',
      concept:
        'Twist the four top corners without moving the bottom layer. Hold the cube so that a single yellow-facing corner is in the front-left and repeat Sune; a matching anti-Sune does the mirror case.',
      algorithm: ALGORITHMS.sune,
    },
    {
      id: 'permute',
      title: 'Permute the top',
      goal: 'The 2x2 is solved.',
      concept:
        'Corners that are in the wrong spot are swapped with the T-perm (neighbouring corners) or the Y-perm (diagonal corners). Turn the top layer between algorithms to line things up.',
      algorithm: ALGORITHMS.tPerm,
    },
  ],
};

export function lessonFor(n, id) {
  return STAGE_LESSONS[n].find((l) => l.id === id);
}

export function algText(moves) {
  return show(moves);
}
