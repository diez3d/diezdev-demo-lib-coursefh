declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}
// Add more modules if you want more extensions files
declare module "*.jpg" {
    const value: any;
    export default value;
}