export const Code = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      className={className}
    >
      <defs>
        <radialGradient id="emeraldGradient">
          <stop stopColor="#10b981" />
        </radialGradient>
      </defs>
      <path
        d="M610 800 c-4 -2 -10 -7 -12 -11 -6 -8 -216 -487 -219 -499 -6 -25 16 -49 43 -49 10 0 24 7 30 15 8 10 219 494 220 504 1 12 -7 30 -18 37 -11 7 -32 9 -43 2z"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#emeraldGradient)"
        // strokeWidth={1}
      />
      <path
        d="M201 747 c-11 -6 -192 -201 -197 -213 -2 -4 -4 -12 -4 -17 0 -18 3 -21 103 -121 103 -103 100 -100 122 -99 9 1 14 2 20 7 15 12 21 35 14 51 -2 4 -38 42 -81 85 l-78 78 7 8 c53 56 148 161 151 167 7 15 4 34 -7 46 -12 13 -34 17 -50 8z"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#emeraldGradient)"
        // strokeWidth={1}
      />
      <path
        d="M810 747 c-10 -4 -16 -11 -20 -21 -3 -9 -4 -23 -1 -32 1 -3 38 -41 81 -85 l79 -79 -7 -8 c-53 -56 -149 -162 -152 -168 -5 -12 -3 -31 4 -41 10 -13 20 -17 36 -16 11 1 15 2 22 7 9 6 182 193 191 205 6 8 8 24 4 35 -4 11 -185 195 -199 202 -12 6 -26 7 -37 1z"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#emeraldGradient)"
        // strokeWidth={1}
      />
    </svg>
  );
};
