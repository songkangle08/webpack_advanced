export default function sum(...args) {
  return args.reduce((value, item) => value + item, 0);
}
