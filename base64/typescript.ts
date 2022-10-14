// Node.js

function encodeBinary(binary: Buffer): string {
  return binary.toString("base64");
}

function decodeBinary(encoded: string): Buffer {
  return Buffer.from(encoded, "base64");
}

function stringToUtf8(source: string): Buffer {
  return Buffer.from(source, "utf8");
}

function utf8ToString(source: Buffer): string {
  return source.toString("utf8");
}

function encodeString(source: string): string {
  return encodeBinary(stringToUtf8(source));
}

function decodeString(encoded: string): string {
  return utf8ToString(decodeBinary(encoded));
}

const encoded = encodeString("Learn more ✨"); // TGVhcm4gbW9yZSDinKg=
const decoded = decodeString(encoded); // Learn more ✨

/**
 * In browser, btoa function can be used to base64 encode ASCII string.
 * https://developer.mozilla.org/en-US/docs/Web/API/btoa
 *
 * To support unicode string, consider using encodeURI instead of base64.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
 */
