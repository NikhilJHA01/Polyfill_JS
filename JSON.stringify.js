/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  if (
    [NaN, null, undefined, Infinity, -Infinity].includes(data) ||
    typeof data === "symbol"
  ) {
    return "null";
  }

  if (typeof data === "bigint") {
    throw new Error("Do not know how to serialize a BigInt at JSON.stringify");
  }

  if (typeof data === "string") {
    return `"${data}"`;
  }

  if (typeof data === "function") {
    return "null";
  }

  if (typeof data === "number") {
    return `${data}`;
  }
  if (typeof data === "boolean") {
    return `${data}`;
  }

  if (data instanceof Date) {
    return `"${data.toISOString()}"`;
  }
  if (Array.isArray(data)) {
    const arr = data.map((el) => {
      if (stringify(el) === undefined) return "null";
      else return stringify(el);
    });
    return `[${arr.join(",")}]`;
  }
  if (typeof data === "object") {
    const arr = Object.entries(data).reduce((acc, [key, value]) => {
      if (value === undefined || stringify(value) === undefined) {
        return acc;
      }
      acc.push(`"${key}":${stringify(value)}`);
      return acc;
    }, []);
    return `{${arr.join(",")}}`;
  }
}

console.log(stringify({ x: 5, y: 6 }));

console.log(stringify({ x: [10, undefined, function () {}, Symbol("")] }));
