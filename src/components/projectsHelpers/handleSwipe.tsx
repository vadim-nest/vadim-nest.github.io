// import { useRef, useState } from 'react';

// const touchStartRef = useRef<{ x: number; y: number } | null>(null);
// const [swipeHandled, setSwipeHandled] = useState(false);

// const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
//   touchStartRef.current = {
//     x: event.touches[0].clientX,
//     y: event.touches[0].clientY,
//   };
//   setSwipeHandled(false);
// };

// const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
//   if (!touchStartRef.current || swipeHandled) {
//     return;
//   }

//   const touchEnd = {
//     x: event.touches[0].clientX,
//     y: event.touches[0].clientY,
//   };

//   const horizontalDistance = touchEnd.x - touchStartRef.current.x;
//   const verticalDistance = touchEnd.y - touchStartRef.current.y;

//   // Calculate the absolute distance in each direction
//   const absHorizontalDistance = Math.abs(horizontalDistance);
//   const absVerticalDistance = Math.abs(verticalDistance);

//   // Check if the vertical distance is greater than the horizontal distance
//   if (absVerticalDistance > absHorizontalDistance) {
//     // It's a scroll, not a swipe
//     return;
//   }

//   const swipeDirection = horizontalDistance > 0 ? 'right' : 'left';

//   // Handle the swipe direction
//   if (swipeDirection === 'right') {
//     previousProject();
//   } else {
//     nextProject();
//   }

//   setSwipeHandled(true);
// };

// const handleTouchEnd = () => {
//   touchStartRef.current = null;
//   setSwipeHandled(false);
// };