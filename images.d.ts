// Create a file named images.d.ts in your project
// images.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}
