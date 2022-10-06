var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from3, except, desc) => {
  if (from3 && typeof from3 == "object" || typeof from3 == "function")
    for (let key of __getOwnPropNames(from3))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from3[key], enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/@esbuild-plugins/node-globals-polyfill/_virtual-process-polyfill_.js
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout)
    return setTimeout(fun, 0);
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout)
    return cachedSetTimeout = setTimeout, setTimeout(fun, 0);
  try {
    return cachedSetTimeout(fun, 0);
  } catch {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout)
    return clearTimeout(marker);
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout)
    return cachedClearTimeout = clearTimeout, clearTimeout(marker);
  try {
    return cachedClearTimeout(marker);
  } catch {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
function cleanUpNextTick() {
  !draining || !currentQueue || (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue());
}
function drainQueue() {
  if (!draining) {
    var timeout = runTimeout(cleanUpNextTick);
    draining = !0;
    for (var len = queue.length; len; ) {
      for (currentQueue = queue, queue = []; ++queueIndex < len; )
        currentQueue && currentQueue[queueIndex].run();
      queueIndex = -1, len = queue.length;
    }
    currentQueue = null, draining = !1, runClearTimeout(timeout);
  }
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
  queue.push(new Item(fun, args)), queue.length === 1 && !draining && runTimeout(drainQueue);
}
function Item(fun, array) {
  this.fun = fun, this.array = array;
}
function noop() {
}
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3, seconds = Math.floor(clocktime), nanoseconds = Math.floor(clocktime % 1 * 1e9);
  return previousTimestamp && (seconds = seconds - previousTimestamp[0], nanoseconds = nanoseconds - previousTimestamp[1], nanoseconds < 0 && (seconds--, nanoseconds += 1e9)), [seconds, nanoseconds];
}
function uptime() {
  var currentTime = new Date(), dif = currentTime - startTime;
  return dif / 1e3;
}
var cachedSetTimeout, cachedClearTimeout, queue, draining, currentQueue, queueIndex, title, platform, browser, env, argv, version, versions, release, config, on, addListener, once, off, removeListener, removeAllListeners, emit, performance, performanceNow, startTime, process, defines, init_virtual_process_polyfill = __esm({
  "node_modules/@esbuild-plugins/node-globals-polyfill/_virtual-process-polyfill_.js"() {
    cachedSetTimeout = defaultSetTimout, cachedClearTimeout = defaultClearTimeout;
    typeof globalThis.setTimeout == "function" && (cachedSetTimeout = setTimeout);
    typeof globalThis.clearTimeout == "function" && (cachedClearTimeout = clearTimeout);
    queue = [], draining = !1, queueIndex = -1;
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    title = "browser", platform = "browser", browser = !0, env = {}, argv = [], version = "", versions = {}, release = {}, config = {};
    on = noop, addListener = noop, once = noop, off = noop, removeListener = noop, removeAllListeners = noop, emit = noop;
    performance = globalThis.performance || {}, performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
      return new Date().getTime();
    };
    startTime = new Date();
    process = {
      nextTick,
      title,
      browser,
      env,
      argv,
      version,
      versions,
      on,
      addListener,
      once,
      off,
      removeListener,
      removeAllListeners,
      emit,
      binding,
      cwd,
      chdir,
      umask,
      hrtime,
      platform,
      release,
      config,
      uptime
    }, defines = {};
    Object.keys(defines).forEach((key) => {
      let segs = key.split("."), target = process;
      for (let i = 0; i < segs.length; i++) {
        let seg = segs[i];
        i === segs.length - 1 ? target[seg] = defines[key] : target = target[seg] || (target[seg] = {});
      }
    });
  }
});

// node_modules/@esbuild-plugins/node-globals-polyfill/Buffer.js
function init() {
  inited = !0;
  for (var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i)
    lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i;
  revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;
}
function base64toByteArray(b64) {
  inited || init();
  var i, j, l, tmp, placeHolders, arr, len = b64.length;
  if (len % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0, arr = new Arr(len * 3 / 4 - placeHolders), l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3)
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)], arr[L++] = tmp >> 16 & 255, arr[L++] = tmp >> 8 & 255, arr[L++] = tmp & 255;
  return placeHolders === 2 ? (tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4, arr[L++] = tmp & 255) : placeHolders === 1 && (tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2, arr[L++] = tmp >> 8 & 255, arr[L++] = tmp & 255), arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  for (var tmp, output = [], i = start; i < end; i += 3)
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2], output.push(tripletToBase64(tmp));
  return output.join("");
}
function base64fromByteArray(uint8) {
  inited || init();
  for (var tmp, len = uint8.length, extraBytes = len % 3, output = "", parts = [], maxChunkLength = 16383, i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)
    parts.push(
      encodeChunk(
        uint8,
        i,
        i + maxChunkLength > len2 ? len2 : i + maxChunkLength
      )
    );
  return extraBytes === 1 ? (tmp = uint8[len - 1], output += lookup[tmp >> 2], output += lookup[tmp << 4 & 63], output += "==") : extraBytes === 2 && (tmp = (uint8[len - 2] << 8) + uint8[len - 1], output += lookup[tmp >> 10], output += lookup[tmp >> 4 & 63], output += lookup[tmp << 2 & 63], output += "="), parts.push(output), parts.join("");
}
function kMaxLength() {
  return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(that, length) {
  if (kMaxLength() < length)
    throw new RangeError("Invalid typed array length");
  return Buffer2.TYPED_ARRAY_SUPPORT ? (that = new Uint8Array(length), that.__proto__ = Buffer2.prototype) : (that === null && (that = new Buffer2(length)), that.length = length), that;
}
function Buffer2(arg, encodingOrOffset, length) {
  if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2))
    return new Buffer2(arg, encodingOrOffset, length);
  if (typeof arg == "number") {
    if (typeof encodingOrOffset == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}
function from(that, value, encodingOrOffset, length) {
  if (typeof value == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && value instanceof ArrayBuffer ? fromArrayBuffer(that, value, encodingOrOffset, length) : typeof value == "string" ? fromString(that, value, encodingOrOffset) : fromObject(that, value);
}
function assertSize(size) {
  if (typeof size != "number")
    throw new TypeError('"size" argument must be a number');
  if (size < 0)
    throw new RangeError('"size" argument must not be negative');
}
function alloc(that, size, fill3, encoding) {
  return assertSize(size), size <= 0 ? createBuffer(that, size) : fill3 !== void 0 ? typeof encoding == "string" ? createBuffer(that, size).fill(fill3, encoding) : createBuffer(that, size).fill(fill3) : createBuffer(that, size);
}
function allocUnsafe(that, size) {
  if (assertSize(size), that = createBuffer(that, size < 0 ? 0 : checked(size) | 0), !Buffer2.TYPED_ARRAY_SUPPORT)
    for (var i = 0; i < size; ++i)
      that[i] = 0;
  return that;
}
function fromString(that, string, encoding) {
  if ((typeof encoding != "string" || encoding === "") && (encoding = "utf8"), !Buffer2.isEncoding(encoding))
    throw new TypeError('"encoding" must be a valid string encoding');
  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);
  return actual !== length && (that = that.slice(0, actual)), that;
}
function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1)
    that[i] = array[i] & 255;
  return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
  if (array.byteLength, byteOffset < 0 || array.byteLength < byteOffset)
    throw new RangeError("'offset' is out of bounds");
  if (array.byteLength < byteOffset + (length || 0))
    throw new RangeError("'length' is out of bounds");
  return byteOffset === void 0 && length === void 0 ? array = new Uint8Array(array) : length === void 0 ? array = new Uint8Array(array, byteOffset) : array = new Uint8Array(array, byteOffset, length), Buffer2.TYPED_ARRAY_SUPPORT ? (that = array, that.__proto__ = Buffer2.prototype) : that = fromArrayLike(that, array), that;
}
function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    return that = createBuffer(that, len), that.length === 0 || obj.copy(that, 0, 0, len), that;
  }
  if (obj) {
    if (typeof ArrayBuffer < "u" && obj.buffer instanceof ArrayBuffer || "length" in obj)
      return typeof obj.length != "number" || isnan(obj.length) ? createBuffer(that, 0) : fromArrayLike(that, obj);
    if (obj.type === "Buffer" && Array.isArray(obj.data))
      return fromArrayLike(that, obj.data);
  }
  throw new TypeError(
    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
  );
}
function checked(length) {
  if (length >= kMaxLength())
    throw new RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes"
    );
  return length | 0;
}
function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}
function byteLength(string, encoding) {
  if (internalIsBuffer(string))
    return string.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer))
    return string.byteLength;
  typeof string != "string" && (string = "" + string);
  var len = string.length;
  if (len === 0)
    return 0;
  for (var loweredCase = !1; ; )
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes(string).length;
      default:
        if (loweredCase)
          return utf8ToBytes(string).length;
        encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
    }
}
function slowToString(encoding, start, end) {
  var loweredCase = !1;
  if ((start === void 0 || start < 0) && (start = 0), start > this.length || ((end === void 0 || end > this.length) && (end = this.length), end <= 0) || (end >>>= 0, start >>>= 0, end <= start))
    return "";
  for (encoding || (encoding = "utf8"); ; )
    switch (encoding) {
      case "hex":
        return hexSlice(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice(this, start, end);
      case "ascii":
        return asciiSlice(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice(this, start, end);
      case "base64":
        return base64Slice(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase(), loweredCase = !0;
    }
}
function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m], b[m] = i;
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0)
    return -1;
  if (typeof byteOffset == "string" ? (encoding = byteOffset, byteOffset = 0) : byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648), byteOffset = +byteOffset, isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1), byteOffset < 0 && (byteOffset = buffer.length + byteOffset), byteOffset >= buffer.length) {
    if (dir)
      return -1;
    byteOffset = buffer.length - 1;
  } else if (byteOffset < 0)
    if (dir)
      byteOffset = 0;
    else
      return -1;
  if (typeof val == "string" && (val = Buffer2.from(val, encoding)), internalIsBuffer(val))
    return val.length === 0 ? -1 : arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  if (typeof val == "number")
    return val = val & 255, Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? dir ? Uint8Array.prototype.indexOf.call(
      buffer,
      val,
      byteOffset
    ) : Uint8Array.prototype.lastIndexOf.call(
      buffer,
      val,
      byteOffset
    ) : arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1, arrLength = arr.length, valLength = val.length;
  if (encoding !== void 0 && (encoding = String(encoding).toLowerCase(), encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le")) {
    if (arr.length < 2 || val.length < 2)
      return -1;
    indexSize = 2, arrLength /= 2, valLength /= 2, byteOffset /= 2;
  }
  function read2(buf, i2) {
    return indexSize === 1 ? buf[i2] : buf.readUInt16BE(i2 * indexSize);
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++)
      if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1 && (foundIndex = i), i - foundIndex + 1 === valLength)
          return foundIndex * indexSize;
      } else
        foundIndex !== -1 && (i -= i - foundIndex), foundIndex = -1;
  } else
    for (byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength), i = byteOffset; i >= 0; i--) {
      for (var found = !0, j = 0; j < valLength; j++)
        if (read2(arr, i + j) !== read2(val, j)) {
          found = !1;
          break;
        }
      if (found)
        return i;
    }
  return -1;
}
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  length ? (length = Number(length), length > remaining && (length = remaining)) : length = remaining;
  var strLen = string.length;
  if (strLen % 2 !== 0)
    throw new TypeError("Invalid hex string");
  length > strLen / 2 && (length = strLen / 2);
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed))
      return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(
    utf8ToBytes(string, buf.length - offset),
    buf,
    offset,
    length
  );
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(
    utf16leToBytes(string, buf.length - offset),
    buf,
    offset,
    length
  );
}
function base64Slice(buf, start, end) {
  return start === 0 && end === buf.length ? base64fromByteArray(buf) : base64fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  for (var res = [], i = start; i < end; ) {
    var firstByte = buf[i], codePoint = null, bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          firstByte < 128 && (codePoint = firstByte);
          break;
        case 2:
          secondByte = buf[i + 1], (secondByte & 192) === 128 && (tempCodePoint = (firstByte & 31) << 6 | secondByte & 63, tempCodePoint > 127 && (codePoint = tempCodePoint));
          break;
        case 3:
          secondByte = buf[i + 1], thirdByte = buf[i + 2], (secondByte & 192) === 128 && (thirdByte & 192) === 128 && (tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63, tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint));
          break;
        case 4:
          secondByte = buf[i + 1], thirdByte = buf[i + 2], fourthByte = buf[i + 3], (secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128 && (tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63, tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint));
      }
    }
    codePoint === null ? (codePoint = 65533, bytesPerSequence = 1) : codePoint > 65535 && (codePoint -= 65536, res.push(codePoint >>> 10 & 1023 | 55296), codePoint = 56320 | codePoint & 1023), res.push(codePoint), i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH)
    return String.fromCharCode.apply(String, codePoints);
  for (var res = "", i = 0; i < len; )
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  return res;
}
function asciiSlice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i)
    ret += String.fromCharCode(buf[i] & 127);
  return ret;
}
function latin1Slice(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i)
    ret += String.fromCharCode(buf[i]);
  return ret;
}
function hexSlice(buf, start, end) {
  var len = buf.length;
  (!start || start < 0) && (start = 0), (!end || end < 0 || end > len) && (end = len);
  for (var out = "", i = start; i < end; ++i)
    out += toHex(buf[i]);
  return out;
}
function utf16leSlice(buf, start, end) {
  for (var bytes = buf.slice(start, end), res = "", i = 0; i < bytes.length; i += 2)
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  return res;
}
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError("offset is not uint");
  if (offset + ext > length)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
}
function objectWriteUInt16(buf, value, offset, littleEndian) {
  value < 0 && (value = 65535 + value + 1);
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i)
    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
}
function objectWriteUInt32(buf, value, offset, littleEndian) {
  value < 0 && (value = 4294967295 + value + 1);
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i)
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
}
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
  if (offset < 0)
    throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  return noAssert || checkIEEE754(
    buf,
    value,
    offset,
    4,
    34028234663852886e22,
    -34028234663852886e22
  ), ieee754write(buf, value, offset, littleEndian, 23, 4), offset + 4;
}
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  return noAssert || checkIEEE754(
    buf,
    value,
    offset,
    8,
    17976931348623157e292,
    -17976931348623157e292
  ), ieee754write(buf, value, offset, littleEndian, 52, 8), offset + 8;
}
function base64clean(str) {
  if (str = stringtrim(str).replace(INVALID_BASE64_RE, ""), str.length < 2)
    return "";
  for (; str.length % 4 !== 0; )
    str = str + "=";
  return str;
}
function stringtrim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function toHex(n) {
  return n < 16 ? "0" + n.toString(16) : n.toString(16);
}
function utf8ToBytes(string, units) {
  units = units || 1 / 0;
  for (var codePoint, length = string.length, leadSurrogate = null, bytes = [], i = 0; i < length; ++i) {
    if (codePoint = string.charCodeAt(i), codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          (units -= 3) > -1 && bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          (units -= 3) > -1 && bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        (units -= 3) > -1 && bytes.push(239, 191, 189), leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else
      leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
    if (leadSurrogate = null, codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(
        codePoint >> 12 | 224,
        codePoint >> 6 & 63 | 128,
        codePoint & 63 | 128
      );
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(
        codePoint >> 18 | 240,
        codePoint >> 12 & 63 | 128,
        codePoint >> 6 & 63 | 128,
        codePoint & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return bytes;
}
function asciiToBytes(str) {
  for (var byteArray = [], i = 0; i < str.length; ++i)
    byteArray.push(str.charCodeAt(i) & 255);
  return byteArray;
}
function utf16leToBytes(str, units) {
  for (var c, hi, lo, byteArray = [], i = 0; i < str.length && !((units -= 2) < 0); ++i)
    c = str.charCodeAt(i), hi = c >> 8, lo = c % 256, byteArray.push(lo), byteArray.push(hi);
  return byteArray;
}
function base64ToBytes(str) {
  return base64toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length && !(i + offset >= dst.length || i >= src.length); ++i)
    dst[i + offset] = src[i];
  return i;
}
function isnan(val) {
  return val !== val;
}
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer == "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE == "function" && typeof obj.slice == "function" && isFastBuffer(obj.slice(0, 0));
}
function ieee754read(buffer, offset, isLE, mLen, nBytes) {
  var e, m, eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i = isLE ? nBytes - 1 : 0, d = isLE ? -1 : 1, s = buffer[offset + i];
  for (i += d, e = s & (1 << -nBits) - 1, s >>= -nBits, nBits += eLen; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8)
    ;
  for (m = e & (1 << -nBits) - 1, e >>= -nBits, nBits += mLen; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8)
    ;
  if (e === 0)
    e = 1 - eBias;
  else {
    if (e === eMax)
      return m ? NaN : (s ? -1 : 1) * (1 / 0);
    m = m + Math.pow(2, mLen), e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function ieee754write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c, eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = isLE ? 0 : nBytes - 1, d = isLE ? 1 : -1, s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  for (value = Math.abs(value), isNaN(value) || value === 1 / 0 ? (m = isNaN(value) ? 1 : 0, e = eMax) : (e = Math.floor(Math.log(value) / Math.LN2), value * (c = Math.pow(2, -e)) < 1 && (e--, c *= 2), e + eBias >= 1 ? value += rt / c : value += rt * Math.pow(2, 1 - eBias), value * c >= 2 && (e++, c /= 2), e + eBias >= eMax ? (m = 0, e = eMax) : e + eBias >= 1 ? (m = (value * c - 1) * Math.pow(2, mLen), e = e + eBias) : (m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen), e = 0)); mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8)
    ;
  for (e = e << mLen | m, eLen += mLen; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8)
    ;
  buffer[offset + i - d] |= s * 128;
}
var lookup, revLookup, Arr, inited, MAX_ARGUMENTS_LENGTH, INVALID_BASE64_RE, init_Buffer = __esm({
  "node_modules/@esbuild-plugins/node-globals-polyfill/Buffer.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    lookup = [], revLookup = [], Arr = typeof Uint8Array < "u" ? Uint8Array : Array, inited = !1;
    Buffer2.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : !0;
    Buffer2.poolSize = 8192;
    Buffer2._augment = function(arr) {
      return arr.__proto__ = Buffer2.prototype, arr;
    };
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    };
    Buffer2.kMaxLength = kMaxLength();
    Buffer2.TYPED_ARRAY_SUPPORT && (Buffer2.prototype.__proto__ = Uint8Array.prototype, Buffer2.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && Buffer2[Symbol.species]);
    Buffer2.alloc = function(size, fill3, encoding) {
      return alloc(null, size, fill3, encoding);
    };
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(null, size);
    };
    Buffer2.isBuffer = isBuffer;
    Buffer2.compare = function(a, b) {
      if (!internalIsBuffer(a) || !internalIsBuffer(b))
        throw new TypeError("Arguments must be Buffers");
      if (a === b)
        return 0;
      for (var x = a.length, y = b.length, i = 0, len = Math.min(x, y); i < len; ++i)
        if (a[i] !== b[i]) {
          x = a[i], y = b[i];
          break;
        }
      return x < y ? -1 : y < x ? 1 : 0;
    };
    Buffer2.isEncoding = function(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    };
    Buffer2.concat = function(list, length) {
      if (!Array.isArray(list))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (list.length === 0)
        return Buffer2.alloc(0);
      var i;
      if (length === void 0)
        for (length = 0, i = 0; i < list.length; ++i)
          length += list[i].length;
      var buffer = Buffer2.allocUnsafe(length), pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf))
          throw new TypeError('"list" argument must be an Array of Buffers');
        buf.copy(buffer, pos), pos += buf.length;
      }
      return buffer;
    };
    Buffer2.byteLength = byteLength;
    Buffer2.prototype._isBuffer = !0;
    Buffer2.prototype.swap16 = function() {
      var len = this.length;
      if (len % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var i = 0; i < len; i += 2)
        swap(this, i, i + 1);
      return this;
    };
    Buffer2.prototype.swap32 = function() {
      var len = this.length;
      if (len % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var i = 0; i < len; i += 4)
        swap(this, i, i + 3), swap(this, i + 1, i + 2);
      return this;
    };
    Buffer2.prototype.swap64 = function() {
      var len = this.length;
      if (len % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var i = 0; i < len; i += 8)
        swap(this, i, i + 7), swap(this, i + 1, i + 6), swap(this, i + 2, i + 5), swap(this, i + 3, i + 4);
      return this;
    };
    Buffer2.prototype.toString = function() {
      var length = this.length | 0;
      return length === 0 ? "" : arguments.length === 0 ? utf8Slice(this, 0, length) : slowToString.apply(this, arguments);
    };
    Buffer2.prototype.equals = function(b) {
      if (!internalIsBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      return this === b ? !0 : Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.compare = function(target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer(target))
        throw new TypeError("Argument must be a Buffer");
      if (start === void 0 && (start = 0), end === void 0 && (end = target ? target.length : 0), thisStart === void 0 && (thisStart = 0), thisEnd === void 0 && (thisEnd = this.length), start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length)
        throw new RangeError("out of range index");
      if (thisStart >= thisEnd && start >= end)
        return 0;
      if (thisStart >= thisEnd)
        return -1;
      if (start >= end)
        return 1;
      if (start >>>= 0, end >>>= 0, thisStart >>>= 0, thisEnd >>>= 0, this === target)
        return 0;
      for (var x = thisEnd - thisStart, y = end - start, len = Math.min(x, y), thisCopy = this.slice(thisStart, thisEnd), targetCopy = target.slice(start, end), i = 0; i < len; ++i)
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i], y = targetCopy[i];
          break;
        }
      return x < y ? -1 : y < x ? 1 : 0;
    };
    Buffer2.prototype.includes = function(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, !0);
    };
    Buffer2.prototype.lastIndexOf = function(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, !1);
    };
    Buffer2.prototype.write = function(string, offset, length, encoding) {
      if (offset === void 0)
        encoding = "utf8", length = this.length, offset = 0;
      else if (length === void 0 && typeof offset == "string")
        encoding = offset, length = this.length, offset = 0;
      else if (isFinite(offset))
        offset = offset | 0, isFinite(length) ? (length = length | 0, encoding === void 0 && (encoding = "utf8")) : (encoding = length, length = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      var remaining = this.length - offset;
      if ((length === void 0 || length > remaining) && (length = remaining), string.length > 0 && (length < 0 || offset < 0) || offset > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      encoding || (encoding = "utf8");
      for (var loweredCase = !1; ; )
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
            return asciiWrite(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
        }
    };
    Buffer2.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    MAX_ARGUMENTS_LENGTH = 4096;
    Buffer2.prototype.slice = function(start, end) {
      var len = this.length;
      start = ~~start, end = end === void 0 ? len : ~~end, start < 0 ? (start += len, start < 0 && (start = 0)) : start > len && (start = len), end < 0 ? (end += len, end < 0 && (end = 0)) : end > len && (end = len), end < start && (end = start);
      var newBuf;
      if (Buffer2.TYPED_ARRAY_SUPPORT)
        newBuf = this.subarray(start, end), newBuf.__proto__ = Buffer2.prototype;
      else {
        var sliceLen = end - start;
        newBuf = new Buffer2(sliceLen, void 0);
        for (var i = 0; i < sliceLen; ++i)
          newBuf[i] = this[i + start];
      }
      return newBuf;
    };
    Buffer2.prototype.readUIntLE = function(offset, byteLength3, noAssert) {
      offset = offset | 0, byteLength3 = byteLength3 | 0, noAssert || checkOffset(offset, byteLength3, this.length);
      for (var val = this[offset], mul = 1, i = 0; ++i < byteLength3 && (mul *= 256); )
        val += this[offset + i] * mul;
      return val;
    };
    Buffer2.prototype.readUIntBE = function(offset, byteLength3, noAssert) {
      offset = offset | 0, byteLength3 = byteLength3 | 0, noAssert || checkOffset(offset, byteLength3, this.length);
      for (var val = this[offset + --byteLength3], mul = 1; byteLength3 > 0 && (mul *= 256); )
        val += this[offset + --byteLength3] * mul;
      return val;
    };
    Buffer2.prototype.readUInt8 = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 1, this.length), this[offset];
    };
    Buffer2.prototype.readUInt16LE = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 2, this.length), this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUInt16BE = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 2, this.length), this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUInt32LE = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUInt32BE = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function(offset, byteLength3, noAssert) {
      offset = offset | 0, byteLength3 = byteLength3 | 0, noAssert || checkOffset(offset, byteLength3, this.length);
      for (var val = this[offset], mul = 1, i = 0; ++i < byteLength3 && (mul *= 256); )
        val += this[offset + i] * mul;
      return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength3)), val;
    };
    Buffer2.prototype.readIntBE = function(offset, byteLength3, noAssert) {
      offset = offset | 0, byteLength3 = byteLength3 | 0, noAssert || checkOffset(offset, byteLength3, this.length);
      for (var i = byteLength3, mul = 1, val = this[offset + --i]; i > 0 && (mul *= 256); )
        val += this[offset + --i] * mul;
      return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength3)), val;
    };
    Buffer2.prototype.readInt8 = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 1, this.length), this[offset] & 128 ? (255 - this[offset] + 1) * -1 : this[offset];
    };
    Buffer2.prototype.readInt16LE = function(offset, noAssert) {
      noAssert || checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function(offset, noAssert) {
      noAssert || checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), ieee754read(this, offset, !0, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), ieee754read(this, offset, !1, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 8, this.length), ieee754read(this, offset, !0, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function(offset, noAssert) {
      return noAssert || checkOffset(offset, 8, this.length), ieee754read(this, offset, !1, 52, 8);
    };
    Buffer2.prototype.writeUIntLE = function(value, offset, byteLength3, noAssert) {
      if (value = +value, offset = offset | 0, byteLength3 = byteLength3 | 0, !noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt(this, value, offset, byteLength3, maxBytes, 0);
      }
      var mul = 1, i = 0;
      for (this[offset] = value & 255; ++i < byteLength3 && (mul *= 256); )
        this[offset + i] = value / mul & 255;
      return offset + byteLength3;
    };
    Buffer2.prototype.writeUIntBE = function(value, offset, byteLength3, noAssert) {
      if (value = +value, offset = offset | 0, byteLength3 = byteLength3 | 0, !noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt(this, value, offset, byteLength3, maxBytes, 0);
      }
      var i = byteLength3 - 1, mul = 1;
      for (this[offset + i] = value & 255; --i >= 0 && (mul *= 256); )
        this[offset + i] = value / mul & 255;
      return offset + byteLength3;
    };
    Buffer2.prototype.writeUInt8 = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 1, 255, 0), Buffer2.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), this[offset] = value & 255, offset + 1;
    };
    Buffer2.prototype.writeUInt16LE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value & 255, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), offset + 2;
    };
    Buffer2.prototype.writeUInt16BE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = value & 255) : objectWriteUInt16(this, value, offset, !1), offset + 2;
    };
    Buffer2.prototype.writeUInt32LE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset + 3] = value >>> 24, this[offset + 2] = value >>> 16, this[offset + 1] = value >>> 8, this[offset] = value & 255) : objectWriteUInt32(this, value, offset, !0), offset + 4;
    };
    Buffer2.prototype.writeUInt32BE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = value & 255) : objectWriteUInt32(this, value, offset, !1), offset + 4;
    };
    Buffer2.prototype.writeIntLE = function(value, offset, byteLength3, noAssert) {
      if (value = +value, offset = offset | 0, !noAssert) {
        var limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt(this, value, offset, byteLength3, limit - 1, -limit);
      }
      var i = 0, mul = 1, sub = 0;
      for (this[offset] = value & 255; ++i < byteLength3 && (mul *= 256); )
        value < 0 && sub === 0 && this[offset + i - 1] !== 0 && (sub = 1), this[offset + i] = (value / mul >> 0) - sub & 255;
      return offset + byteLength3;
    };
    Buffer2.prototype.writeIntBE = function(value, offset, byteLength3, noAssert) {
      if (value = +value, offset = offset | 0, !noAssert) {
        var limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt(this, value, offset, byteLength3, limit - 1, -limit);
      }
      var i = byteLength3 - 1, mul = 1, sub = 0;
      for (this[offset + i] = value & 255; --i >= 0 && (mul *= 256); )
        value < 0 && sub === 0 && this[offset + i + 1] !== 0 && (sub = 1), this[offset + i] = (value / mul >> 0) - sub & 255;
      return offset + byteLength3;
    };
    Buffer2.prototype.writeInt8 = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 1, 127, -128), Buffer2.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), value < 0 && (value = 255 + value + 1), this[offset] = value & 255, offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value & 255, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = value & 255) : objectWriteUInt16(this, value, offset, !1), offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value & 255, this[offset + 1] = value >>> 8, this[offset + 2] = value >>> 16, this[offset + 3] = value >>> 24) : objectWriteUInt32(this, value, offset, !0), offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), value < 0 && (value = 4294967295 + value + 1), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = value & 255) : objectWriteUInt32(this, value, offset, !1), offset + 4;
    };
    Buffer2.prototype.writeFloatLE = function(value, offset, noAssert) {
      return writeFloat(this, value, offset, !0, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function(value, offset, noAssert) {
      return writeFloat(this, value, offset, !1, noAssert);
    };
    Buffer2.prototype.writeDoubleLE = function(value, offset, noAssert) {
      return writeDouble(this, value, offset, !0, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function(value, offset, noAssert) {
      return writeDouble(this, value, offset, !1, noAssert);
    };
    Buffer2.prototype.copy = function(target, targetStart, start, end) {
      if (start || (start = 0), !end && end !== 0 && (end = this.length), targetStart >= target.length && (targetStart = target.length), targetStart || (targetStart = 0), end > 0 && end < start && (end = start), end === start || target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0)
        throw new RangeError("targetStart out of bounds");
      if (start < 0 || start >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      end > this.length && (end = this.length), target.length - targetStart < end - start && (end = target.length - targetStart + start);
      var len = end - start, i;
      if (this === target && start < targetStart && targetStart < end)
        for (i = len - 1; i >= 0; --i)
          target[i + targetStart] = this[i + start];
      else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT)
        for (i = 0; i < len; ++i)
          target[i + targetStart] = this[i + start];
      else
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      return len;
    };
    Buffer2.prototype.fill = function(val, start, end, encoding) {
      if (typeof val == "string") {
        if (typeof start == "string" ? (encoding = start, start = 0, end = this.length) : typeof end == "string" && (encoding = end, end = this.length), val.length === 1) {
          var code = val.charCodeAt(0);
          code < 256 && (val = code);
        }
        if (encoding !== void 0 && typeof encoding != "string")
          throw new TypeError("encoding must be a string");
        if (typeof encoding == "string" && !Buffer2.isEncoding(encoding))
          throw new TypeError("Unknown encoding: " + encoding);
      } else
        typeof val == "number" && (val = val & 255);
      if (start < 0 || this.length < start || this.length < end)
        throw new RangeError("Out of range index");
      if (end <= start)
        return this;
      start = start >>> 0, end = end === void 0 ? this.length : end >>> 0, val || (val = 0);
      var i;
      if (typeof val == "number")
        for (i = start; i < end; ++i)
          this[i] = val;
      else {
        var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString()), len = bytes.length;
        for (i = 0; i < end - start; ++i)
          this[i + start] = bytes[i % len];
      }
      return this;
    };
    INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  }
});

// node_modules/@esbuild-plugins/node-globals-polyfill/_buffer.js
var init_buffer = __esm({
  "node_modules/@esbuild-plugins/node-globals-polyfill/_buffer.js"() {
    init_Buffer();
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    exports.parse = parse2;
    exports.serialize = serialize2;
    var decode = decodeURIComponent, encode = encodeURIComponent, fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str != "string")
        throw new TypeError("argument str must be a string");
      for (var obj = {}, opt = options || {}, pairs = str.split(";"), dec = opt.decode || decode, i = 0; i < pairs.length; i++) {
        var pair = pairs[i], index = pair.indexOf("=");
        if (!(index < 0)) {
          var key = pair.substring(0, index).trim();
          if (obj[key] == null) {
            var val = pair.substring(index + 1, pair.length).trim();
            val[0] === '"' && (val = val.slice(1, -1)), obj[key] = tryDecode(val, dec);
          }
        }
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {}, enc = opt.encode || encode;
      if (typeof enc != "function")
        throw new TypeError("option encode is invalid");
      if (!fieldContentRegExp.test(name))
        throw new TypeError("argument name is invalid");
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value))
        throw new TypeError("argument val is invalid");
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge))
          throw new TypeError("option maxAge is invalid");
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain))
          throw new TypeError("option domain is invalid");
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path))
          throw new TypeError("option path is invalid");
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString != "function")
          throw new TypeError("option expires is invalid");
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly && (str += "; HttpOnly"), opt.secure && (str += "; Secure"), opt.sameSite) {
        var sameSite = typeof opt.sameSite == "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case !0:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch {
        return str;
      }
    }
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/warnings.js
function warnOnce(condition, message) {
  !condition && !alreadyWarned[message] && (alreadyWarned[message] = !0, console.warn(message));
}
var alreadyWarned, init_warnings = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/warnings.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    alreadyWarned = {};
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/cookies.js
async function encodeCookieValue(sign, value, secrets) {
  let encoded = encodeData(value);
  return secrets.length > 0 && (encoded = await sign(encoded, secrets[0])), encoded;
}
async function decodeCookieValue(unsign, value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== !1)
        return decodeData(unsignedValue);
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString(), result = "", index = 0, chr, code;
  for (; index < str.length; )
    chr = str.charAt(index++), /[\w*+\-./@]/.exec(chr) ? result += chr : (code = chr.charCodeAt(0), code < 256 ? result += "%" + hex(code, 2) : result += "%u" + hex(code, 4).toUpperCase());
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  for (; result.length < length; )
    result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString(), result = "", index = 0, chr, part;
  for (; index < str.length; ) {
    if (chr = str.charAt(index++), chr === "%") {
      if (str.charAt(index) === "u") {
        if (part = str.slice(index + 1, index + 5), /^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16)), index += 5;
          continue;
        }
      } else if (part = str.slice(index, index + 2), /^[\da-f]{2}$/i.exec(part)) {
        result += String.fromCharCode(parseInt(part, 16)), index += 2;
        continue;
      }
    }
    result += chr;
  }
  return result;
}
function warnOnceAboutExpiresCookie(name, expires) {
  warnOnce(!expires, `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
}
var import_cookie, createCookieFactory, isCookie, init_cookies = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/cookies.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    import_cookie = __toESM(require_cookie());
    init_warnings();
    createCookieFactory = ({
      sign,
      unsign
    }) => (name, cookieOptions = {}) => {
      let {
        secrets,
        ...options
      } = {
        secrets: [],
        path: "/",
        sameSite: "lax",
        ...cookieOptions
      };
      return warnOnceAboutExpiresCookie(name, options.expires), {
        get name() {
          return name;
        },
        get isSigned() {
          return secrets.length > 0;
        },
        get expires() {
          return typeof options.maxAge < "u" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
        },
        async parse(cookieHeader, parseOptions) {
          if (!cookieHeader)
            return null;
          let cookies = (0, import_cookie.parse)(cookieHeader, {
            ...options,
            ...parseOptions
          });
          return name in cookies ? cookies[name] === "" ? "" : await decodeCookieValue(unsign, cookies[name], secrets) : null;
        },
        async serialize(value, serializeOptions) {
          return (0, import_cookie.serialize)(name, value === "" ? "" : await encodeCookieValue(sign, value, secrets), {
            ...options,
            ...serializeOptions
          });
        }
      };
    }, isCookie = (object) => object != null && typeof object.name == "string" && typeof object.isSigned == "boolean" && typeof object.parse == "function" && typeof object.serialize == "function";
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/utils.js
function stringToArray(s) {
  let utf8 = unescape(encodeURIComponent(s));
  return Uint8Array.from(utf8, (_2, i) => utf8.charCodeAt(i));
}
function arrayToString(a) {
  let utf8 = String.fromCharCode.apply(null, a);
  return decodeURIComponent(escape(utf8));
}
function mergeArrays(...arrays) {
  let out = new Uint8Array(arrays.reduce((total, arr) => total + arr.length, 0)), offset = 0;
  for (let arr of arrays)
    out.set(arr, offset), offset += arr.length;
  return out;
}
function arraysEqual(a, b) {
  if (a.length !== b.length)
    return !1;
  for (let i = 0; i < a.length; i++)
    if (a[i] !== b[i])
      return !1;
  return !0;
}
var init_utils = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/utils.js"() {
    init_virtual_process_polyfill();
    init_buffer();
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/search.js
function coerce(a) {
  return a instanceof Uint8Array ? (index) => a[index] : a;
}
function jsmemcmp(buf1, pos1, buf2, pos2, len) {
  let fn1 = coerce(buf1), fn2 = coerce(buf2);
  for (let i = 0; i < len; ++i)
    if (fn1(pos1 + i) !== fn2(pos2 + i))
      return !1;
  return !0;
}
function createOccurenceTable(s) {
  let table = new Array(256).fill(s.length);
  if (s.length > 1)
    for (let i = 0; i < s.length - 1; i++)
      table[s[i]] = s.length - 1 - i;
  return table;
}
var MATCH, StreamSearch, ReadableStreamSearch, EOQ, QueueableStreamSearch, init_search = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/search.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_utils();
    MATCH = Symbol("Match"), StreamSearch = class {
      constructor(needle) {
        this._lookbehind = new Uint8Array(), typeof needle == "string" ? this._needle = needle = stringToArray(needle) : this._needle = needle, this._lastChar = needle[needle.length - 1], this._occ = createOccurenceTable(needle);
      }
      feed(chunk) {
        let pos = 0, tokens, allTokens = [];
        for (; pos !== chunk.length; )
          [pos, ...tokens] = this._feed(chunk, pos), allTokens.push(...tokens);
        return allTokens;
      }
      end() {
        let tail = this._lookbehind;
        return this._lookbehind = new Uint8Array(), tail;
      }
      _feed(data, bufPos) {
        let tokens = [], pos = -this._lookbehind.length;
        if (pos < 0) {
          for (; pos < 0 && pos <= data.length - this._needle.length; ) {
            let ch = this._charAt(data, pos + this._needle.length - 1);
            if (ch === this._lastChar && this._memcmp(data, pos, this._needle.length - 1))
              return pos > -this._lookbehind.length && tokens.push(this._lookbehind.slice(0, this._lookbehind.length + pos)), tokens.push(MATCH), this._lookbehind = new Uint8Array(), [
                pos + this._needle.length,
                ...tokens
              ];
            pos += this._occ[ch];
          }
          if (pos < 0)
            for (; pos < 0 && !this._memcmp(data, pos, data.length - pos); )
              pos++;
          if (pos >= 0)
            tokens.push(this._lookbehind), this._lookbehind = new Uint8Array();
          else {
            let bytesToCutOff = this._lookbehind.length + pos;
            return bytesToCutOff > 0 && (tokens.push(this._lookbehind.slice(0, bytesToCutOff)), this._lookbehind = this._lookbehind.slice(bytesToCutOff)), this._lookbehind = Uint8Array.from(new Array(this._lookbehind.length + data.length), (_2, i) => this._charAt(data, i - this._lookbehind.length)), [
              data.length,
              ...tokens
            ];
          }
        }
        for (pos += bufPos; pos <= data.length - this._needle.length; ) {
          let ch = data[pos + this._needle.length - 1];
          if (ch === this._lastChar && data[pos] === this._needle[0] && jsmemcmp(this._needle, 0, data, pos, this._needle.length - 1))
            return pos > bufPos && tokens.push(data.slice(bufPos, pos)), tokens.push(MATCH), [
              pos + this._needle.length,
              ...tokens
            ];
          pos += this._occ[ch];
        }
        if (pos < data.length) {
          for (; pos < data.length && (data[pos] !== this._needle[0] || !jsmemcmp(data, pos, this._needle, 0, data.length - pos)); )
            ++pos;
          pos < data.length && (this._lookbehind = data.slice(pos));
        }
        return pos > 0 && tokens.push(data.slice(bufPos, pos < data.length ? pos : data.length)), [
          data.length,
          ...tokens
        ];
      }
      _charAt(data, pos) {
        return pos < 0 ? this._lookbehind[this._lookbehind.length + pos] : data[pos];
      }
      _memcmp(data, pos, len) {
        return jsmemcmp(this._charAt.bind(this, data), pos, this._needle, 0, len);
      }
    }, ReadableStreamSearch = class {
      constructor(needle, _readableStream) {
        this._readableStream = _readableStream, this._search = new StreamSearch(needle);
      }
      async *[Symbol.asyncIterator]() {
        let reader = this._readableStream.getReader();
        try {
          for (; ; ) {
            let result = await reader.read();
            if (result.done)
              break;
            yield* this._search.feed(result.value);
          }
          let tail = this._search.end();
          tail.length && (yield tail);
        } finally {
          reader.releaseLock();
        }
      }
    }, EOQ = Symbol("End of Queue"), QueueableStreamSearch = class {
      constructor(needle) {
        this._chunksQueue = [], this._closed = !1, this._search = new StreamSearch(needle);
      }
      push(...chunks) {
        if (this._closed)
          throw new Error("cannot call push after close");
        this._chunksQueue.push(...chunks), this._notify && this._notify();
      }
      close() {
        if (this._closed)
          throw new Error("close was already called");
        this._closed = !0, this._chunksQueue.push(EOQ), this._notify && this._notify();
      }
      async *[Symbol.asyncIterator]() {
        for (; ; ) {
          let chunk;
          for (; !(chunk = this._chunksQueue.shift()); )
            await new Promise((resolve) => this._notify = resolve), this._notify = void 0;
          if (chunk === EOQ)
            break;
          yield* this._search.feed(chunk);
        }
        let tail = this._search.end();
        tail.length && (yield tail);
      }
    };
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/index.js
function parseContentDisposition(header) {
  let parts = header.split(";").map((part) => part.trim());
  if (parts.shift() !== "form-data")
    throw new Error('malformed content-disposition header: missing "form-data" in `' + JSON.stringify(parts) + "`");
  let out = {};
  for (let part of parts) {
    let kv = part.split("=", 2);
    if (kv.length !== 2)
      throw new Error("malformed content-disposition header: key-value pair not found - " + part + " in `" + header + "`");
    let [name, value] = kv;
    if (value[0] === '"' && value[value.length - 1] === '"')
      out[name] = value.slice(1, -1).replace(/\\"/g, '"');
    else if (value[0] !== '"' && value[value.length - 1] !== '"')
      out[name] = value;
    else if (value[0] === '"' && value[value.length - 1] !== '"' || value[0] !== '"' && value[value.length - 1] === '"')
      throw new Error("malformed content-disposition header: mismatched quotations in `" + header + "`");
  }
  if (!out.name)
    throw new Error("malformed content-disposition header: missing field name in `" + header + "`");
  return out;
}
function parsePartHeaders(lines) {
  let entries = [], disposition = !1, line;
  for (; typeof (line = lines.shift()) < "u"; ) {
    let colon = line.indexOf(":");
    if (colon === -1)
      throw new Error("malformed multipart-form header: missing colon");
    let header = line.slice(0, colon).trim().toLowerCase(), value = line.slice(colon + 1).trim();
    switch (header) {
      case "content-disposition":
        disposition = !0, entries.push(...Object.entries(parseContentDisposition(value)));
        break;
      case "content-type":
        entries.push([
          "contentType",
          value
        ]);
    }
  }
  if (!disposition)
    throw new Error("malformed multipart-form header: missing content-disposition");
  return Object.fromEntries(entries);
}
async function readHeaderLines(it, needle) {
  let firstChunk = !0, lastTokenWasMatch = !1, headerLines = [[]], crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    let result = await it.next();
    if (result.done)
      throw new Error("malformed multipart-form data: unexpected end of stream");
    if (firstChunk && result.value !== MATCH && arraysEqual(result.value.slice(0, 2), dash))
      return [
        void 0,
        new Uint8Array()
      ];
    let chunk;
    if (result.value !== MATCH)
      chunk = result.value;
    else if (!lastTokenWasMatch)
      chunk = needle;
    else
      throw new Error("malformed multipart-form data: unexpected boundary");
    if (!chunk.length)
      continue;
    firstChunk && (firstChunk = !1);
    let tokens = crlfSearch.feed(chunk);
    for (let [i, token] of tokens.entries()) {
      let isMatch = token === MATCH;
      if (!(!isMatch && !token.length)) {
        if (lastTokenWasMatch && isMatch)
          return tokens.push(crlfSearch.end()), [
            headerLines.filter((chunks) => chunks.length).map(mergeArrays2).map(arrayToString),
            mergeArrays(...tokens.slice(i + 1).map((token2) => token2 === MATCH ? CRLF : token2))
          ];
        (lastTokenWasMatch = isMatch) ? headerLines.push([]) : headerLines[headerLines.length - 1].push(token);
      }
    }
  }
}
async function* streamMultipart(body2, boundary) {
  let needle = mergeArrays(dash, stringToArray(boundary)), it = new ReadableStreamSearch(needle, body2)[Symbol.asyncIterator]();
  for (; ; ) {
    let result = await it.next();
    if (result.done)
      return;
    if (result.value === MATCH)
      break;
  }
  let crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    let feedChunk = function(chunk) {
      let chunks = [];
      for (let token of crlfSearch.feed(chunk))
        trailingCRLF && chunks.push(CRLF), (trailingCRLF = token === MATCH) || chunks.push(token);
      return mergeArrays(...chunks);
    }, [headerLines, tail] = await readHeaderLines(it, needle);
    if (!headerLines)
      return;
    async function nextToken() {
      let result = await it.next();
      if (result.done)
        throw new Error("malformed multipart-form data: unexpected end of stream");
      return result;
    }
    let trailingCRLF = !1, done2 = !1;
    async function nextChunk() {
      let result = await nextToken(), chunk;
      if (result.value !== MATCH)
        chunk = result.value;
      else if (!trailingCRLF)
        chunk = CRLF;
      else
        return done2 = !0, { value: crlfSearch.end() };
      return { value: feedChunk(chunk) };
    }
    let bufferedChunks = [{ value: feedChunk(tail) }];
    for (yield {
      ...parsePartHeaders(headerLines),
      data: {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          for (; ; ) {
            let result = bufferedChunks.shift();
            if (!result)
              break;
            if (result.value.length > 0)
              return result;
          }
          for (; ; ) {
            if (done2)
              return {
                done: done2,
                value: void 0
              };
            let result = await nextChunk();
            if (result.value.length > 0)
              return result;
          }
        }
      }
    }; !done2; )
      bufferedChunks.push(await nextChunk());
  }
}
var mergeArrays2, dash, CRLF, init_src = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/index.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_search();
    init_utils();
    mergeArrays2 = Function.prototype.apply.bind(mergeArrays, void 0), dash = stringToArray("--"), CRLF = stringToArray(`\r
`);
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/formData.js
function composeUploadHandlers(...handlers) {
  return async (part) => {
    for (let handler of handlers) {
      let value = await handler(part);
      if (typeof value < "u" && value !== null)
        return value;
    }
  };
}
async function parseMultipartFormData(request, uploadHandler) {
  let contentType = request.headers.get("Content-Type") || "", [type, boundary] = contentType.split(/\s*;\s*boundary=/);
  if (!request.body || !boundary || type !== "multipart/form-data")
    throw new TypeError("Could not parse content as FormData.");
  let formData = new FormData(), parts = streamMultipart(request.body, boundary);
  for await (let part of parts) {
    if (part.done)
      break;
    typeof part.filename == "string" && (part.filename = part.filename.split(/[/\\]/).pop());
    let value = await uploadHandler(part);
    typeof value < "u" && value !== null && formData.append(part.name, value);
  }
  return formData;
}
var init_formData = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/formData.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_src();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/responses.js
function isResponse(value) {
  return value != null && typeof value.status == "number" && typeof value.statusText == "string" && typeof value.headers == "object" && typeof value.body < "u";
}
function isRedirectResponse(response) {
  return redirectStatusCodes.has(response.status);
}
function isCatchResponse(response) {
  return response.headers.get("X-Remix-Catch") != null;
}
var json, redirect, redirectStatusCodes, init_responses = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/responses.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    json = (data, init3 = {}) => {
      let responseInit = typeof init3 == "number" ? {
        status: init3
      } : init3, headers = new Headers(responseInit.headers);
      return headers.has("Content-Type") || headers.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(data), {
        ...responseInit,
        headers
      });
    }, redirect = (url, init3 = 302) => {
      let responseInit = init3;
      typeof responseInit == "number" ? responseInit = {
        status: responseInit
      } : typeof responseInit.status > "u" && (responseInit.status = 302);
      let headers = new Headers(responseInit.headers);
      return headers.set("Location", url), new Response(null, {
        ...responseInit,
        headers
      });
    };
    redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/data.js
async function callRouteAction({
  loadContext,
  match,
  request
}) {
  let action = match.route.module.action;
  if (!action) {
    let response = new Response(null, {
      status: 405
    });
    return response.headers.set("X-Remix-Catch", "yes"), response;
  }
  let result;
  try {
    result = await action({
      request: stripDataParam(stripIndexParam(request)),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error))
      throw error;
    isRedirectResponse(error) || error.headers.set("X-Remix-Catch", "yes"), result = error;
  }
  if (result === void 0)
    throw new Error(`You defined an action for route "${match.route.id}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  return isResponse(result) ? result : json(result);
}
async function callRouteLoader({
  loadContext,
  match,
  request
}) {
  let loader = match.route.module.loader;
  if (!loader)
    throw new Error(`You made a ${request.method} request to ${request.url} but did not provide a default component or \`loader\` for route "${match.route.id}", so there is no way to handle the request.`);
  let result;
  try {
    result = await loader({
      request: stripDataParam(stripIndexParam(request)),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error))
      throw error;
    isRedirectResponse(error) || error.headers.set("X-Remix-Catch", "yes"), result = error;
  }
  if (result === void 0)
    throw new Error(`You defined a loader for route "${match.route.id}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  return isResponse(result) ? result : json(result);
}
function stripIndexParam(request) {
  let url = new URL(request.url), indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues)
    indexValue && indexValuesToKeep.push(indexValue);
  for (let toKeep of indexValuesToKeep)
    url.searchParams.append("index", toKeep);
  return new Request(url.href, request);
}
function stripDataParam(request) {
  let url = new URL(request.url);
  return url.searchParams.delete("_data"), new Request(url.href, request);
}
function extractData(response) {
  let contentType = response.headers.get("Content-Type");
  return contentType && /\bapplication\/json\b/.test(contentType) ? response.json() : response.text();
}
var init_data = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/data.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_responses();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/entry.js
function createEntryMatches(matches, routes2) {
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: routes2[match.route.id]
  }));
}
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo2, routeId) => (memo2[routeId] = manifest[routeId].module, memo2), {});
}
var init_entry = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/entry.js"() {
    init_virtual_process_polyfill();
    init_buffer();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/errors.js
async function serializeError(error) {
  return {
    message: error.message,
    stack: error.stack
  };
}
var init_errors = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/errors.js"() {
    init_virtual_process_polyfill();
    init_buffer();
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var defaultParseOptions = {
      decodeValues: !0,
      map: !1,
      silent: !1
    };
    function isNonEmptyString(str) {
      return typeof str == "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString), nameValuePairStr = parts.shift(), parsed = parseNameValuePair(nameValuePairStr), name = parsed.name, value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      return parts.forEach(function(part) {
        var sides = part.split("="), key = sides.shift().trimLeft().toLowerCase(), value2 = sides.join("=");
        key === "expires" ? cookie.expires = new Date(value2) : key === "max-age" ? cookie.maxAge = parseInt(value2, 10) : key === "secure" ? cookie.secure = !0 : key === "httponly" ? cookie.httpOnly = !0 : key === "samesite" ? cookie.sameSite = value2 : cookie[key] = value2;
      }), cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "", value = "", nameValueArr = nameValuePairStr.split("=");
      return nameValueArr.length > 1 ? (name = nameValueArr.shift(), value = nameValueArr.join("=")) : value = nameValuePairStr, { name, value };
    }
    function parse2(input, options) {
      if (options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions, !input)
        return options.map ? {} : [];
      if (input.headers && input.headers["set-cookie"])
        input = input.headers["set-cookie"];
      else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key) {
          return key.toLowerCase() === "set-cookie";
        })];
        !sch && input.headers.cookie && !options.silent && console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        ), input = sch;
      }
      if (Array.isArray(input) || (input = [input]), options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions, options.map) {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          return cookies2[cookie.name] = cookie, cookies2;
        }, cookies);
      } else
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString))
        return cookiesString;
      if (typeof cookiesString != "string")
        return [];
      var cookiesStrings = [], pos = 0, start, ch, lastComma, nextStart, cookiesSeparatorFound;
      function skipWhitespace() {
        for (; pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos)); )
          pos += 1;
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        return ch = cookiesString.charAt(pos), ch !== "=" && ch !== ";" && ch !== ",";
      }
      for (; pos < cookiesString.length; ) {
        for (start = pos, cookiesSeparatorFound = !1; skipWhitespace(); )
          if (ch = cookiesString.charAt(pos), ch === ",") {
            for (lastComma = pos, pos += 1, skipWhitespace(), nextStart = pos; pos < cookiesString.length && notSpecialChar(); )
              pos += 1;
            pos < cookiesString.length && cookiesString.charAt(pos) === "=" ? (cookiesSeparatorFound = !0, pos = nextStart, cookiesStrings.push(cookiesString.substring(start, lastComma)), start = pos) : pos = lastComma + 1;
          } else
            pos += 1;
        (!cookiesSeparatorFound || pos >= cookiesString.length) && cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
      }
      return cookiesStrings;
    }
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/headers.js
function getDocumentHeaders(build, matches, routeLoaderResponses, actionResponse) {
  return matches.reduce((parentHeaders, match, index) => {
    let routeModule = build.routes[match.route.id].module, routeLoaderResponse = routeLoaderResponses[match.route.id], loaderHeaders = routeLoaderResponse ? routeLoaderResponse.headers : new Headers(), actionHeaders = actionResponse ? actionResponse.headers : new Headers(), headers = new Headers(routeModule.headers ? typeof routeModule.headers == "function" ? routeModule.headers({
      loaderHeaders,
      parentHeaders,
      actionHeaders
    }) : routeModule.headers : void 0);
    return prependCookies(actionHeaders, headers), prependCookies(loaderHeaders, headers), prependCookies(parentHeaders, headers), headers;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  parentSetCookieString && (0, import_set_cookie_parser.splitCookiesString)(parentSetCookieString).forEach((cookie) => {
    childHeaders.append("Set-Cookie", cookie);
  });
}
var import_set_cookie_parser, init_headers = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/headers.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    import_set_cookie_parser = __toESM(require_set_cookie());
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/mode.js
function isServerMode(value) {
  return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
}
var ServerMode, init_mode = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/mode.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    (function(ServerMode2) {
      ServerMode2.Development = "development", ServerMode2.Production = "production", ServerMode2.Test = "test";
    })(ServerMode || (ServerMode = {}));
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty2 = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val == null)
        throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign)
          return !1;
        var test1 = new String("abc");
        if (test1[5] = "de", Object.getOwnPropertyNames(test1)[0] === "5")
          return !1;
        for (var test2 = {}, i = 0; i < 10; i++)
          test2["_" + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789")
          return !1;
        var test3 = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        }), Object.keys(Object.assign({}, test3)).join("") === "abcdefghijklmnopqrst";
      } catch {
        return !1;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      for (var from3, to = toObject(target), symbols, s = 1; s < arguments.length; s++) {
        from3 = Object(arguments[s]);
        for (var key in from3)
          hasOwnProperty2.call(from3, key) && (to[key] = from3[key]);
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from3);
          for (var i = 0; i < symbols.length; i++)
            propIsEnumerable.call(from3, symbols[i]) && (to[symbols[i]] = from3[symbols[i]]);
        }
      }
      return to;
    };
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    (function() {
      "use strict";
      var _assign = require_object_assign(), ReactVersion = "17.0.2", REACT_ELEMENT_TYPE = 60103, REACT_PORTAL_TYPE = 60106;
      exports.Fragment = 60107, exports.StrictMode = 60108, exports.Profiler = 60114;
      var REACT_PROVIDER_TYPE = 60109, REACT_CONTEXT_TYPE = 60110, REACT_FORWARD_REF_TYPE = 60112;
      exports.Suspense = 60113;
      var REACT_SUSPENSE_LIST_TYPE = 60120, REACT_MEMO_TYPE = 60115, REACT_LAZY_TYPE = 60116, REACT_BLOCK_TYPE = 60121, REACT_SERVER_BLOCK_TYPE = 60122, REACT_FUNDAMENTAL_TYPE = 60117, REACT_SCOPE_TYPE = 60119, REACT_OPAQUE_ID_TYPE = 60128, REACT_DEBUG_TRACING_MODE_TYPE = 60129, REACT_OFFSCREEN_TYPE = 60130, REACT_LEGACY_HIDDEN_TYPE = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element"), REACT_PORTAL_TYPE = symbolFor("react.portal"), exports.Fragment = symbolFor("react.fragment"), exports.StrictMode = symbolFor("react.strict_mode"), exports.Profiler = symbolFor("react.profiler"), REACT_PROVIDER_TYPE = symbolFor("react.provider"), REACT_CONTEXT_TYPE = symbolFor("react.context"), REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref"), exports.Suspense = symbolFor("react.suspense"), REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list"), REACT_MEMO_TYPE = symbolFor("react.memo"), REACT_LAZY_TYPE = symbolFor("react.lazy"), REACT_BLOCK_TYPE = symbolFor("react.block"), REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block"), REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental"), REACT_SCOPE_TYPE = symbolFor("react.scope"), REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id"), REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode"), REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen"), REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
      }
      var MAYBE_ITERATOR_SYMBOL = typeof Symbol == "function" && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable != "object")
          return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        return typeof maybeIterator == "function" ? maybeIterator : null;
      }
      var ReactCurrentDispatcher = {
        current: null
      }, ReactCurrentBatchConfig = {
        transition: 0
      }, ReactCurrentOwner = {
        current: null
      }, ReactDebugCurrentFrame = {}, currentExtraStackFrame = null;
      function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
      }
      ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
      }, ReactDebugCurrentFrame.getCurrentStack = null, ReactDebugCurrentFrame.getStackAddendum = function() {
        var stack = "";
        currentExtraStackFrame && (stack += currentExtraStackFrame);
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        return impl && (stack += impl() || ""), stack;
      };
      var IsSomeRendererActing = {
        current: !1
      }, ReactSharedInternals = {
        ReactCurrentDispatcher,
        ReactCurrentBatchConfig,
        ReactCurrentOwner,
        IsSomeRendererActing,
        assign: _assign
      };
      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
      function warn(format2) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
            args[_key - 1] = arguments[_key];
          printWarning("warn", format2, args);
        }
      }
      function error(format2) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
            args[_key2 - 1] = arguments[_key2];
          printWarning("error", format2, args);
        }
      }
      function printWarning(level, format2, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame, stack = ReactDebugCurrentFrame2.getStackAddendum();
          stack !== "" && (format2 += "%s", args = args.concat([stack]));
          var argsWithFormat = args.map(function(item) {
            return "" + item;
          });
          argsWithFormat.unshift("Warning: " + format2), Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var didWarnStateUpdateForUnmountedComponent = {};
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor, componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass", warningKey = componentName + "." + callerName;
          if (didWarnStateUpdateForUnmountedComponent[warningKey])
            return;
          error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName), didWarnStateUpdateForUnmountedComponent[warningKey] = !0;
        }
      }
      var ReactNoopUpdateQueue = {
        isMounted: function(publicInstance) {
          return !1;
        },
        enqueueForceUpdate: function(publicInstance, callback, callerName) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, "setState");
        }
      }, emptyObject = {};
      Object.freeze(emptyObject);
      function Component(props, context, updater) {
        this.props = props, this.context = context, this.refs = emptyObject, this.updater = updater || ReactNoopUpdateQueue;
      }
      Component.prototype.isReactComponent = {}, Component.prototype.setState = function(partialState, callback) {
        if (!(typeof partialState == "object" || typeof partialState == "function" || partialState == null))
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      }, Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      {
        var deprecatedAPIs = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, defineDeprecationWarning = function(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function() {
              warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
            }
          });
        };
        for (var fnName in deprecatedAPIs)
          deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      }
      function ComponentDummy() {
      }
      ComponentDummy.prototype = Component.prototype;
      function PureComponent(props, context, updater) {
        this.props = props, this.context = context, this.refs = emptyObject, this.updater = updater || ReactNoopUpdateQueue;
      }
      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
      pureComponentPrototype.constructor = PureComponent, _assign(pureComponentPrototype, Component.prototype), pureComponentPrototype.isPureReactComponent = !0;
      function createRef() {
        var refObject = {
          current: null
        };
        return Object.seal(refObject), refObject;
      }
      function getWrappedName2(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentName(type) {
        if (type == null)
          return null;
        if (typeof type.tag == "number" && error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof type == "function")
          return type.displayName || type.name || null;
        if (typeof type == "string")
          return type;
        switch (type) {
          case exports.Fragment:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case exports.Profiler:
            return "Profiler";
          case exports.StrictMode:
            return "StrictMode";
          case exports.Suspense:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName2(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
              return getComponentName(type._render);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init3 = lazyComponent._init;
              try {
                return getComponentName(init3(payload));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var hasOwnProperty2 = Object.prototype.hasOwnProperty, RESERVED_PROPS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
      didWarnAboutStringRefs = {};
      function hasValidRef(config3) {
        if (hasOwnProperty2.call(config3, "ref")) {
          var getter = Object.getOwnPropertyDescriptor(config3, "ref").get;
          if (getter && getter.isReactWarning)
            return !1;
        }
        return config3.ref !== void 0;
      }
      function hasValidKey(config3) {
        if (hasOwnProperty2.call(config3, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config3, "key").get;
          if (getter && getter.isReactWarning)
            return !1;
        }
        return config3.key !== void 0;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName));
        };
        warnAboutAccessingKey.isReactWarning = !0, Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: !0
        });
      }
      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
          specialPropRefWarningShown || (specialPropRefWarningShown = !0, error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName));
        };
        warnAboutAccessingRef.isReactWarning = !0, Object.defineProperty(props, "ref", {
          get: warnAboutAccessingRef,
          configurable: !0
        });
      }
      function warnIfStringRefCannotBeAutoConverted(config3) {
        if (typeof config3.ref == "string" && ReactCurrentOwner.current && config3.__self && ReactCurrentOwner.current.stateNode !== config3.__self) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);
          didWarnAboutStringRefs[componentName] || (error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config3.ref), didWarnAboutStringRefs[componentName] = !0);
        }
      }
      var ReactElement = function(type, key, ref, self2, source, owner, props) {
        var element = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: owner
        };
        return element._store = {}, Object.defineProperty(element._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(element, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: self2
        }), Object.defineProperty(element, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: source
        }), Object.freeze && (Object.freeze(element.props), Object.freeze(element)), element;
      };
      function createElement8(type, config3, children) {
        var propName, props = {}, key = null, ref = null, self2 = null, source = null;
        if (config3 != null) {
          hasValidRef(config3) && (ref = config3.ref, warnIfStringRefCannotBeAutoConverted(config3)), hasValidKey(config3) && (key = "" + config3.key), self2 = config3.__self === void 0 ? null : config3.__self, source = config3.__source === void 0 ? null : config3.__source;
          for (propName in config3)
            hasOwnProperty2.call(config3, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (props[propName] = config3[propName]);
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1)
          props.children = children;
        else if (childrenLength > 1) {
          for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
            childArray[i] = arguments[i + 2];
          Object.freeze && Object.freeze(childArray), props.children = childArray;
        }
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps)
            props[propName] === void 0 && (props[propName] = defaultProps[propName]);
        }
        if (key || ref) {
          var displayName = typeof type == "function" ? type.displayName || type.name || "Unknown" : type;
          key && defineKeyPropWarningGetter(props, displayName), ref && defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
      }
      function cloneElement(element, config3, children) {
        if (element == null)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName, props = _assign({}, element.props), key = element.key, ref = element.ref, self2 = element._self, source = element._source, owner = element._owner;
        if (config3 != null) {
          hasValidRef(config3) && (ref = config3.ref, owner = ReactCurrentOwner.current), hasValidKey(config3) && (key = "" + config3.key);
          var defaultProps;
          element.type && element.type.defaultProps && (defaultProps = element.type.defaultProps);
          for (propName in config3)
            hasOwnProperty2.call(config3, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (config3[propName] === void 0 && defaultProps !== void 0 ? props[propName] = defaultProps[propName] : props[propName] = config3[propName]);
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1)
          props.children = children;
        else if (childrenLength > 1) {
          for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
            childArray[i] = arguments[i + 2];
          props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self2, source, owner, props);
      }
      function isValidElement2(object) {
        return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var SEPARATOR = ".", SUBSEPARATOR = ":";
      function escape2(key) {
        var escapeRegex = /[=:]/g, escaperLookup = {
          "=": "=0",
          ":": "=2"
        }, escapedString = key.replace(escapeRegex, function(match) {
          return escaperLookup[match];
        });
        return "$" + escapedString;
      }
      var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g;
      function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, "$&/");
      }
      function getElementKey(element, index) {
        return typeof element == "object" && element !== null && element.key != null ? escape2("" + element.key) : index.toString(36);
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        (type === "undefined" || type === "boolean") && (children = null);
        var invokeCallback = !1;
        if (children === null)
          invokeCallback = !0;
        else
          switch (type) {
            case "string":
            case "number":
              invokeCallback = !0;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = !0;
              }
          }
        if (invokeCallback) {
          var _child = children, mappedChild = callback(_child), childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
          if (Array.isArray(mappedChild)) {
            var escapedChildKey = "";
            childKey != null && (escapedChildKey = escapeUserProvidedKey(childKey) + "/"), mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
              return c;
            });
          } else
            mappedChild != null && (isValidElement2(mappedChild) && (mappedChild = cloneAndReplaceKey(
              mappedChild,
              escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey
            )), array.push(mappedChild));
          return 1;
        }
        var child, nextName, subtreeCount = 0, nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (Array.isArray(children))
          for (var i = 0; i < children.length; i++)
            child = children[i], nextName = nextNamePrefix + getElementKey(child, i), subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        else {
          var iteratorFn = getIteratorFn(children);
          if (typeof iteratorFn == "function") {
            var iterableChildren = children;
            iteratorFn === iterableChildren.entries && (didWarnAboutMaps || warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0);
            for (var iterator = iteratorFn.call(iterableChildren), step, ii = 0; !(step = iterator.next()).done; )
              child = step.value, nextName = nextNamePrefix + getElementKey(child, ii++), subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          } else if (type === "object") {
            var childrenString = "" + children;
            throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return subtreeCount;
      }
      function mapChildren(children, func, context) {
        if (children == null)
          return children;
        var result = [], count = 0;
        return mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        }), result;
      }
      function countChildren(children) {
        var n = 0;
        return mapChildren(children, function() {
          n++;
        }), n;
      }
      function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      }
      function toArray(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      }
      function onlyChild(children) {
        if (!isValidElement2(children))
          throw Error("React.Children.only expected to receive a single React element child.");
        return children;
      }
      function createContext5(defaultValue, calculateChangedBits) {
        calculateChangedBits === void 0 ? calculateChangedBits = null : calculateChangedBits !== null && typeof calculateChangedBits != "function" && error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _calculateChangedBits: calculateChangedBits,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = !1, hasWarnedAboutUsingConsumerProvider = !1, hasWarnedAboutDisplayNameOnConsumer = !1;
        {
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits
          };
          Object.defineProperties(Consumer, {
            Provider: {
              get: function() {
                return hasWarnedAboutUsingConsumerProvider || (hasWarnedAboutUsingConsumerProvider = !0, error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), context.Provider;
              },
              set: function(_Provider) {
                context.Provider = _Provider;
              }
            },
            _currentValue: {
              get: function() {
                return context._currentValue;
              },
              set: function(_currentValue) {
                context._currentValue = _currentValue;
              }
            },
            _currentValue2: {
              get: function() {
                return context._currentValue2;
              },
              set: function(_currentValue2) {
                context._currentValue2 = _currentValue2;
              }
            },
            _threadCount: {
              get: function() {
                return context._threadCount;
              },
              set: function(_threadCount) {
                context._threadCount = _threadCount;
              }
            },
            Consumer: {
              get: function() {
                return hasWarnedAboutUsingNestedContextConsumers || (hasWarnedAboutUsingNestedContextConsumers = !0, error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), context.Consumer;
              }
            },
            displayName: {
              get: function() {
                return context.displayName;
              },
              set: function(displayName) {
                hasWarnedAboutDisplayNameOnConsumer || (warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName), hasWarnedAboutDisplayNameOnConsumer = !0);
              }
            }
          }), context.Consumer = Consumer;
        }
        return context._currentRenderer = null, context._currentRenderer2 = null, context;
      }
      var Uninitialized = -1, Pending = 0, Resolved = 1, Rejected = 2;
      function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
          var ctor = payload._result, thenable = ctor(), pending = payload;
          pending._status = Pending, pending._result = thenable, thenable.then(function(moduleObject) {
            if (payload._status === Pending) {
              var defaultExport = moduleObject.default;
              defaultExport === void 0 && error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, moduleObject);
              var resolved = payload;
              resolved._status = Resolved, resolved._result = defaultExport;
            }
          }, function(error2) {
            if (payload._status === Pending) {
              var rejected = payload;
              rejected._status = Rejected, rejected._result = error2;
            }
          });
        }
        if (payload._status === Resolved)
          return payload._result;
        throw payload._result;
      }
      function lazy(ctor) {
        var payload = {
          _status: -1,
          _result: ctor
        }, lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: payload,
          _init: lazyInitializer
        };
        {
          var defaultProps, propTypes;
          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return defaultProps;
              },
              set: function(newDefaultProps) {
                error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), defaultProps = newDefaultProps, Object.defineProperty(lazyType, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return propTypes;
              },
              set: function(newPropTypes) {
                error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), propTypes = newPropTypes, Object.defineProperty(lazyType, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return lazyType;
      }
      function forwardRef9(render) {
        render != null && render.$$typeof === REACT_MEMO_TYPE ? error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof render != "function" ? error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render) : render.length !== 0 && render.length !== 2 && error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), render != null && (render.defaultProps != null || render.propTypes != null) && error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var elementType = {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render
        };
        {
          var ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name, render.displayName == null && (render.displayName = name);
            }
          });
        }
        return elementType;
      }
      var enableScopeAPI = !1;
      function isValidElementType(type) {
        return !!(typeof type == "string" || typeof type == "function" || type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE));
      }
      function memo2(type, compare5) {
        isValidElementType(type) || error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
        var elementType = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: compare5 === void 0 ? null : compare5
        };
        {
          var ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name, type.displayName == null && (type.displayName = name);
            }
          });
        }
        return elementType;
      }
      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (dispatcher === null)
          throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        return dispatcher;
      }
      function useContext6(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();
        if (unstable_observedBits !== void 0 && error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits == "number" && Array.isArray(arguments[2]) ? `

Did you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks` : ""), Context._context !== void 0) {
          var realContext = Context._context;
          realContext.Consumer === Context ? error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : realContext.Provider === Context && error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context, unstable_observedBits);
      }
      function useState5(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }
      function useReducer(reducer, initialArg, init3) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init3);
      }
      function useRef4(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }
      function useEffect5(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
      }
      function useLayoutEffect5(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
      }
      function useCallback5(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
      }
      function useMemo5(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
      }
      function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
      }
      function useDebugValue3(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      }
      var disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = !0;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log, prevInfo = console.info, prevWarn = console.warn, prevError = console.error, prevGroup = console.group, prevGroupCollapsed = console.groupCollapsed, prevGroupEnd = console.groupEnd;
            var props = {
              configurable: !0,
              enumerable: !0,
              value: disabledLog,
              writable: !0
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          if (disabledDepth--, disabledDepth === 0) {
            var props = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: _assign({}, props, {
                value: prevLog
              }),
              info: _assign({}, props, {
                value: prevInfo
              }),
              warn: _assign({}, props, {
                value: prevWarn
              }),
              error: _assign({}, props, {
                value: prevError
              }),
              group: _assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: _assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: _assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          disabledDepth < 0 && error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          return `
` + prefix + name;
        }
      }
      var reentry = !1, componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap == "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry)
          return "";
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0)
            return frame;
        }
        var control;
        reentry = !0;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current, ReactCurrentDispatcher$1.current = null, disableLogs();
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            if (Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack == "string") {
            for (var sampleLines = sample.stack.split(`
`), controlLines = control.stack.split(`
`), s = sampleLines.length - 1, c = controlLines.length - 1; s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]; )
              c--;
            for (; s >= 1 && c >= 0; s--, c--)
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1)
                  do
                    if (s--, c--, c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = `
` + sampleLines[s].replace(" at new ", " at ");
                      return typeof fn == "function" && componentFrameCache.set(fn, _frame), _frame;
                    }
                  while (s >= 1 && c >= 0);
                break;
              }
          }
        } finally {
          reentry = !1, ReactCurrentDispatcher$1.current = previousDispatcher, reenableLogs(), Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "", syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        return typeof fn == "function" && componentFrameCache.set(fn, syntheticFrame), syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, !1);
      }
      function shouldConstruct(Component2) {
        var prototype = Component2.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null)
          return "";
        if (typeof type == "function")
          return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type == "string")
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case exports.Suspense:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_BLOCK_TYPE:
              return describeFunctionComponentFrame(type._render);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init3 = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init3(payload), source, ownerFn);
              } catch {
              }
            }
          }
        return "";
      }
      var loggedTypeFailures = {}, ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
      }
      function checkPropTypes(typeSpecs, values2, location, componentName, element) {
        {
          var has = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var typeSpecName in typeSpecs)
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] != "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw err.name = "Invariant Violation", err;
                }
                error$1 = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              error$1 && !(error$1 instanceof Error) && (setCurrentlyValidatingElement(element), error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1), setCurrentlyValidatingElement(null)), error$1 instanceof Error && !(error$1.message in loggedTypeFailures) && (loggedTypeFailures[error$1.message] = !0, setCurrentlyValidatingElement(element), error("Failed %s type: %s", location, error$1.message), setCurrentlyValidatingElement(null));
            }
        }
      }
      function setCurrentlyValidatingElement$1(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          setExtraStackFrame(stack);
        } else
          setExtraStackFrame(null);
      }
      var propTypesMisspellWarningShown;
      propTypesMisspellWarningShown = !1;
      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current.type);
          if (name)
            return `

Check the render method of \`` + name + "`.";
        }
        return "";
      }
      function getSourceInfoErrorAddendum(source) {
        if (source !== void 0) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, ""), lineNumber = source.lineNumber;
          return `

Check your code at ` + fileName + ":" + lineNumber + ".";
        }
        return "";
      }
      function getSourceInfoErrorAddendumForProps(elementProps) {
        return elementProps != null ? getSourceInfoErrorAddendum(elementProps.__source) : "";
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
          var parentName = typeof parentType == "string" ? parentType : parentType.displayName || parentType.name;
          parentName && (info = `

Check the top-level render call using <` + parentName + ">.");
        }
        return info;
      }
      function validateExplicitKey(element, parentType) {
        if (!(!element._store || element._store.validated || element.key != null)) {
          element._store.validated = !0;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (!ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            ownerHasKeyUseWarning[currentComponentErrorInfo] = !0;
            var childOwner = "";
            element && element._owner && element._owner !== ReactCurrentOwner.current && (childOwner = " It was passed a child from " + getComponentName(element._owner.type) + "."), setCurrentlyValidatingElement$1(element), error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner), setCurrentlyValidatingElement$1(null);
          }
        }
      }
      function validateChildKeys(node, parentType) {
        if (typeof node == "object") {
          if (Array.isArray(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement2(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement2(node))
            node._store && (node._store.validated = !0);
          else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn == "function" && iteratorFn !== node.entries)
              for (var iterator = iteratorFn.call(node), step; !(step = iterator.next()).done; )
                isValidElement2(step.value) && validateExplicitKey(step.value, parentType);
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type == null || typeof type == "string")
            return;
          var propTypes;
          if (typeof type == "function")
            propTypes = type.propTypes;
          else if (typeof type == "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE))
            propTypes = type.propTypes;
          else
            return;
          if (propTypes) {
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = !0;
            var _name = getComponentName(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          typeof type.getDefaultProps == "function" && !type.getDefaultProps.isReactClassApproved && error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function validateFragmentProps(fragment) {
        {
          for (var keys2 = Object.keys(fragment.props), i = 0; i < keys2.length; i++) {
            var key = keys2[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment), error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key), setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          fragment.ref !== null && (setCurrentlyValidatingElement$1(fragment), error("Invalid attribute `ref` supplied to `React.Fragment`."), setCurrentlyValidatingElement$1(null));
        }
      }
      function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type);
        if (!validType) {
          var info = "";
          (type === void 0 || typeof type == "object" && type !== null && Object.keys(type).length === 0) && (info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var sourceInfo = getSourceInfoErrorAddendumForProps(props);
          sourceInfo ? info += sourceInfo : info += getDeclarationErrorAddendum();
          var typeString;
          type === null ? typeString = "null" : Array.isArray(type) ? typeString = "array" : type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentName(type.type) || "Unknown") + " />", info = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type, error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement8.apply(this, arguments);
        if (element == null)
          return element;
        if (validType)
          for (var i = 2; i < arguments.length; i++)
            validateChildKeys(arguments[i], type);
        return type === exports.Fragment ? validateFragmentProps(element) : validatePropTypes(element), element;
      }
      var didWarnAboutDeprecatedCreateFactory = !1;
      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        return validatedFactory.type = type, didWarnAboutDeprecatedCreateFactory || (didWarnAboutDeprecatedCreateFactory = !0, warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(validatedFactory, "type", {
          enumerable: !1,
          get: function() {
            return warn("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: type
            }), type;
          }
        }), validatedFactory;
      }
      function cloneElementWithValidation(element, props, children) {
        for (var newElement = cloneElement.apply(this, arguments), i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i], newElement.type);
        return validatePropTypes(newElement), newElement;
      }
      try {
        var frozenObject = Object.freeze({});
      } catch {
      }
      var createElement$1 = createElementWithValidation, cloneElement$1 = cloneElementWithValidation, createFactory = createFactoryWithValidation, Children2 = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray,
        only: onlyChild
      };
      exports.Children = Children2, exports.Component = Component, exports.PureComponent = PureComponent, exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals, exports.cloneElement = cloneElement$1, exports.createContext = createContext5, exports.createElement = createElement$1, exports.createFactory = createFactory, exports.createRef = createRef, exports.forwardRef = forwardRef9, exports.isValidElement = isValidElement2, exports.lazy = lazy, exports.memo = memo2, exports.useCallback = useCallback5, exports.useContext = useContext6, exports.useDebugValue = useDebugValue3, exports.useEffect = useEffect5, exports.useImperativeHandle = useImperativeHandle, exports.useLayoutEffect = useLayoutEffect5, exports.useMemo = useMemo5, exports.useReducer = useReducer, exports.useRef = useRef4, exports.useState = useState5, exports.version = ReactVersion;
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_react_development();
  }
});

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}
var init_extends = __esm({
  "node_modules/@babel/runtime/helpers/esm/extends.js"() {
    init_virtual_process_polyfill();
    init_buffer();
  }
});

// node_modules/history/index.js
function createPath(_ref) {
  var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
  return search && search !== "?" && (pathname += search.charAt(0) === "?" ? search : "?" + search), hash && hash !== "#" && (pathname += hash.charAt(0) === "#" ? hash : "#" + hash), pathname;
}
function parsePath(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    hashIndex >= 0 && (parsedPath.hash = path.substr(hashIndex), path = path.substr(0, hashIndex));
    var searchIndex = path.indexOf("?");
    searchIndex >= 0 && (parsedPath.search = path.substr(searchIndex), path = path.substr(0, searchIndex)), path && (parsedPath.pathname = path);
  }
  return parsedPath;
}
var Action, init_history = __esm({
  "node_modules/history/index.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_extends();
    (function(Action2) {
      Action2.Pop = "POP", Action2.Push = "PUSH", Action2.Replace = "REPLACE";
    })(Action || (Action = {}));
  }
});

// node_modules/react-router/index.js
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    typeof console < "u" && console.warn(message);
    try {
      throw new Error(message);
    } catch {
    }
  }
}
function warningOnce(key, cond, message) {
  !cond && !alreadyWarned2[key] && (alreadyWarned2[key] = !0, warning(!1, message));
}
function matchRoutes(routes2, locationArg, basename) {
  basename === void 0 && (basename = "/");
  let location = typeof locationArg == "string" ? parsePath(locationArg) : locationArg, pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null)
    return null;
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i)
    matches = matchRouteBranch(branches[i], pathname);
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  return branches === void 0 && (branches = []), parentsMeta === void 0 && (parentsMeta = []), parentPath === void 0 && (parentPath = ""), routes2.forEach((route, index) => {
    let meta2 = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === !0,
      childrenIndex: index,
      route
    };
    meta2.relativePath.startsWith("/") && (meta2.relativePath.startsWith(parentPath) || invariant(!1, 'Absolute route path "' + meta2.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), meta2.relativePath = meta2.relativePath.slice(parentPath.length));
    let path = joinPaths([parentPath, meta2.relativePath]), routesMeta = parentsMeta.concat(meta2);
    route.children && route.children.length > 0 && (route.index === !0 && invariant(!1, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')), flattenRoutes(route.children, branches, routesMeta, path)), !(route.path == null && !route.index) && branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  }), branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta2) => meta2.childrenIndex), b.routesMeta.map((meta2) => meta2.childrenIndex)));
}
function computeScore(path, index) {
  let segments = path.split("/"), initialScore = segments.length;
  return segments.some(isSplat) && (initialScore += splatPenalty), index && (initialScore += indexRouteValue), segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  return a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]) ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch, matchedParams = {}, matchedPathname = "/", matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta2 = routesMeta[i], end = i === routesMeta.length - 1, remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/", match = matchPath({
      path: meta2.relativePath,
      caseSensitive: meta2.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta2.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    }), match.pathnameBase !== "/" && (matchedPathname = joinPaths([matchedPathname, match.pathnameBase]));
  }
  return matches;
}
function matchPath(pattern, pathname) {
  typeof pattern == "string" && (pattern = {
    path: pattern,
    caseSensitive: !1,
    end: !0
  });
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end), match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0], pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1"), captureGroups = match.slice(1);
  return {
    params: paramNames.reduce((memo2, paramName, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      return memo2[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName), memo2;
    }, {}),
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  caseSensitive === void 0 && (caseSensitive = !1), end === void 0 && (end = !0), warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [], regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_2, paramName) => (paramNames.push(paramName), "([^\\/]+)"));
  return path.endsWith("*") ? (paramNames.push("*"), regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)", [new RegExp(regexpSource, caseSensitive ? void 0 : "i"), paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return warning(!1, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ").")), value;
  }
}
function resolvePath(to, fromPathname) {
  fromPathname === void 0 && (fromPathname = "/");
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to == "string" ? parsePath(to) : to;
  return {
    pathname: toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  return relativePath.split("/").forEach((segment) => {
    segment === ".." ? segments.length > 1 && segments.pop() : segment !== "." && segments.push(segment);
  }), segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg == "string" ? parsePath(toArg) : toArg, toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname, from3;
  if (toPathname == null)
    from3 = locationPathname;
  else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      for (; toSegments[0] === ".."; )
        toSegments.shift(), routePathnameIndex -= 1;
      to.pathname = toSegments.join("/");
    }
    from3 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from3);
  return toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/") && (path.pathname += "/"), path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to == "string" ? parsePath(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase()))
    return null;
  let nextChar = pathname.charAt(basename.length);
  return nextChar && nextChar !== "/" ? null : pathname.slice(basename.length) || "/";
}
function useHref(to) {
  useInRouterContext() || invariant(
    !1,
    "useHref() may be used only in the context of a <Router> component."
  );
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext), {
    hash,
    pathname,
    search
  } = useResolvedPath(to), joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname(to), endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return (0, import_react.useContext)(LocationContext) != null;
}
function useLocation() {
  return useInRouterContext() || invariant(
    !1,
    "useLocation() may be used only in the context of a <Router> component."
  ), (0, import_react.useContext)(LocationContext).location;
}
function useNavigate() {
  useInRouterContext() || invariant(
    !1,
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext), {
    matches
  } = (0, import_react.useContext)(RouteContext), {
    pathname: locationPathname
  } = useLocation(), routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase)), activeRef = (0, import_react.useRef)(!1);
  return (0, import_react.useEffect)(() => {
    activeRef.current = !0;
  }), (0, import_react.useCallback)(function(to, options) {
    if (options === void 0 && (options = {}), warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !activeRef.current)
      return;
    if (typeof to == "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    basename !== "/" && (path.pathname = joinPaths([basename, path.pathname])), (options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
}
function useOutlet(context) {
  let outlet = (0, import_react.useContext)(RouteContext).outlet;
  return outlet && /* @__PURE__ */ (0, import_react.createElement)(OutletContext.Provider, {
    value: context
  }, outlet);
}
function useResolvedPath(to) {
  let {
    matches
  } = (0, import_react.useContext)(RouteContext), {
    pathname: locationPathname
  } = useLocation(), routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return (0, import_react.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
function useRoutes(routes2, locationArg) {
  useInRouterContext() || invariant(
    !1,
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let {
    matches: parentMatches
  } = (0, import_react.useContext)(RouteContext), routeMatch = parentMatches[parentMatches.length - 1], parentParams = routeMatch ? routeMatch.params : {}, parentPathname = routeMatch ? routeMatch.pathname : "/", parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/", parentRoute = routeMatch && routeMatch.route;
  {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation(), location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg == "string" ? parsePath(locationArg) : locationArg;
    parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase)) || invariant(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')), location = parsedLocationArg;
  } else
    location = locationFromContext;
  let pathname = location.pathname || "/", remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/", matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  return warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" '), warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'), _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches, parentMatches) {
  return parentMatches === void 0 && (parentMatches = []), matches == null ? null : matches.reduceRight((outlet, match, index) => /* @__PURE__ */ (0, import_react.createElement)(RouteContext.Provider, {
    children: match.route.element !== void 0 ? match.route.element : outlet,
    value: {
      outlet,
      matches: parentMatches.concat(matches.slice(0, index + 1))
    }
  }), null);
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = !1
  } = _ref3;
  useInRouterContext() && invariant(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let basename = normalizePathname(basenameProp), navigationContext = (0, import_react.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  typeof locationProp == "string" && (locationProp = parsePath(locationProp));
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp, location = (0, import_react.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);
    return trailingPathname == null ? null : {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  return warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), location == null ? null : /* @__PURE__ */ (0, import_react.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ (0, import_react.createElement)(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
var import_react, NavigationContext, LocationContext, RouteContext, alreadyWarned2, paramRe, dynamicSegmentValue, indexRouteValue, emptySegmentValue, staticSegmentValue, splatPenalty, isSplat, joinPaths, normalizePathname, normalizeSearch, normalizeHash, OutletContext, init_react_router = __esm({
  "node_modules/react-router/index.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_history();
    init_history();
    import_react = __toESM(require_react());
    NavigationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    NavigationContext.displayName = "Navigation";
    LocationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    LocationContext.displayName = "Location";
    RouteContext = /* @__PURE__ */ (0, import_react.createContext)({
      outlet: null,
      matches: []
    });
    RouteContext.displayName = "Route";
    alreadyWarned2 = {};
    paramRe = /^:\w+$/, dynamicSegmentValue = 3, indexRouteValue = 2, emptySegmentValue = 1, staticSegmentValue = 10, splatPenalty = -2, isSplat = (s) => s === "*";
    joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/"), normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/"), normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search, normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    OutletContext = /* @__PURE__ */ (0, import_react.createContext)(null);
  }
});

// node_modules/react-router-dom/index.js
function _extends2() {
  return _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3, [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location
  });
  return (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]), /* @__PURE__ */ (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp, navigate = useNavigate(), location = useLocation(), path = useResolvedPath(to);
  return (0, import_react2.useCallback)((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
var import_react2, _excluded, _excluded2, Link, NavLink, init_react_router_dom = __esm({
  "node_modules/react-router-dom/index.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    import_react2 = __toESM(require_react());
    init_react_router();
    init_react_router();
    _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
    HistoryRouter.displayName = "unstable_HistoryRouter";
    Link = /* @__PURE__ */ (0, import_react2.forwardRef)(function(_ref4, ref) {
      let {
        onClick,
        reloadDocument,
        replace = !1,
        state,
        target,
        to
      } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded), href = useHref(to), internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target
      });
      function handleClick(event) {
        onClick && onClick(event), !event.defaultPrevented && !reloadDocument && internalOnClick(event);
      }
      return /* @__PURE__ */ (0, import_react2.createElement)("a", _extends2({}, rest, {
        href,
        onClick: handleClick,
        ref,
        target
      }));
    });
    Link.displayName = "Link";
    NavLink = /* @__PURE__ */ (0, import_react2.forwardRef)(function(_ref5, ref) {
      let {
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = !1,
        className: classNameProp = "",
        end = !1,
        style: styleProp,
        to,
        children
      } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2), location = useLocation(), path = useResolvedPath(to), locationPathname = location.pathname, toPathname = path.pathname;
      caseSensitive || (locationPathname = locationPathname.toLowerCase(), toPathname = toPathname.toLowerCase());
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/", ariaCurrent = isActive ? ariaCurrentProp : void 0, className;
      typeof classNameProp == "function" ? className = classNameProp({
        isActive
      }) : className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
      let style3 = typeof styleProp == "function" ? styleProp({
        isActive
      }) : styleProp;
      return /* @__PURE__ */ (0, import_react2.createElement)(Link, _extends2({}, rest, {
        "aria-current": ariaCurrent,
        className,
        ref,
        style: style3,
        to
      }), typeof children == "function" ? children({
        isActive
      }) : children);
    });
    NavLink.displayName = "NavLink";
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js
function matchServerRoutes(routes2, pathname) {
  let matches = matchRoutes(routes2, pathname);
  return matches ? matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  })) : null;
}
var init_routeMatching = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_react_router_dom();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/routes.js
function createRoutes(manifest, parentId) {
  return Object.entries(manifest).filter(([, route]) => route.parentId === parentId).map(([id, route]) => ({
    ...route,
    children: createRoutes(manifest, id)
  }));
}
var init_routes = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/routes.js"() {
    init_virtual_process_polyfill();
    init_buffer();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/markup.js
function escapeHtml(html2) {
  return html2.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
var ESCAPE_LOOKUP, ESCAPE_REGEX, init_markup = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/markup.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    ESCAPE_LOOKUP = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    }, ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js
function createServerHandoffString(serverHandoff) {
  return escapeHtml(JSON.stringify(serverHandoff));
}
var init_serverHandoff = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_markup();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/server.js
async function handleDataRequest({
  handleDataRequest: handleDataRequest2,
  loadContext,
  matches,
  request,
  serverMode
}) {
  if (!isValidRequestMethod(request))
    return errorBoundaryError(new Error(`Invalid request method "${request.method}"`), 405);
  let url = new URL(request.url);
  if (!matches)
    return errorBoundaryError(new Error(`No route matches URL "${url.pathname}"`), 404);
  let response, match;
  try {
    if (isActionRequest(request))
      match = getRequestMatch(url, matches), response = await callRouteAction({
        loadContext,
        match,
        request
      });
    else {
      let routeId = url.searchParams.get("_data");
      if (!routeId)
        return errorBoundaryError(new Error("Missing route id in ?_data"), 403);
      let tempMatch = matches.find((match2) => match2.route.id === routeId);
      if (!tempMatch)
        return errorBoundaryError(new Error(`Route "${routeId}" does not match URL "${url.pathname}"`), 403);
      match = tempMatch, response = await callRouteLoader({
        loadContext,
        match,
        request
      });
    }
    if (isRedirectResponse(response)) {
      let headers = new Headers(response.headers);
      return headers.set("X-Remix-Redirect", headers.get("Location")), headers.delete("Location"), response.headers.get("Set-Cookie") !== null && headers.set("X-Remix-Revalidate", "yes"), new Response(null, {
        status: 204,
        headers
      });
    }
    return handleDataRequest2 && (response = await handleDataRequest2(response, {
      context: loadContext,
      params: match.params,
      request
    })), response;
  } catch (error) {
    return serverMode !== ServerMode.Test && console.error(error), serverMode === ServerMode.Development && error instanceof Error ? errorBoundaryError(error, 500) : errorBoundaryError(new Error("Unexpected Server Error"), 500);
  }
}
async function handleDocumentRequest({
  build,
  loadContext,
  matches,
  request,
  routes: routes2,
  serverMode
}) {
  let url = new URL(request.url), appState = {
    trackBoundaries: !0,
    trackCatchBoundaries: !0,
    catchBoundaryRouteId: null,
    renderBoundaryRouteId: null,
    loaderBoundaryRouteId: null,
    error: void 0,
    catch: void 0
  };
  isValidRequestMethod(request) ? matches || (appState.trackCatchBoundaries = !1, appState.catch = {
    data: null,
    status: 404,
    statusText: "Not Found"
  }) : (matches = null, appState.trackCatchBoundaries = !1, appState.catch = {
    data: null,
    status: 405,
    statusText: "Method Not Allowed"
  });
  let actionStatus, actionData, actionMatch, actionResponse;
  if (matches && isActionRequest(request)) {
    actionMatch = getRequestMatch(url, matches);
    try {
      if (actionResponse = await callRouteAction({
        loadContext,
        match: actionMatch,
        request
      }), isRedirectResponse(actionResponse))
        return actionResponse;
      actionStatus = {
        status: actionResponse.status,
        statusText: actionResponse.statusText
      }, isCatchResponse(actionResponse) ? (appState.catchBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "CatchBoundary"), appState.trackCatchBoundaries = !1, appState.catch = {
        ...actionStatus,
        data: await extractData(actionResponse)
      }) : actionData = {
        [actionMatch.route.id]: await extractData(actionResponse)
      };
    } catch (error) {
      appState.loaderBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "ErrorBoundary"), appState.trackBoundaries = !1, appState.error = await serializeError(error), serverMode !== ServerMode.Test && console.error(`There was an error running the action for route ${actionMatch.route.id}`);
    }
  }
  let routeModules = createEntryRouteModules(build.routes), matchesToLoad = matches || [];
  appState.catch ? matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad, "CatchBoundary").slice(0, -1) : appState.error && (matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad, "ErrorBoundary").slice(0, -1));
  let loaderRequest = new Request(request.url, {
    body: null,
    headers: request.headers,
    method: request.method,
    redirect: request.redirect,
    signal: request.signal
  }), routeLoaderResults = await Promise.allSettled(matchesToLoad.map((match) => match.route.module.loader ? callRouteLoader({
    loadContext,
    match,
    request: loaderRequest
  }) : Promise.resolve(void 0))), actionCatch = appState.catch, actionError = appState.error, actionCatchBoundaryRouteId = appState.catchBoundaryRouteId, actionLoaderBoundaryRouteId = appState.loaderBoundaryRouteId;
  appState.catch = void 0, appState.error = void 0;
  let routeLoaderResponses = {}, loaderStatusCodes = [], routeData = {};
  for (let index = 0; index < matchesToLoad.length; index++) {
    let match = matchesToLoad[index], result = routeLoaderResults[index], error = result.status === "rejected" ? result.reason : void 0, response = result.status === "fulfilled" ? result.value : void 0, isRedirect = response ? isRedirectResponse(response) : !1, isCatch = response ? isCatchResponse(response) : !1;
    if (appState.catch || appState.error)
      break;
    if (!actionCatch && !actionError && response && isRedirect)
      return response;
    if (match.route.module.CatchBoundary && (appState.catchBoundaryRouteId = match.route.id), match.route.module.ErrorBoundary && (appState.loaderBoundaryRouteId = match.route.id), error) {
      loaderStatusCodes.push(500), appState.trackBoundaries = !1, appState.error = await serializeError(error), serverMode !== ServerMode.Test && console.error(`There was an error running the data loader for route ${match.route.id}`);
      break;
    } else if (response)
      if (routeLoaderResponses[match.route.id] = response, loaderStatusCodes.push(response.status), isCatch) {
        appState.trackCatchBoundaries = !1, appState.catch = {
          data: await extractData(response),
          status: response.status,
          statusText: response.statusText
        };
        break;
      } else
        routeData[match.route.id] = await extractData(response);
  }
  appState.catch || (appState.catchBoundaryRouteId = actionCatchBoundaryRouteId), appState.error || (appState.loaderBoundaryRouteId = actionLoaderBoundaryRouteId), appState.catch = actionCatch || appState.catch, appState.error = actionError || appState.error;
  let renderableMatches = getRenderableMatches(matches, appState);
  if (!renderableMatches) {
    renderableMatches = [];
    let root = routes2[0];
    root != null && root.module.CatchBoundary && (appState.catchBoundaryRouteId = "root", renderableMatches.push({
      params: {},
      pathname: "",
      route: routes2[0]
    }));
  }
  let notOkResponse = actionStatus && actionStatus.status !== 200 ? actionStatus.status : loaderStatusCodes.find((status) => status !== 200), responseStatusCode = appState.error ? 500 : typeof notOkResponse == "number" ? notOkResponse : appState.catch ? appState.catch.status : 200, responseHeaders = getDocumentHeaders(build, renderableMatches, routeLoaderResponses, actionResponse), entryMatches = createEntryMatches(renderableMatches, build.assets.routes), serverHandoff = {
    actionData,
    appState,
    matches: entryMatches,
    routeData
  }, entryContext = {
    ...serverHandoff,
    manifest: build.assets,
    routeModules,
    serverHandoffString: createServerHandoffString(serverHandoff)
  }, handleDocumentRequest2 = build.entry.module.default;
  try {
    return await handleDocumentRequest2(request, responseStatusCode, responseHeaders, entryContext);
  } catch (error) {
    responseStatusCode = 500, appState.trackBoundaries = !1, appState.error = await serializeError(error), entryContext.serverHandoffString = createServerHandoffString(serverHandoff);
    try {
      return await handleDocumentRequest2(request, responseStatusCode, responseHeaders, entryContext);
    } catch (error2) {
      serverMode !== ServerMode.Test && console.error(error2);
      let message = "Unexpected Server Error";
      return serverMode === ServerMode.Development && (message += `

${String(error2)}`), new Response(message, {
        status: 500,
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }
  }
}
async function handleResourceRequest({
  loadContext,
  matches,
  request,
  serverMode
}) {
  let match = matches.slice(-1)[0];
  try {
    return isActionRequest(request) ? await callRouteAction({
      match,
      loadContext,
      request
    }) : await callRouteLoader({
      match,
      loadContext,
      request
    });
  } catch (error) {
    serverMode !== ServerMode.Test && console.error(error);
    let message = "Unexpected Server Error";
    return serverMode === ServerMode.Development && (message += `

${String(error)}`), new Response(message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
}
function isActionRequest({
  method
}) {
  return validActionMethods.has(method.toUpperCase());
}
function isValidRequestMethod({
  method
}) {
  return validRequestMethods.has(method.toUpperCase());
}
async function errorBoundaryError(error, status) {
  return json(await serializeError(error), {
    status,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function isIndexRequestUrl(url) {
  return url.searchParams.getAll("index").some((param) => param === "");
}
function getRequestMatch(url, matches) {
  let match = matches.slice(-1)[0];
  return !isIndexRequestUrl(url) && match.route.id.endsWith("/index") ? matches.slice(-2)[0] : match;
}
function getDeepestRouteIdWithBoundary(matches, key) {
  let matched = getMatchesUpToDeepestBoundary(matches, key).slice(-1)[0];
  return matched ? matched.route.id : null;
}
function getMatchesUpToDeepestBoundary(matches, key) {
  let deepestBoundaryIndex = -1;
  return matches.forEach((match, index) => {
    match.route.module[key] && (deepestBoundaryIndex = index);
  }), deepestBoundaryIndex === -1 ? [] : matches.slice(0, deepestBoundaryIndex + 1);
}
function getRenderableMatches(matches, appState) {
  if (!matches)
    return null;
  if (!appState.catch && !appState.error)
    return matches;
  let lastRenderableIndex = -1;
  return matches.forEach((match, index) => {
    let id = match.route.id;
    (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id || appState.catchBoundaryRouteId === id) && (lastRenderableIndex = index);
  }), matches.slice(0, lastRenderableIndex + 1);
}
var createRequestHandler, validActionMethods, validRequestMethods, init_server = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/server.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_data();
    init_entry();
    init_errors();
    init_headers();
    init_mode();
    init_routeMatching();
    init_routes();
    init_responses();
    init_serverHandoff();
    createRequestHandler = (build, mode) => {
      let routes2 = createRoutes(build.routes), serverMode = isServerMode(mode) ? mode : ServerMode.Production;
      return async function(request, loadContext = {}) {
        let url = new URL(request.url), matches = matchServerRoutes(routes2, url.pathname), response;
        return url.searchParams.has("_data") ? response = await handleDataRequest({
          request,
          loadContext,
          matches,
          handleDataRequest: build.entry.module.handleDataRequest,
          serverMode
        }) : matches && !matches[matches.length - 1].route.module.default ? response = await handleResourceRequest({
          request,
          loadContext,
          matches,
          serverMode
        }) : response = await handleDocumentRequest({
          build,
          loadContext,
          matches,
          request,
          routes: routes2,
          serverMode
        }), request.method === "HEAD" ? new Response(null, {
          headers: response.headers,
          status: response.status,
          statusText: response.statusText
        }) : response;
      };
    };
    validActionMethods = /* @__PURE__ */ new Set(["POST", "PUT", "PATCH", "DELETE"]);
    validRequestMethods = /* @__PURE__ */ new Set(["GET", "HEAD", ...validActionMethods]);
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions.js
function flash(name) {
  return `__flash_${name}__`;
}
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/api/remix#signing-cookies for more information.`);
}
var createSession, isSession, createSessionStorageFactory, init_sessions = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_cookies();
    init_warnings();
    createSession = (initialData = {}, id = "") => {
      let map = new Map(Object.entries(initialData));
      return {
        get id() {
          return id;
        },
        get data() {
          return Object.fromEntries(map);
        },
        has(name) {
          return map.has(name) || map.has(flash(name));
        },
        get(name) {
          if (map.has(name))
            return map.get(name);
          let flashName = flash(name);
          if (map.has(flashName)) {
            let value = map.get(flashName);
            return map.delete(flashName), value;
          }
        },
        set(name, value) {
          map.set(name, value);
        },
        flash(name, value) {
          map.set(flash(name), value);
        },
        unset(name) {
          map.delete(name);
        }
      };
    }, isSession = (object) => object != null && typeof object.id == "string" && typeof object.data < "u" && typeof object.has == "function" && typeof object.get == "function" && typeof object.set == "function" && typeof object.flash == "function" && typeof object.unset == "function", createSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg,
      createData,
      readData,
      updateData,
      deleteData
    }) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg == null ? void 0 : cookieArg.name) || "__session", cookieArg);
      return warnOnceAboutSigningSessionCookie(cookie), {
        async getSession(cookieHeader, options) {
          let id = cookieHeader && await cookie.parse(cookieHeader, options), data = id && await readData(id);
          return createSession(data || {}, id || "");
        },
        async commitSession(session, options) {
          let {
            id,
            data
          } = session;
          return id ? await updateData(id, data, cookie.expires) : id = await createData(data, cookie.expires), cookie.serialize(id, options);
        },
        async destroySession(session, options) {
          return await deleteData(session.id), cookie.serialize("", {
            ...options,
            expires: new Date(0)
          });
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js
var createCookieSessionStorageFactory, init_cookieStorage = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_cookies();
    init_sessions();
    createCookieSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg
    } = {}) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg == null ? void 0 : cookieArg.name) || "__session", cookieArg);
      return warnOnceAboutSigningSessionCookie(cookie), {
        async getSession(cookieHeader, options) {
          return createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
        },
        async commitSession(session, options) {
          let serializedCookie = await cookie.serialize(session.data, options);
          if (serializedCookie.length > 4096)
            throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
          return serializedCookie;
        },
        async destroySession(_session, options) {
          return cookie.serialize("", {
            ...options,
            expires: new Date(0)
          });
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js
var createMemorySessionStorageFactory, init_memoryStorage = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    createMemorySessionStorageFactory = (createSessionStorage) => ({
      cookie
    } = {}) => {
      let uniqueId = 0, map = /* @__PURE__ */ new Map();
      return createSessionStorage({
        cookie,
        async createData(data, expires) {
          let id = (++uniqueId).toString();
          return map.set(id, {
            data,
            expires
          }), id;
        },
        async readData(id) {
          if (map.has(id)) {
            let {
              data,
              expires
            } = map.get(id);
            if (!expires || expires > new Date())
              return data;
            expires && map.delete(id);
          }
          return null;
        },
        async updateData(id, data, expires) {
          map.set(id, {
            data,
            expires
          });
        },
        async deleteData(id) {
          map.delete(id);
        }
      });
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js
var MaxPartSizeExceededError, init_errors2 = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    MaxPartSizeExceededError = class extends Error {
      constructor(field, maxBytes) {
        super(`Field "${field}" exceeded upload size of ${maxBytes} bytes.`), this.field = field, this.maxBytes = maxBytes;
      }
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js
function createMemoryUploadHandler({
  filter,
  maxPartSize = 3e6
} = {}) {
  return async ({
    filename,
    contentType,
    name,
    data
  }) => {
    if (filter && !await filter({
      filename,
      contentType,
      name
    }))
      return;
    let size = 0, chunks = [];
    for await (let chunk of data) {
      if (size += chunk.byteLength, size > maxPartSize)
        throw new MaxPartSizeExceededError(name, maxPartSize);
      chunks.push(chunk);
    }
    return typeof filename == "string" ? new File(chunks, filename, {
      type: contentType
    }) : await new Blob(chunks, {
      type: contentType
    }).text();
  };
}
var init_memoryUploadHandler = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_errors2();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  MaxPartSizeExceededError: () => MaxPartSizeExceededError,
  createCookieFactory: () => createCookieFactory,
  createCookieSessionStorageFactory: () => createCookieSessionStorageFactory,
  createMemorySessionStorageFactory: () => createMemorySessionStorageFactory,
  createRequestHandler: () => createRequestHandler,
  createSession: () => createSession,
  createSessionStorageFactory: () => createSessionStorageFactory,
  isCookie: () => isCookie,
  isSession: () => isSession,
  json: () => json,
  redirect: () => redirect,
  unstable_composeUploadHandlers: () => composeUploadHandlers,
  unstable_createMemoryUploadHandler: () => createMemoryUploadHandler,
  unstable_parseMultipartFormData: () => parseMultipartFormData
});
var init_esm = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/index.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_cookies();
    init_formData();
    init_responses();
    init_server();
    init_sessions();
    init_cookieStorage();
    init_memoryStorage();
    init_memoryUploadHandler();
    init_errors2();
  }
});

// node_modules/@remix-run/cloudflare/dist/crypto.js
var require_crypto = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/crypto.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var encoder = new TextEncoder(), sign = async (value, secret) => {
      let key = await createKey(secret, ["sign"]), data = encoder.encode(value), signature = await crypto.subtle.sign("HMAC", key, data), hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=+$/, "");
      return value + "." + hash;
    }, unsign = async (signed, secret) => {
      let index = signed.lastIndexOf("."), value = signed.slice(0, index), hash = signed.slice(index + 1), key = await createKey(secret, ["verify"]), data = encoder.encode(value), signature = byteStringToUint8Array(atob(hash));
      return await crypto.subtle.verify("HMAC", key, signature, data) ? value : !1;
    };
    async function createKey(secret, usages) {
      return await crypto.subtle.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: "SHA-256"
      }, !1, usages);
    }
    function byteStringToUint8Array(byteString) {
      let array = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++)
        array[i] = byteString.charCodeAt(i);
      return array;
    }
    exports.sign = sign;
    exports.unsign = unsign;
  }
});

// node_modules/@remix-run/cloudflare/dist/implementations.js
var require_implementations = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/implementations.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = (init_esm(), __toCommonJS(esm_exports)), crypto2 = require_crypto(), createCookie = serverRuntime.createCookieFactory({
      sign: crypto2.sign,
      unsign: crypto2.unsign
    }), createCookieSessionStorage = serverRuntime.createCookieSessionStorageFactory(createCookie), createSessionStorage = serverRuntime.createSessionStorageFactory(createCookie), createMemorySessionStorage = serverRuntime.createMemorySessionStorageFactory(createSessionStorage);
    exports.createCookie = createCookie;
    exports.createCookieSessionStorage = createCookieSessionStorage;
    exports.createMemorySessionStorage = createMemorySessionStorage;
    exports.createSessionStorage = createSessionStorage;
  }
});

// node_modules/@remix-run/cloudflare/dist/sessions/cloudflareKVSessionStorage.js
var require_cloudflareKVSessionStorage = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/sessions/cloudflareKVSessionStorage.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var implementations = require_implementations();
    function createCloudflareKVSessionStorage({
      cookie,
      kv
    }) {
      return implementations.createSessionStorage({
        cookie,
        async createData(data, expires) {
          for (; ; ) {
            let randomBytes = new Uint8Array(8);
            crypto.getRandomValues(randomBytes);
            let id = [...randomBytes].map((x) => x.toString(16).padStart(2, "0")).join("");
            if (!await kv.get(id, "json"))
              return await kv.put(id, JSON.stringify(data), {
                expiration: expires ? Math.round(expires.getTime() / 1e3) : void 0
              }), id;
          }
        },
        async readData(id) {
          let session = await kv.get(id);
          return session ? JSON.parse(session) : null;
        },
        async updateData(id, data, expires) {
          await kv.put(id, JSON.stringify(data), {
            expiration: expires ? Math.round(expires.getTime() / 1e3) : void 0
          });
        },
        async deleteData(id) {
          await kv.delete(id);
        }
      });
    }
    exports.createCloudflareKVSessionStorage = createCloudflareKVSessionStorage;
  }
});

// node_modules/@remix-run/cloudflare/dist/index.js
var require_dist = __commonJS({
  "node_modules/@remix-run/cloudflare/dist/index.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cloudflareKVSessionStorage = require_cloudflareKVSessionStorage(), implementations = require_implementations(), serverRuntime = (init_esm(), __toCommonJS(esm_exports));
    exports.createCloudflareKVSessionStorage = cloudflareKVSessionStorage.createCloudflareKVSessionStorage;
    exports.createCookie = implementations.createCookie;
    exports.createCookieSessionStorage = implementations.createCookieSessionStorage;
    exports.createMemorySessionStorage = implementations.createMemorySessionStorage;
    exports.createSessionStorage = implementations.createSessionStorage;
    Object.defineProperty(exports, "MaxPartSizeExceededError", {
      enumerable: !0,
      get: function() {
        return serverRuntime.MaxPartSizeExceededError;
      }
    });
    Object.defineProperty(exports, "createRequestHandler", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createRequestHandler;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "unstable_composeUploadHandlers", {
      enumerable: !0,
      get: function() {
        return serverRuntime.unstable_composeUploadHandlers;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return serverRuntime.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return serverRuntime.unstable_parseMultipartFormData;
      }
    });
  }
});

// node-modules-polyfills:events
var events_exports = {};
__export(events_exports, {
  EventEmitter: () => EventEmitter,
  default: () => events_default
});
function EventHandlers() {
}
function EventEmitter() {
  EventEmitter.init.call(this);
}
function $getMaxListeners(that) {
  return that._maxListeners === void 0 ? EventEmitter.defaultMaxListeners : that._maxListeners;
}
function emitNone(handler, isFn, self2) {
  if (isFn)
    handler.call(self2);
  else
    for (var len = handler.length, listeners2 = arrayClone(handler, len), i = 0; i < len; ++i)
      listeners2[i].call(self2);
}
function emitOne(handler, isFn, self2, arg1) {
  if (isFn)
    handler.call(self2, arg1);
  else
    for (var len = handler.length, listeners2 = arrayClone(handler, len), i = 0; i < len; ++i)
      listeners2[i].call(self2, arg1);
}
function emitTwo(handler, isFn, self2, arg1, arg2) {
  if (isFn)
    handler.call(self2, arg1, arg2);
  else
    for (var len = handler.length, listeners2 = arrayClone(handler, len), i = 0; i < len; ++i)
      listeners2[i].call(self2, arg1, arg2);
}
function emitThree(handler, isFn, self2, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self2, arg1, arg2, arg3);
  else
    for (var len = handler.length, listeners2 = arrayClone(handler, len), i = 0; i < len; ++i)
      listeners2[i].call(self2, arg1, arg2, arg3);
}
function emitMany(handler, isFn, self2, args) {
  if (isFn)
    handler.apply(self2, args);
  else
    for (var len = handler.length, listeners2 = arrayClone(handler, len), i = 0; i < len; ++i)
      listeners2[i].apply(self2, args);
}
function _addListener(target, type, listener, prepend) {
  var m, events, existing;
  if (typeof listener != "function")
    throw new TypeError('"listener" argument must be a function');
  if (events = target._events, events ? (events.newListener && (target.emit(
    "newListener",
    type,
    listener.listener ? listener.listener : listener
  ), events = target._events), existing = events[type]) : (events = target._events = new EventHandlers(), target._eventsCount = 0), !existing)
    existing = events[type] = listener, ++target._eventsCount;
  else if (typeof existing == "function" ? existing = events[type] = prepend ? [listener, existing] : [existing, listener] : prepend ? existing.unshift(listener) : existing.push(listener), !existing.warned && (m = $getMaxListeners(target), m && m > 0 && existing.length > m)) {
    existing.warned = !0;
    var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + type + " listeners added. Use emitter.setMaxListeners() to increase limit");
    w.name = "MaxListenersExceededWarning", w.emitter = target, w.type = type, w.count = existing.length, emitWarning(w);
  }
  return target;
}
function emitWarning(e) {
  typeof console.warn == "function" ? console.warn(e) : console.log(e);
}
function _onceWrap(target, type, listener) {
  var fired = !1;
  function g() {
    target.removeListener(type, g), fired || (fired = !0, listener.apply(target, arguments));
  }
  return g.listener = listener, g;
}
function listenerCount(type) {
  var events = this._events;
  if (events) {
    var evlistener = events[type];
    if (typeof evlistener == "function")
      return 1;
    if (evlistener)
      return evlistener.length;
  }
  return 0;
}
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}
function arrayClone(arr, i) {
  for (var copy3 = new Array(i); i--; )
    copy3[i] = arr[i];
  return copy3;
}
function unwrapListeners(arr) {
  for (var ret = new Array(arr.length), i = 0; i < ret.length; ++i)
    ret[i] = arr[i].listener || arr[i];
  return ret;
}
var domain, events_default, init_events = __esm({
  "node-modules-polyfills:events"() {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    EventHandlers.prototype = /* @__PURE__ */ Object.create(null);
    events_default = EventEmitter;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.usingDomains = !1;
    EventEmitter.prototype.domain = void 0;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._maxListeners = void 0;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.init = function() {
      this.domain = null, EventEmitter.usingDomains && domain.active && !(this instanceof domain.Domain) && (this.domain = domain.active), (!this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = new EventHandlers(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function(n) {
      if (typeof n != "number" || n < 0 || isNaN(n))
        throw new TypeError('"n" argument must be a positive number');
      return this._maxListeners = n, this;
    };
    EventEmitter.prototype.getMaxListeners = function() {
      return $getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function(type) {
      var er, handler, len, args, i, events, domain2, needDomainExit = !1, doError = type === "error";
      if (events = this._events, events)
        doError = doError && events.error == null;
      else if (!doError)
        return !1;
      if (domain2 = this.domain, doError) {
        if (er = arguments[1], domain2)
          er || (er = new Error('Uncaught, unspecified "error" event')), er.domainEmitter = this, er.domain = domain2, er.domainThrown = !1, domain2.emit("error", er);
        else {
          if (er instanceof Error)
            throw er;
          var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
          throw err.context = er, err;
        }
        return !1;
      }
      if (handler = events[type], !handler)
        return !1;
      var isFn = typeof handler == "function";
      switch (len = arguments.length, len) {
        case 1:
          emitNone(handler, isFn, this);
          break;
        case 2:
          emitOne(handler, isFn, this, arguments[1]);
          break;
        case 3:
          emitTwo(handler, isFn, this, arguments[1], arguments[2]);
          break;
        case 4:
          emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
          break;
        default:
          for (args = new Array(len - 1), i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          emitMany(handler, isFn, this, args);
      }
      return needDomainExit && domain2.exit(), !0;
    };
    EventEmitter.prototype.addListener = function(type, listener) {
      return _addListener(this, type, listener, !1);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function(type, listener) {
      return _addListener(this, type, listener, !0);
    };
    EventEmitter.prototype.once = function(type, listener) {
      if (typeof listener != "function")
        throw new TypeError('"listener" argument must be a function');
      return this.on(type, _onceWrap(this, type, listener)), this;
    };
    EventEmitter.prototype.prependOnceListener = function(type, listener) {
      if (typeof listener != "function")
        throw new TypeError('"listener" argument must be a function');
      return this.prependListener(type, _onceWrap(this, type, listener)), this;
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
      var list, events, position2, i, originalListener;
      if (typeof listener != "function")
        throw new TypeError('"listener" argument must be a function');
      if (events = this._events, !events)
        return this;
      if (list = events[type], !list)
        return this;
      if (list === listener || list.listener && list.listener === listener)
        --this._eventsCount === 0 ? this._events = new EventHandlers() : (delete events[type], events.removeListener && this.emit("removeListener", type, list.listener || listener));
      else if (typeof list != "function") {
        for (position2 = -1, i = list.length; i-- > 0; )
          if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            originalListener = list[i].listener, position2 = i;
            break;
          }
        if (position2 < 0)
          return this;
        if (list.length === 1) {
          if (list[0] = void 0, --this._eventsCount === 0)
            return this._events = new EventHandlers(), this;
          delete events[type];
        } else
          spliceOne(list, position2);
        events.removeListener && this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
      var listeners2, events;
      if (events = this._events, !events)
        return this;
      if (!events.removeListener)
        return arguments.length === 0 ? (this._events = new EventHandlers(), this._eventsCount = 0) : events[type] && (--this._eventsCount === 0 ? this._events = new EventHandlers() : delete events[type]), this;
      if (arguments.length === 0) {
        for (var keys2 = Object.keys(events), i = 0, key; i < keys2.length; ++i)
          key = keys2[i], key !== "removeListener" && this.removeAllListeners(key);
        return this.removeAllListeners("removeListener"), this._events = new EventHandlers(), this._eventsCount = 0, this;
      }
      if (listeners2 = events[type], typeof listeners2 == "function")
        this.removeListener(type, listeners2);
      else if (listeners2)
        do
          this.removeListener(type, listeners2[listeners2.length - 1]);
        while (listeners2[0]);
      return this;
    };
    EventEmitter.prototype.listeners = function(type) {
      var evlistener, ret, events = this._events;
      return events ? (evlistener = events[type], evlistener ? typeof evlistener == "function" ? ret = [evlistener.listener || evlistener] : ret = unwrapListeners(evlistener) : ret = []) : ret = [], ret;
    };
    EventEmitter.listenerCount = function(emitter, type) {
      return typeof emitter.listenerCount == "function" ? emitter.listenerCount(type) : listenerCount.call(emitter, type);
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    EventEmitter.prototype.eventNames = function() {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    };
  }
});

// node-modules-polyfills:process
function defaultSetTimout2() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout2() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout2(fun) {
  if (cachedSetTimeout2 === setTimeout)
    return setTimeout(fun, 0);
  if ((cachedSetTimeout2 === defaultSetTimout2 || !cachedSetTimeout2) && setTimeout)
    return cachedSetTimeout2 = setTimeout, setTimeout(fun, 0);
  try {
    return cachedSetTimeout2(fun, 0);
  } catch {
    try {
      return cachedSetTimeout2.call(null, fun, 0);
    } catch {
      return cachedSetTimeout2.call(this, fun, 0);
    }
  }
}
function runClearTimeout2(marker) {
  if (cachedClearTimeout2 === clearTimeout)
    return clearTimeout(marker);
  if ((cachedClearTimeout2 === defaultClearTimeout2 || !cachedClearTimeout2) && clearTimeout)
    return cachedClearTimeout2 = clearTimeout, clearTimeout(marker);
  try {
    return cachedClearTimeout2(marker);
  } catch {
    try {
      return cachedClearTimeout2.call(null, marker);
    } catch {
      return cachedClearTimeout2.call(this, marker);
    }
  }
}
function cleanUpNextTick2() {
  !draining2 || !currentQueue2 || (draining2 = !1, currentQueue2.length ? queue2 = currentQueue2.concat(queue2) : queueIndex2 = -1, queue2.length && drainQueue2());
}
function drainQueue2() {
  if (!draining2) {
    var timeout = runTimeout2(cleanUpNextTick2);
    draining2 = !0;
    for (var len = queue2.length; len; ) {
      for (currentQueue2 = queue2, queue2 = []; ++queueIndex2 < len; )
        currentQueue2 && currentQueue2[queueIndex2].run();
      queueIndex2 = -1, len = queue2.length;
    }
    currentQueue2 = null, draining2 = !1, runClearTimeout2(timeout);
  }
}
function nextTick2(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
  queue2.push(new Item2(fun, args)), queue2.length === 1 && !draining2 && runTimeout2(drainQueue2);
}
function Item2(fun, array) {
  this.fun = fun, this.array = array;
}
function noop2() {
}
function binding2(name) {
  throw new Error("process.binding is not supported");
}
function cwd2() {
  return "/";
}
function chdir2(dir) {
  throw new Error("process.chdir is not supported");
}
function umask2() {
  return 0;
}
function hrtime2(previousTimestamp) {
  var clocktime = performanceNow2.call(performance2) * 1e-3, seconds = Math.floor(clocktime), nanoseconds = Math.floor(clocktime % 1 * 1e9);
  return previousTimestamp && (seconds = seconds - previousTimestamp[0], nanoseconds = nanoseconds - previousTimestamp[1], nanoseconds < 0 && (seconds--, nanoseconds += 1e9)), [seconds, nanoseconds];
}
function uptime2() {
  var currentTime = new Date(), dif = currentTime - startTime2;
  return dif / 1e3;
}
var cachedSetTimeout2, cachedClearTimeout2, queue2, draining2, currentQueue2, queueIndex2, title2, platform2, browser2, env2, argv2, version2, versions2, release2, config2, on2, addListener3, once3, off2, removeListener3, removeAllListeners3, emit3, performance2, performanceNow2, startTime2, browser$1, process_default, init_process = __esm({
  "node-modules-polyfills:process"() {
    init_virtual_process_polyfill();
    init_buffer();
    cachedSetTimeout2 = defaultSetTimout2, cachedClearTimeout2 = defaultClearTimeout2;
    typeof globalThis.setTimeout == "function" && (cachedSetTimeout2 = setTimeout);
    typeof globalThis.clearTimeout == "function" && (cachedClearTimeout2 = clearTimeout);
    queue2 = [], draining2 = !1, queueIndex2 = -1;
    Item2.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    title2 = "browser", platform2 = "browser", browser2 = !0, env2 = {}, argv2 = [], version2 = "", versions2 = {}, release2 = {}, config2 = {};
    on2 = noop2, addListener3 = noop2, once3 = noop2, off2 = noop2, removeListener3 = noop2, removeAllListeners3 = noop2, emit3 = noop2;
    performance2 = globalThis.performance || {}, performanceNow2 = performance2.now || performance2.mozNow || performance2.msNow || performance2.oNow || performance2.webkitNow || function() {
      return new Date().getTime();
    };
    startTime2 = new Date();
    browser$1 = {
      nextTick: nextTick2,
      title: title2,
      browser: browser2,
      env: env2,
      argv: argv2,
      version: version2,
      versions: versions2,
      on: on2,
      addListener: addListener3,
      once: once3,
      off: off2,
      removeListener: removeListener3,
      removeAllListeners: removeAllListeners3,
      emit: emit3,
      binding: binding2,
      cwd: cwd2,
      chdir: chdir2,
      umask: umask2,
      hrtime: hrtime2,
      platform: platform2,
      release: release2,
      config: config2,
      uptime: uptime2
    }, process_default = browser$1;
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js
var inherits, inherits_default, init_inherits = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    typeof Object.create == "function" ? inherits = function(ctor, superCtor) {
      ctor.super_ = superCtor, ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
    } : inherits = function(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype, ctor.prototype = new TempCtor(), ctor.prototype.constructor = ctor;
    };
    inherits_default = inherits;
  }
});

// node-modules-polyfills:util
var util_exports = {};
__export(util_exports, {
  _extend: () => _extend,
  debuglog: () => debuglog,
  default: () => util_default,
  deprecate: () => deprecate,
  format: () => format,
  inherits: () => inherits_default,
  inspect: () => inspect,
  isArray: () => isArray,
  isBoolean: () => isBoolean,
  isBuffer: () => isBuffer2,
  isDate: () => isDate,
  isError: () => isError,
  isFunction: () => isFunction,
  isNull: () => isNull,
  isNullOrUndefined: () => isNullOrUndefined,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isPrimitive: () => isPrimitive,
  isRegExp: () => isRegExp,
  isString: () => isString,
  isSymbol: () => isSymbol,
  isUndefined: () => isUndefined,
  log: () => log
});
function format(f) {
  if (!isString(f)) {
    for (var objects = [], i = 0; i < arguments.length; i++)
      objects.push(inspect(arguments[i]));
    return objects.join(" ");
  }
  for (var i = 1, args = arguments, len = args.length, str = String(f).replace(formatRegExp, function(x2) {
    if (x2 === "%%")
      return "%";
    if (i >= len)
      return x2;
    switch (x2) {
      case "%s":
        return String(args[i++]);
      case "%d":
        return Number(args[i++]);
      case "%j":
        try {
          return JSON.stringify(args[i++]);
        } catch {
          return "[Circular]";
        }
      default:
        return x2;
    }
  }), x = args[i]; i < len; x = args[++i])
    isNull(x) || !isObject(x) ? str += " " + x : str += " " + inspect(x);
  return str;
}
function deprecate(fn, msg) {
  if (isUndefined(globalThis.process))
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  if (process_default.noDeprecation === !0)
    return fn;
  var warned = !1;
  function deprecated() {
    if (!warned) {
      if (process_default.throwDeprecation)
        throw new Error(msg);
      process_default.traceDeprecation ? console.trace(msg) : console.error(msg), warned = !0;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
function debuglog(set) {
  if (isUndefined(debugEnviron) && (debugEnviron = process_default.env.NODE_DEBUG || ""), set = set.toUpperCase(), !debugs[set])
    if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error("%s %d: %s", set, pid, msg);
      };
    } else
      debugs[set] = function() {
      };
  return debugs[set];
}
function inspect(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  return arguments.length >= 3 && (ctx.depth = arguments[2]), arguments.length >= 4 && (ctx.colors = arguments[3]), isBoolean(opts) ? ctx.showHidden = opts : opts && _extend(ctx, opts), isUndefined(ctx.showHidden) && (ctx.showHidden = !1), isUndefined(ctx.depth) && (ctx.depth = 2), isUndefined(ctx.colors) && (ctx.colors = !1), isUndefined(ctx.customInspect) && (ctx.customInspect = !0), ctx.colors && (ctx.stylize = stylizeWithColor), formatValue(ctx, obj, ctx.depth);
}
function stylizeWithColor(str, styleType) {
  var style3 = inspect.styles[styleType];
  return style3 ? "\x1B[" + inspect.colors[style3][0] + "m" + str + "\x1B[" + inspect.colors[style3][1] + "m" : str;
}
function stylizeNoColor(str, styleType) {
  return str;
}
function arrayToHash(array) {
  var hash = {};
  return array.forEach(function(val, idx) {
    hash[val] = !0;
  }), hash;
}
function formatValue(ctx, value, recurseTimes) {
  if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== inspect && !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    return isString(ret) || (ret = formatValue(ctx, ret, recurseTimes)), ret;
  }
  var primitive = formatPrimitive(ctx, value);
  if (primitive)
    return primitive;
  var keys2 = Object.keys(value), visibleKeys = arrayToHash(keys2);
  if (ctx.showHidden && (keys2 = Object.getOwnPropertyNames(value)), isError(value) && (keys2.indexOf("message") >= 0 || keys2.indexOf("description") >= 0))
    return formatError(value);
  if (keys2.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ": " + value.name : "";
      return ctx.stylize("[Function" + name + "]", "special");
    }
    if (isRegExp(value))
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    if (isDate(value))
      return ctx.stylize(Date.prototype.toString.call(value), "date");
    if (isError(value))
      return formatError(value);
  }
  var base = "", array = !1, braces = ["{", "}"];
  if (isArray(value) && (array = !0, braces = ["[", "]"]), isFunction(value)) {
    var n = value.name ? ": " + value.name : "";
    base = " [Function" + n + "]";
  }
  if (isRegExp(value) && (base = " " + RegExp.prototype.toString.call(value)), isDate(value) && (base = " " + Date.prototype.toUTCString.call(value)), isError(value) && (base = " " + formatError(value)), keys2.length === 0 && (!array || value.length == 0))
    return braces[0] + base + braces[1];
  if (recurseTimes < 0)
    return isRegExp(value) ? ctx.stylize(RegExp.prototype.toString.call(value), "regexp") : ctx.stylize("[Object]", "special");
  ctx.seen.push(value);
  var output;
  return array ? output = formatArray(ctx, value, recurseTimes, visibleKeys, keys2) : output = keys2.map(function(key) {
    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
  }), ctx.seen.pop(), reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize("undefined", "undefined");
  if (isString(value)) {
    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber(value))
    return ctx.stylize("" + value, "number");
  if (isBoolean(value))
    return ctx.stylize("" + value, "boolean");
  if (isNull(value))
    return ctx.stylize("null", "null");
}
function formatError(value) {
  return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys2) {
  for (var output = [], i = 0, l = value.length; i < l; ++i)
    hasOwnProperty(value, String(i)) ? output.push(formatProperty(
      ctx,
      value,
      recurseTimes,
      visibleKeys,
      String(i),
      !0
    )) : output.push("");
  return keys2.forEach(function(key) {
    key.match(/^\d+$/) || output.push(formatProperty(
      ctx,
      value,
      recurseTimes,
      visibleKeys,
      key,
      !0
    ));
  }), output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  if (desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] }, desc.get ? desc.set ? str = ctx.stylize("[Getter/Setter]", "special") : str = ctx.stylize("[Getter]", "special") : desc.set && (str = ctx.stylize("[Setter]", "special")), hasOwnProperty(visibleKeys, key) || (name = "[" + key + "]"), str || (ctx.seen.indexOf(desc.value) < 0 ? (isNull(recurseTimes) ? str = formatValue(ctx, desc.value, null) : str = formatValue(ctx, desc.value, recurseTimes - 1), str.indexOf(`
`) > -1 && (array ? str = str.split(`
`).map(function(line) {
    return "  " + line;
  }).join(`
`).substr(2) : str = `
` + str.split(`
`).map(function(line) {
    return "   " + line;
  }).join(`
`))) : str = ctx.stylize("[Circular]", "special")), isUndefined(name)) {
    if (array && key.match(/^\d+$/))
      return str;
    name = JSON.stringify("" + key), name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (name = name.substr(1, name.length - 2), name = ctx.stylize(name, "name")) : (name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), name = ctx.stylize(name, "string"));
  }
  return name + ": " + str;
}
function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0, length = output.reduce(function(prev, cur) {
    return numLinesEst++, cur.indexOf(`
`) >= 0 && numLinesEst++, prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  return length > 60 ? braces[0] + (base === "" ? "" : base + `
 `) + " " + output.join(`,
  `) + " " + braces[1] : braces[0] + base + " " + output.join(", ") + " " + braces[1];
}
function isArray(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg == "boolean";
}
function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null;
}
function isNumber(arg) {
  return typeof arg == "number";
}
function isString(arg) {
  return typeof arg == "string";
}
function isSymbol(arg) {
  return typeof arg == "symbol";
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject(re) && objectToString(re) === "[object RegExp]";
}
function isObject(arg) {
  return typeof arg == "object" && arg !== null;
}
function isDate(d) {
  return isObject(d) && objectToString(d) === "[object Date]";
}
function isError(e) {
  return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isFunction(arg) {
  return typeof arg == "function";
}
function isPrimitive(arg) {
  return arg === null || typeof arg == "boolean" || typeof arg == "number" || typeof arg == "string" || typeof arg == "symbol" || typeof arg > "u";
}
function isBuffer2(maybeBuf) {
  return Buffer2.isBuffer(maybeBuf);
}
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function pad(n) {
  return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
function timestamp() {
  var d = new Date(), time = [
    pad(d.getHours()),
    pad(d.getMinutes()),
    pad(d.getSeconds())
  ].join(":");
  return [d.getDate(), months[d.getMonth()], time].join(" ");
}
function log() {
  console.log("%s - %s", timestamp(), format.apply(null, arguments));
}
function _extend(origin, add) {
  if (!add || !isObject(add))
    return origin;
  for (var keys2 = Object.keys(add), i = keys2.length; i--; )
    origin[keys2[i]] = add[keys2[i]];
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var formatRegExp, debugs, debugEnviron, months, util_default, init_util = __esm({
  "node-modules-polyfills:util"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_process();
    init_inherits();
    formatRegExp = /%[sdj%]/g;
    debugs = {};
    inspect.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    };
    inspect.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      regexp: "red"
    };
    months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    util_default = {
      inherits: inherits_default,
      _extend,
      log,
      isBuffer: isBuffer2,
      isPrimitive,
      isFunction,
      isError,
      isDate,
      isObject,
      isRegExp,
      isUndefined,
      isSymbol,
      isString,
      isNumber,
      isNullOrUndefined,
      isNull,
      isBoolean,
      isArray,
      inspect,
      deprecate,
      format,
      debuglog
    };
  }
});

// node-modules-polyfills:buffer
var buffer_exports = {};
__export(buffer_exports, {
  Buffer: () => Buffer3,
  INSPECT_MAX_BYTES: () => INSPECT_MAX_BYTES,
  SlowBuffer: () => SlowBuffer,
  isBuffer: () => isBuffer3,
  kMaxLength: () => _kMaxLength
});
function init2() {
  inited2 = !0;
  for (var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i)
    lookup2[i] = code[i], revLookup2[code.charCodeAt(i)] = i;
  revLookup2["-".charCodeAt(0)] = 62, revLookup2["_".charCodeAt(0)] = 63;
}
function toByteArray(b64) {
  inited2 || init2();
  var i, j, l, tmp, placeHolders, arr, len = b64.length;
  if (len % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0, arr = new Arr2(len * 3 / 4 - placeHolders), l = placeHolders > 0 ? len - 4 : len;
  var L = 0;
  for (i = 0, j = 0; i < l; i += 4, j += 3)
    tmp = revLookup2[b64.charCodeAt(i)] << 18 | revLookup2[b64.charCodeAt(i + 1)] << 12 | revLookup2[b64.charCodeAt(i + 2)] << 6 | revLookup2[b64.charCodeAt(i + 3)], arr[L++] = tmp >> 16 & 255, arr[L++] = tmp >> 8 & 255, arr[L++] = tmp & 255;
  return placeHolders === 2 ? (tmp = revLookup2[b64.charCodeAt(i)] << 2 | revLookup2[b64.charCodeAt(i + 1)] >> 4, arr[L++] = tmp & 255) : placeHolders === 1 && (tmp = revLookup2[b64.charCodeAt(i)] << 10 | revLookup2[b64.charCodeAt(i + 1)] << 4 | revLookup2[b64.charCodeAt(i + 2)] >> 2, arr[L++] = tmp >> 8 & 255, arr[L++] = tmp & 255), arr;
}
function tripletToBase642(num) {
  return lookup2[num >> 18 & 63] + lookup2[num >> 12 & 63] + lookup2[num >> 6 & 63] + lookup2[num & 63];
}
function encodeChunk2(uint8, start, end) {
  for (var tmp, output = [], i = start; i < end; i += 3)
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2], output.push(tripletToBase642(tmp));
  return output.join("");
}
function fromByteArray(uint8) {
  inited2 || init2();
  for (var tmp, len = uint8.length, extraBytes = len % 3, output = "", parts = [], maxChunkLength = 16383, i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)
    parts.push(encodeChunk2(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  return extraBytes === 1 ? (tmp = uint8[len - 1], output += lookup2[tmp >> 2], output += lookup2[tmp << 4 & 63], output += "==") : extraBytes === 2 && (tmp = (uint8[len - 2] << 8) + uint8[len - 1], output += lookup2[tmp >> 10], output += lookup2[tmp >> 4 & 63], output += lookup2[tmp << 2 & 63], output += "="), parts.push(output), parts.join("");
}
function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m, eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i = isLE ? nBytes - 1 : 0, d = isLE ? -1 : 1, s = buffer[offset + i];
  for (i += d, e = s & (1 << -nBits) - 1, s >>= -nBits, nBits += eLen; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8)
    ;
  for (m = e & (1 << -nBits) - 1, e >>= -nBits, nBits += mLen; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8)
    ;
  if (e === 0)
    e = 1 - eBias;
  else {
    if (e === eMax)
      return m ? NaN : (s ? -1 : 1) * (1 / 0);
    m = m + Math.pow(2, mLen), e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write2(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c, eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = isLE ? 0 : nBytes - 1, d = isLE ? 1 : -1, s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  for (value = Math.abs(value), isNaN(value) || value === 1 / 0 ? (m = isNaN(value) ? 1 : 0, e = eMax) : (e = Math.floor(Math.log(value) / Math.LN2), value * (c = Math.pow(2, -e)) < 1 && (e--, c *= 2), e + eBias >= 1 ? value += rt / c : value += rt * Math.pow(2, 1 - eBias), value * c >= 2 && (e++, c /= 2), e + eBias >= eMax ? (m = 0, e = eMax) : e + eBias >= 1 ? (m = (value * c - 1) * Math.pow(2, mLen), e = e + eBias) : (m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen), e = 0)); mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8)
    ;
  for (e = e << mLen | m, eLen += mLen; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8)
    ;
  buffer[offset + i - d] |= s * 128;
}
function kMaxLength2() {
  return Buffer3.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer2(that, length) {
  if (kMaxLength2() < length)
    throw new RangeError("Invalid typed array length");
  return Buffer3.TYPED_ARRAY_SUPPORT ? (that = new Uint8Array(length), that.__proto__ = Buffer3.prototype) : (that === null && (that = new Buffer3(length)), that.length = length), that;
}
function Buffer3(arg, encodingOrOffset, length) {
  if (!Buffer3.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer3))
    return new Buffer3(arg, encodingOrOffset, length);
  if (typeof arg == "number") {
    if (typeof encodingOrOffset == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return allocUnsafe2(this, arg);
  }
  return from2(this, arg, encodingOrOffset, length);
}
function from2(that, value, encodingOrOffset, length) {
  if (typeof value == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && value instanceof ArrayBuffer ? fromArrayBuffer2(that, value, encodingOrOffset, length) : typeof value == "string" ? fromString2(that, value, encodingOrOffset) : fromObject2(that, value);
}
function assertSize2(size) {
  if (typeof size != "number")
    throw new TypeError('"size" argument must be a number');
  if (size < 0)
    throw new RangeError('"size" argument must not be negative');
}
function alloc2(that, size, fill3, encoding) {
  return assertSize2(size), size <= 0 ? createBuffer2(that, size) : fill3 !== void 0 ? typeof encoding == "string" ? createBuffer2(that, size).fill(fill3, encoding) : createBuffer2(that, size).fill(fill3) : createBuffer2(that, size);
}
function allocUnsafe2(that, size) {
  if (assertSize2(size), that = createBuffer2(that, size < 0 ? 0 : checked2(size) | 0), !Buffer3.TYPED_ARRAY_SUPPORT)
    for (var i = 0; i < size; ++i)
      that[i] = 0;
  return that;
}
function fromString2(that, string, encoding) {
  if ((typeof encoding != "string" || encoding === "") && (encoding = "utf8"), !Buffer3.isEncoding(encoding))
    throw new TypeError('"encoding" must be a valid string encoding');
  var length = byteLength2(string, encoding) | 0;
  that = createBuffer2(that, length);
  var actual = that.write(string, encoding);
  return actual !== length && (that = that.slice(0, actual)), that;
}
function fromArrayLike2(that, array) {
  var length = array.length < 0 ? 0 : checked2(array.length) | 0;
  that = createBuffer2(that, length);
  for (var i = 0; i < length; i += 1)
    that[i] = array[i] & 255;
  return that;
}
function fromArrayBuffer2(that, array, byteOffset, length) {
  if (array.byteLength, byteOffset < 0 || array.byteLength < byteOffset)
    throw new RangeError("'offset' is out of bounds");
  if (array.byteLength < byteOffset + (length || 0))
    throw new RangeError("'length' is out of bounds");
  return byteOffset === void 0 && length === void 0 ? array = new Uint8Array(array) : length === void 0 ? array = new Uint8Array(array, byteOffset) : array = new Uint8Array(array, byteOffset, length), Buffer3.TYPED_ARRAY_SUPPORT ? (that = array, that.__proto__ = Buffer3.prototype) : that = fromArrayLike2(that, array), that;
}
function fromObject2(that, obj) {
  if (internalIsBuffer2(obj)) {
    var len = checked2(obj.length) | 0;
    return that = createBuffer2(that, len), that.length === 0 || obj.copy(that, 0, 0, len), that;
  }
  if (obj) {
    if (typeof ArrayBuffer < "u" && obj.buffer instanceof ArrayBuffer || "length" in obj)
      return typeof obj.length != "number" || isnan2(obj.length) ? createBuffer2(that, 0) : fromArrayLike2(that, obj);
    if (obj.type === "Buffer" && isArray2(obj.data))
      return fromArrayLike2(that, obj.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function checked2(length) {
  if (length >= kMaxLength2())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength2().toString(16) + " bytes");
  return length | 0;
}
function SlowBuffer(length) {
  return +length != length && (length = 0), Buffer3.alloc(+length);
}
function internalIsBuffer2(b) {
  return !!(b != null && b._isBuffer);
}
function byteLength2(string, encoding) {
  if (internalIsBuffer2(string))
    return string.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer))
    return string.byteLength;
  typeof string != "string" && (string = "" + string);
  var len = string.length;
  if (len === 0)
    return 0;
  for (var loweredCase = !1; ; )
    switch (encoding) {
      case "ascii":
      case "latin1":
      case "binary":
        return len;
      case "utf8":
      case "utf-8":
      case void 0:
        return utf8ToBytes2(string).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return len * 2;
      case "hex":
        return len >>> 1;
      case "base64":
        return base64ToBytes2(string).length;
      default:
        if (loweredCase)
          return utf8ToBytes2(string).length;
        encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
    }
}
function slowToString2(encoding, start, end) {
  var loweredCase = !1;
  if ((start === void 0 || start < 0) && (start = 0), start > this.length || ((end === void 0 || end > this.length) && (end = this.length), end <= 0) || (end >>>= 0, start >>>= 0, end <= start))
    return "";
  for (encoding || (encoding = "utf8"); ; )
    switch (encoding) {
      case "hex":
        return hexSlice2(this, start, end);
      case "utf8":
      case "utf-8":
        return utf8Slice2(this, start, end);
      case "ascii":
        return asciiSlice2(this, start, end);
      case "latin1":
      case "binary":
        return latin1Slice2(this, start, end);
      case "base64":
        return base64Slice2(this, start, end);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return utf16leSlice2(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError("Unknown encoding: " + encoding);
        encoding = (encoding + "").toLowerCase(), loweredCase = !0;
    }
}
function swap2(b, n, m) {
  var i = b[n];
  b[n] = b[m], b[m] = i;
}
function bidirectionalIndexOf2(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0)
    return -1;
  if (typeof byteOffset == "string" ? (encoding = byteOffset, byteOffset = 0) : byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648), byteOffset = +byteOffset, isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1), byteOffset < 0 && (byteOffset = buffer.length + byteOffset), byteOffset >= buffer.length) {
    if (dir)
      return -1;
    byteOffset = buffer.length - 1;
  } else if (byteOffset < 0)
    if (dir)
      byteOffset = 0;
    else
      return -1;
  if (typeof val == "string" && (val = Buffer3.from(val, encoding)), internalIsBuffer2(val))
    return val.length === 0 ? -1 : arrayIndexOf2(buffer, val, byteOffset, encoding, dir);
  if (typeof val == "number")
    return val = val & 255, Buffer3.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset) : arrayIndexOf2(buffer, [val], byteOffset, encoding, dir);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf2(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1, arrLength = arr.length, valLength = val.length;
  if (encoding !== void 0 && (encoding = String(encoding).toLowerCase(), encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le")) {
    if (arr.length < 2 || val.length < 2)
      return -1;
    indexSize = 2, arrLength /= 2, valLength /= 2, byteOffset /= 2;
  }
  function read2(buf, i2) {
    return indexSize === 1 ? buf[i2] : buf.readUInt16BE(i2 * indexSize);
  }
  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++)
      if (read2(arr, i) === read2(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1 && (foundIndex = i), i - foundIndex + 1 === valLength)
          return foundIndex * indexSize;
      } else
        foundIndex !== -1 && (i -= i - foundIndex), foundIndex = -1;
  } else
    for (byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength), i = byteOffset; i >= 0; i--) {
      for (var found = !0, j = 0; j < valLength; j++)
        if (read2(arr, i + j) !== read2(val, j)) {
          found = !1;
          break;
        }
      if (found)
        return i;
    }
  return -1;
}
function hexWrite2(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  length ? (length = Number(length), length > remaining && (length = remaining)) : length = remaining;
  var strLen = string.length;
  if (strLen % 2 !== 0)
    throw new TypeError("Invalid hex string");
  length > strLen / 2 && (length = strLen / 2);
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed))
      return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write2(buf, string, offset, length) {
  return blitBuffer2(utf8ToBytes2(string, buf.length - offset), buf, offset, length);
}
function asciiWrite2(buf, string, offset, length) {
  return blitBuffer2(asciiToBytes2(string), buf, offset, length);
}
function latin1Write2(buf, string, offset, length) {
  return asciiWrite2(buf, string, offset, length);
}
function base64Write2(buf, string, offset, length) {
  return blitBuffer2(base64ToBytes2(string), buf, offset, length);
}
function ucs2Write2(buf, string, offset, length) {
  return blitBuffer2(utf16leToBytes2(string, buf.length - offset), buf, offset, length);
}
function base64Slice2(buf, start, end) {
  return start === 0 && end === buf.length ? fromByteArray(buf) : fromByteArray(buf.slice(start, end));
}
function utf8Slice2(buf, start, end) {
  end = Math.min(buf.length, end);
  for (var res = [], i = start; i < end; ) {
    var firstByte = buf[i], codePoint = null, bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          firstByte < 128 && (codePoint = firstByte);
          break;
        case 2:
          secondByte = buf[i + 1], (secondByte & 192) === 128 && (tempCodePoint = (firstByte & 31) << 6 | secondByte & 63, tempCodePoint > 127 && (codePoint = tempCodePoint));
          break;
        case 3:
          secondByte = buf[i + 1], thirdByte = buf[i + 2], (secondByte & 192) === 128 && (thirdByte & 192) === 128 && (tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63, tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint));
          break;
        case 4:
          secondByte = buf[i + 1], thirdByte = buf[i + 2], fourthByte = buf[i + 3], (secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128 && (tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63, tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint));
      }
    }
    codePoint === null ? (codePoint = 65533, bytesPerSequence = 1) : codePoint > 65535 && (codePoint -= 65536, res.push(codePoint >>> 10 & 1023 | 55296), codePoint = 56320 | codePoint & 1023), res.push(codePoint), i += bytesPerSequence;
  }
  return decodeCodePointsArray2(res);
}
function decodeCodePointsArray2(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH2)
    return String.fromCharCode.apply(String, codePoints);
  for (var res = "", i = 0; i < len; )
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH2)
    );
  return res;
}
function asciiSlice2(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i)
    ret += String.fromCharCode(buf[i] & 127);
  return ret;
}
function latin1Slice2(buf, start, end) {
  var ret = "";
  end = Math.min(buf.length, end);
  for (var i = start; i < end; ++i)
    ret += String.fromCharCode(buf[i]);
  return ret;
}
function hexSlice2(buf, start, end) {
  var len = buf.length;
  (!start || start < 0) && (start = 0), (!end || end < 0 || end > len) && (end = len);
  for (var out = "", i = start; i < end; ++i)
    out += toHex2(buf[i]);
  return out;
}
function utf16leSlice2(buf, start, end) {
  for (var bytes = buf.slice(start, end), res = "", i = 0; i < bytes.length; i += 2)
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  return res;
}
function checkOffset2(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError("offset is not uint");
  if (offset + ext > length)
    throw new RangeError("Trying to access beyond buffer length");
}
function checkInt2(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer2(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
}
function objectWriteUInt162(buf, value, offset, littleEndian) {
  value < 0 && (value = 65535 + value + 1);
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i)
    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
}
function objectWriteUInt322(buf, value, offset, littleEndian) {
  value < 0 && (value = 4294967295 + value + 1);
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i)
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
}
function checkIEEE7542(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length)
    throw new RangeError("Index out of range");
  if (offset < 0)
    throw new RangeError("Index out of range");
}
function writeFloat2(buf, value, offset, littleEndian, noAssert) {
  return noAssert || checkIEEE7542(buf, value, offset, 4), write2(buf, value, offset, littleEndian, 23, 4), offset + 4;
}
function writeDouble2(buf, value, offset, littleEndian, noAssert) {
  return noAssert || checkIEEE7542(buf, value, offset, 8), write2(buf, value, offset, littleEndian, 52, 8), offset + 8;
}
function base64clean2(str) {
  if (str = stringtrim2(str).replace(INVALID_BASE64_RE2, ""), str.length < 2)
    return "";
  for (; str.length % 4 !== 0; )
    str = str + "=";
  return str;
}
function stringtrim2(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function toHex2(n) {
  return n < 16 ? "0" + n.toString(16) : n.toString(16);
}
function utf8ToBytes2(string, units) {
  units = units || 1 / 0;
  for (var codePoint, length = string.length, leadSurrogate = null, bytes = [], i = 0; i < length; ++i) {
    if (codePoint = string.charCodeAt(i), codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          (units -= 3) > -1 && bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          (units -= 3) > -1 && bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        (units -= 3) > -1 && bytes.push(239, 191, 189), leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else
      leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
    if (leadSurrogate = null, codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(
        codePoint >> 6 | 192,
        codePoint & 63 | 128
      );
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(
        codePoint >> 12 | 224,
        codePoint >> 6 & 63 | 128,
        codePoint & 63 | 128
      );
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(
        codePoint >> 18 | 240,
        codePoint >> 12 & 63 | 128,
        codePoint >> 6 & 63 | 128,
        codePoint & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return bytes;
}
function asciiToBytes2(str) {
  for (var byteArray = [], i = 0; i < str.length; ++i)
    byteArray.push(str.charCodeAt(i) & 255);
  return byteArray;
}
function utf16leToBytes2(str, units) {
  for (var c, hi, lo, byteArray = [], i = 0; i < str.length && !((units -= 2) < 0); ++i)
    c = str.charCodeAt(i), hi = c >> 8, lo = c % 256, byteArray.push(lo), byteArray.push(hi);
  return byteArray;
}
function base64ToBytes2(str) {
  return toByteArray(base64clean2(str));
}
function blitBuffer2(src, dst, offset, length) {
  for (var i = 0; i < length && !(i + offset >= dst.length || i >= src.length); ++i)
    dst[i + offset] = src[i];
  return i;
}
function isnan2(val) {
  return val !== val;
}
function isBuffer3(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer2(obj) || isSlowBuffer2(obj));
}
function isFastBuffer2(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer == "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer2(obj) {
  return typeof obj.readFloatLE == "function" && typeof obj.slice == "function" && isFastBuffer2(obj.slice(0, 0));
}
var lookup2, revLookup2, Arr2, inited2, toString2, isArray2, INSPECT_MAX_BYTES, _kMaxLength, MAX_ARGUMENTS_LENGTH2, INVALID_BASE64_RE2, init_buffer2 = __esm({
  "node-modules-polyfills:buffer"() {
    init_virtual_process_polyfill();
    init_buffer();
    lookup2 = [], revLookup2 = [], Arr2 = typeof Uint8Array < "u" ? Uint8Array : Array, inited2 = !1;
    toString2 = {}.toString, isArray2 = Array.isArray || function(arr) {
      return toString2.call(arr) == "[object Array]";
    };
    INSPECT_MAX_BYTES = 50;
    Buffer3.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : !0;
    _kMaxLength = kMaxLength2();
    Buffer3.poolSize = 8192;
    Buffer3._augment = function(arr) {
      return arr.__proto__ = Buffer3.prototype, arr;
    };
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from2(null, value, encodingOrOffset, length);
    };
    Buffer3.TYPED_ARRAY_SUPPORT && (Buffer3.prototype.__proto__ = Uint8Array.prototype, Buffer3.__proto__ = Uint8Array);
    Buffer3.alloc = function(size, fill3, encoding) {
      return alloc2(null, size, fill3, encoding);
    };
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe2(null, size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe2(null, size);
    };
    Buffer3.isBuffer = isBuffer3;
    Buffer3.compare = function(a, b) {
      if (!internalIsBuffer2(a) || !internalIsBuffer2(b))
        throw new TypeError("Arguments must be Buffers");
      if (a === b)
        return 0;
      for (var x = a.length, y = b.length, i = 0, len = Math.min(x, y); i < len; ++i)
        if (a[i] !== b[i]) {
          x = a[i], y = b[i];
          break;
        }
      return x < y ? -1 : y < x ? 1 : 0;
    };
    Buffer3.isEncoding = function(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    };
    Buffer3.concat = function(list, length) {
      if (!isArray2(list))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (list.length === 0)
        return Buffer3.alloc(0);
      var i;
      if (length === void 0)
        for (length = 0, i = 0; i < list.length; ++i)
          length += list[i].length;
      var buffer = Buffer3.allocUnsafe(length), pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer2(buf))
          throw new TypeError('"list" argument must be an Array of Buffers');
        buf.copy(buffer, pos), pos += buf.length;
      }
      return buffer;
    };
    Buffer3.byteLength = byteLength2;
    Buffer3.prototype._isBuffer = !0;
    Buffer3.prototype.swap16 = function() {
      var len = this.length;
      if (len % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var i = 0; i < len; i += 2)
        swap2(this, i, i + 1);
      return this;
    };
    Buffer3.prototype.swap32 = function() {
      var len = this.length;
      if (len % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var i = 0; i < len; i += 4)
        swap2(this, i, i + 3), swap2(this, i + 1, i + 2);
      return this;
    };
    Buffer3.prototype.swap64 = function() {
      var len = this.length;
      if (len % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var i = 0; i < len; i += 8)
        swap2(this, i, i + 7), swap2(this, i + 1, i + 6), swap2(this, i + 2, i + 5), swap2(this, i + 3, i + 4);
      return this;
    };
    Buffer3.prototype.toString = function() {
      var length = this.length | 0;
      return length === 0 ? "" : arguments.length === 0 ? utf8Slice2(this, 0, length) : slowToString2.apply(this, arguments);
    };
    Buffer3.prototype.equals = function(b) {
      if (!internalIsBuffer2(b))
        throw new TypeError("Argument must be a Buffer");
      return this === b ? !0 : Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function() {
      var str = "", max = INSPECT_MAX_BYTES;
      return this.length > 0 && (str = this.toString("hex", 0, max).match(/.{2}/g).join(" "), this.length > max && (str += " ... ")), "<Buffer " + str + ">";
    };
    Buffer3.prototype.compare = function(target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer2(target))
        throw new TypeError("Argument must be a Buffer");
      if (start === void 0 && (start = 0), end === void 0 && (end = target ? target.length : 0), thisStart === void 0 && (thisStart = 0), thisEnd === void 0 && (thisEnd = this.length), start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length)
        throw new RangeError("out of range index");
      if (thisStart >= thisEnd && start >= end)
        return 0;
      if (thisStart >= thisEnd)
        return -1;
      if (start >= end)
        return 1;
      if (start >>>= 0, end >>>= 0, thisStart >>>= 0, thisEnd >>>= 0, this === target)
        return 0;
      for (var x = thisEnd - thisStart, y = end - start, len = Math.min(x, y), thisCopy = this.slice(thisStart, thisEnd), targetCopy = target.slice(start, end), i = 0; i < len; ++i)
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i], y = targetCopy[i];
          break;
        }
      return x < y ? -1 : y < x ? 1 : 0;
    };
    Buffer3.prototype.includes = function(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function(val, byteOffset, encoding) {
      return bidirectionalIndexOf2(this, val, byteOffset, encoding, !0);
    };
    Buffer3.prototype.lastIndexOf = function(val, byteOffset, encoding) {
      return bidirectionalIndexOf2(this, val, byteOffset, encoding, !1);
    };
    Buffer3.prototype.write = function(string, offset, length, encoding) {
      if (offset === void 0)
        encoding = "utf8", length = this.length, offset = 0;
      else if (length === void 0 && typeof offset == "string")
        encoding = offset, length = this.length, offset = 0;
      else if (isFinite(offset))
        offset = offset | 0, isFinite(length) ? (length = length | 0, encoding === void 0 && (encoding = "utf8")) : (encoding = length, length = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      var remaining = this.length - offset;
      if ((length === void 0 || length > remaining) && (length = remaining), string.length > 0 && (length < 0 || offset < 0) || offset > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      encoding || (encoding = "utf8");
      for (var loweredCase = !1; ; )
        switch (encoding) {
          case "hex":
            return hexWrite2(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write2(this, string, offset, length);
          case "ascii":
            return asciiWrite2(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write2(this, string, offset, length);
          case "base64":
            return base64Write2(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write2(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
        }
    };
    Buffer3.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    MAX_ARGUMENTS_LENGTH2 = 4096;
    Buffer3.prototype.slice = function(start, end) {
      var len = this.length;
      start = ~~start, end = end === void 0 ? len : ~~end, start < 0 ? (start += len, start < 0 && (start = 0)) : start > len && (start = len), end < 0 ? (end += len, end < 0 && (end = 0)) : end > len && (end = len), end < start && (end = start);
      var newBuf;
      if (Buffer3.TYPED_ARRAY_SUPPORT)
        newBuf = this.subarray(start, end), newBuf.__proto__ = Buffer3.prototype;
      else {
        var sliceLen = end - start;
        newBuf = new Buffer3(sliceLen, void 0);
        for (var i = 0; i < sliceLen; ++i)
          newBuf[i] = this[i + start];
      }
      return newBuf;
    };
    Buffer3.prototype.readUIntLE = function(offset, byteLength3, noAssert) {
      offset = offset | 0, byteLength3 = byteLength3 | 0, noAssert || checkOffset2(offset, byteLength3, this.length);
      for (var val = this[offset], mul = 1, i = 0; ++i < byteLength3 && (mul *= 256); )
        val += this[offset + i] * mul;
      return val;
    };
    Buffer3.prototype.readUIntBE = function(offset, byteLength3, noAssert) {
      offset = offset | 0, byteLength3 = byteLength3 | 0, noAssert || checkOffset2(offset, byteLength3, this.length);
      for (var val = this[offset + --byteLength3], mul = 1; byteLength3 > 0 && (mul *= 256); )
        val += this[offset + --byteLength3] * mul;
      return val;
    };
    Buffer3.prototype.readUInt8 = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 1, this.length), this[offset];
    };
    Buffer3.prototype.readUInt16LE = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 2, this.length), this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUInt16BE = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 2, this.length), this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUInt32LE = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 4, this.length), (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUInt32BE = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 4, this.length), this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readIntLE = function(offset, byteLength3, noAssert) {
      offset = offset | 0, byteLength3 = byteLength3 | 0, noAssert || checkOffset2(offset, byteLength3, this.length);
      for (var val = this[offset], mul = 1, i = 0; ++i < byteLength3 && (mul *= 256); )
        val += this[offset + i] * mul;
      return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength3)), val;
    };
    Buffer3.prototype.readIntBE = function(offset, byteLength3, noAssert) {
      offset = offset | 0, byteLength3 = byteLength3 | 0, noAssert || checkOffset2(offset, byteLength3, this.length);
      for (var i = byteLength3, mul = 1, val = this[offset + --i]; i > 0 && (mul *= 256); )
        val += this[offset + --i] * mul;
      return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength3)), val;
    };
    Buffer3.prototype.readInt8 = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 1, this.length), this[offset] & 128 ? (255 - this[offset] + 1) * -1 : this[offset];
    };
    Buffer3.prototype.readInt16LE = function(offset, noAssert) {
      noAssert || checkOffset2(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function(offset, noAssert) {
      noAssert || checkOffset2(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 4, this.length), this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 4, this.length), this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readFloatLE = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 4, this.length), read(this, offset, !0, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 4, this.length), read(this, offset, !1, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 8, this.length), read(this, offset, !0, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function(offset, noAssert) {
      return noAssert || checkOffset2(offset, 8, this.length), read(this, offset, !1, 52, 8);
    };
    Buffer3.prototype.writeUIntLE = function(value, offset, byteLength3, noAssert) {
      if (value = +value, offset = offset | 0, byteLength3 = byteLength3 | 0, !noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt2(this, value, offset, byteLength3, maxBytes, 0);
      }
      var mul = 1, i = 0;
      for (this[offset] = value & 255; ++i < byteLength3 && (mul *= 256); )
        this[offset + i] = value / mul & 255;
      return offset + byteLength3;
    };
    Buffer3.prototype.writeUIntBE = function(value, offset, byteLength3, noAssert) {
      if (value = +value, offset = offset | 0, byteLength3 = byteLength3 | 0, !noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt2(this, value, offset, byteLength3, maxBytes, 0);
      }
      var i = byteLength3 - 1, mul = 1;
      for (this[offset + i] = value & 255; --i >= 0 && (mul *= 256); )
        this[offset + i] = value / mul & 255;
      return offset + byteLength3;
    };
    Buffer3.prototype.writeUInt8 = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt2(this, value, offset, 1, 255, 0), Buffer3.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), this[offset] = value & 255, offset + 1;
    };
    Buffer3.prototype.writeUInt16LE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt2(this, value, offset, 2, 65535, 0), Buffer3.TYPED_ARRAY_SUPPORT ? (this[offset] = value & 255, this[offset + 1] = value >>> 8) : objectWriteUInt162(this, value, offset, !0), offset + 2;
    };
    Buffer3.prototype.writeUInt16BE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt2(this, value, offset, 2, 65535, 0), Buffer3.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = value & 255) : objectWriteUInt162(this, value, offset, !1), offset + 2;
    };
    Buffer3.prototype.writeUInt32LE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt2(this, value, offset, 4, 4294967295, 0), Buffer3.TYPED_ARRAY_SUPPORT ? (this[offset + 3] = value >>> 24, this[offset + 2] = value >>> 16, this[offset + 1] = value >>> 8, this[offset] = value & 255) : objectWriteUInt322(this, value, offset, !0), offset + 4;
    };
    Buffer3.prototype.writeUInt32BE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt2(this, value, offset, 4, 4294967295, 0), Buffer3.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = value & 255) : objectWriteUInt322(this, value, offset, !1), offset + 4;
    };
    Buffer3.prototype.writeIntLE = function(value, offset, byteLength3, noAssert) {
      if (value = +value, offset = offset | 0, !noAssert) {
        var limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt2(this, value, offset, byteLength3, limit - 1, -limit);
      }
      var i = 0, mul = 1, sub = 0;
      for (this[offset] = value & 255; ++i < byteLength3 && (mul *= 256); )
        value < 0 && sub === 0 && this[offset + i - 1] !== 0 && (sub = 1), this[offset + i] = (value / mul >> 0) - sub & 255;
      return offset + byteLength3;
    };
    Buffer3.prototype.writeIntBE = function(value, offset, byteLength3, noAssert) {
      if (value = +value, offset = offset | 0, !noAssert) {
        var limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt2(this, value, offset, byteLength3, limit - 1, -limit);
      }
      var i = byteLength3 - 1, mul = 1, sub = 0;
      for (this[offset + i] = value & 255; --i >= 0 && (mul *= 256); )
        value < 0 && sub === 0 && this[offset + i + 1] !== 0 && (sub = 1), this[offset + i] = (value / mul >> 0) - sub & 255;
      return offset + byteLength3;
    };
    Buffer3.prototype.writeInt8 = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt2(this, value, offset, 1, 127, -128), Buffer3.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), value < 0 && (value = 255 + value + 1), this[offset] = value & 255, offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt2(this, value, offset, 2, 32767, -32768), Buffer3.TYPED_ARRAY_SUPPORT ? (this[offset] = value & 255, this[offset + 1] = value >>> 8) : objectWriteUInt162(this, value, offset, !0), offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt2(this, value, offset, 2, 32767, -32768), Buffer3.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = value & 255) : objectWriteUInt162(this, value, offset, !1), offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt2(this, value, offset, 4, 2147483647, -2147483648), Buffer3.TYPED_ARRAY_SUPPORT ? (this[offset] = value & 255, this[offset + 1] = value >>> 8, this[offset + 2] = value >>> 16, this[offset + 3] = value >>> 24) : objectWriteUInt322(this, value, offset, !0), offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt2(this, value, offset, 4, 2147483647, -2147483648), value < 0 && (value = 4294967295 + value + 1), Buffer3.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = value & 255) : objectWriteUInt322(this, value, offset, !1), offset + 4;
    };
    Buffer3.prototype.writeFloatLE = function(value, offset, noAssert) {
      return writeFloat2(this, value, offset, !0, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function(value, offset, noAssert) {
      return writeFloat2(this, value, offset, !1, noAssert);
    };
    Buffer3.prototype.writeDoubleLE = function(value, offset, noAssert) {
      return writeDouble2(this, value, offset, !0, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function(value, offset, noAssert) {
      return writeDouble2(this, value, offset, !1, noAssert);
    };
    Buffer3.prototype.copy = function(target, targetStart, start, end) {
      if (start || (start = 0), !end && end !== 0 && (end = this.length), targetStart >= target.length && (targetStart = target.length), targetStart || (targetStart = 0), end > 0 && end < start && (end = start), end === start || target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0)
        throw new RangeError("targetStart out of bounds");
      if (start < 0 || start >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      end > this.length && (end = this.length), target.length - targetStart < end - start && (end = target.length - targetStart + start);
      var len = end - start, i;
      if (this === target && start < targetStart && targetStart < end)
        for (i = len - 1; i >= 0; --i)
          target[i + targetStart] = this[i + start];
      else if (len < 1e3 || !Buffer3.TYPED_ARRAY_SUPPORT)
        for (i = 0; i < len; ++i)
          target[i + targetStart] = this[i + start];
      else
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      return len;
    };
    Buffer3.prototype.fill = function(val, start, end, encoding) {
      if (typeof val == "string") {
        if (typeof start == "string" ? (encoding = start, start = 0, end = this.length) : typeof end == "string" && (encoding = end, end = this.length), val.length === 1) {
          var code = val.charCodeAt(0);
          code < 256 && (val = code);
        }
        if (encoding !== void 0 && typeof encoding != "string")
          throw new TypeError("encoding must be a string");
        if (typeof encoding == "string" && !Buffer3.isEncoding(encoding))
          throw new TypeError("Unknown encoding: " + encoding);
      } else
        typeof val == "number" && (val = val & 255);
      if (start < 0 || this.length < start || this.length < end)
        throw new RangeError("Out of range index");
      if (end <= start)
        return this;
      start = start >>> 0, end = end === void 0 ? this.length : end >>> 0, val || (val = 0);
      var i;
      if (typeof val == "number")
        for (i = start; i < end; ++i)
          this[i] = val;
      else {
        var bytes = internalIsBuffer2(val) ? val : utf8ToBytes2(new Buffer3(val, encoding).toString()), len = bytes.length;
        for (i = 0; i < end - start; ++i)
          this[i + start] = bytes[i % len];
      }
      return this;
    };
    INVALID_BASE64_RE2 = /[^+\/0-9A-Za-z-_]/g;
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/buffer-list.js
function BufferList() {
  this.head = null, this.tail = null, this.length = 0;
}
var buffer_list_default, init_buffer_list = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/buffer-list.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_buffer2();
    buffer_list_default = BufferList;
    BufferList.prototype.push = function(v) {
      var entry2 = { data: v, next: null };
      this.length > 0 ? this.tail.next = entry2 : this.head = entry2, this.tail = entry2, ++this.length;
    };
    BufferList.prototype.unshift = function(v) {
      var entry2 = { data: v, next: this.head };
      this.length === 0 && (this.tail = entry2), this.head = entry2, ++this.length;
    };
    BufferList.prototype.shift = function() {
      if (this.length !== 0) {
        var ret = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, ret;
      }
    };
    BufferList.prototype.clear = function() {
      this.head = this.tail = null, this.length = 0;
    };
    BufferList.prototype.join = function(s) {
      if (this.length === 0)
        return "";
      for (var p = this.head, ret = "" + p.data; p = p.next; )
        ret += s + p.data;
      return ret;
    };
    BufferList.prototype.concat = function(n) {
      if (this.length === 0)
        return Buffer3.alloc(0);
      if (this.length === 1)
        return this.head.data;
      for (var ret = Buffer3.allocUnsafe(n >>> 0), p = this.head, i = 0; p; )
        p.data.copy(ret, i), i += p.data.length, p = p.next;
      return ret;
    };
  }
});

// node-modules-polyfills:string_decoder
function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding))
    throw new Error("Unknown encoding: " + encoding);
}
function StringDecoder(encoding) {
  switch (this.encoding = (encoding || "utf8").toLowerCase().replace(/[-_]/, ""), assertEncoding(encoding), this.encoding) {
    case "utf8":
      this.surrogateSize = 3;
      break;
    case "ucs2":
    case "utf16le":
      this.surrogateSize = 2, this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case "base64":
      this.surrogateSize = 3, this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }
  this.charBuffer = new Buffer3(6), this.charReceived = 0, this.charLength = 0;
}
function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}
function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2, this.charLength = this.charReceived ? 2 : 0;
}
function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3, this.charLength = this.charReceived ? 3 : 0;
}
var isBufferEncoding, init_string_decoder = __esm({
  "node-modules-polyfills:string_decoder"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_buffer2();
    isBufferEncoding = Buffer3.isEncoding || function(encoding) {
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return !0;
        default:
          return !1;
      }
    };
    StringDecoder.prototype.write = function(buffer) {
      for (var charStr = ""; this.charLength; ) {
        var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length;
        if (buffer.copy(this.charBuffer, this.charReceived, 0, available), this.charReceived += available, this.charReceived < this.charLength)
          return "";
        buffer = buffer.slice(available, buffer.length), charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var charCode = charStr.charCodeAt(charStr.length - 1);
        if (charCode >= 55296 && charCode <= 56319) {
          this.charLength += this.surrogateSize, charStr = "";
          continue;
        }
        if (this.charReceived = this.charLength = 0, buffer.length === 0)
          return charStr;
        break;
      }
      this.detectIncompleteChar(buffer);
      var end = buffer.length;
      this.charLength && (buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end), end -= this.charReceived), charStr += buffer.toString(this.encoding, 0, end);
      var end = charStr.length - 1, charCode = charStr.charCodeAt(end);
      if (charCode >= 55296 && charCode <= 56319) {
        var size = this.surrogateSize;
        return this.charLength += size, this.charReceived += size, this.charBuffer.copy(this.charBuffer, size, 0, size), buffer.copy(this.charBuffer, 0, 0, size), charStr.substring(0, end);
      }
      return charStr;
    };
    StringDecoder.prototype.detectIncompleteChar = function(buffer) {
      for (var i = buffer.length >= 3 ? 3 : buffer.length; i > 0; i--) {
        var c = buffer[buffer.length - i];
        if (i == 1 && c >> 5 == 6) {
          this.charLength = 2;
          break;
        }
        if (i <= 2 && c >> 4 == 14) {
          this.charLength = 3;
          break;
        }
        if (i <= 3 && c >> 3 == 30) {
          this.charLength = 4;
          break;
        }
      }
      this.charReceived = i;
    };
    StringDecoder.prototype.end = function(buffer) {
      var res = "";
      if (buffer && buffer.length && (res = this.write(buffer)), this.charReceived) {
        var cr = this.charReceived, buf = this.charBuffer, enc = this.encoding;
        res += buf.slice(0, cr).toString(enc);
      }
      return res;
    };
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/readable.js
function prependListener2(emitter, event, fn) {
  if (typeof emitter.prependListener == "function")
    return emitter.prependListener(event, fn);
  !emitter._events || !emitter._events[event] ? emitter.on(event, fn) : Array.isArray(emitter._events[event]) ? emitter._events[event].unshift(fn) : emitter._events[event] = [fn, emitter._events[event]];
}
function listenerCount2(emitter, type) {
  return emitter.listeners(type).length;
}
function ReadableState(options, stream) {
  options = options || {}, this.objectMode = !!options.objectMode, stream instanceof Duplex && (this.objectMode = this.objectMode || !!options.readableObjectMode);
  var hwm = options.highWaterMark, defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm, this.highWaterMark = ~~this.highWaterMark, this.buffer = new buffer_list_default(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = options.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, options.encoding && (this.decoder = new StringDecoder(options.encoding), this.encoding = options.encoding);
}
function Readable(options) {
  if (!(this instanceof Readable))
    return new Readable(options);
  this._readableState = new ReadableState(options, this), this.readable = !0, options && typeof options.read == "function" && (this._read = options.read), events_default.call(this);
}
function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er)
    stream.emit("error", er);
  else if (chunk === null)
    state.reading = !1, onEofChunk(stream, state);
  else if (state.objectMode || chunk && chunk.length > 0)
    if (state.ended && !addToFront) {
      var e = new Error("stream.push() after EOF");
      stream.emit("error", e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error("stream.unshift() after end event");
      stream.emit("error", _e);
    } else {
      var skipAdd;
      state.decoder && !addToFront && !encoding && (chunk = state.decoder.write(chunk), skipAdd = !state.objectMode && chunk.length === 0), addToFront || (state.reading = !1), skipAdd || (state.flowing && state.length === 0 && !state.sync ? (stream.emit("data", chunk), stream.read(0)) : (state.length += state.objectMode ? 1 : chunk.length, addToFront ? state.buffer.unshift(chunk) : state.buffer.push(chunk), state.needReadable && emitReadable(stream))), maybeReadMore(stream, state);
    }
  else
    addToFront || (state.reading = !1);
  return needMoreData(state);
}
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}
function computeNewHighWaterMark(n) {
  return n >= MAX_HWM ? n = MAX_HWM : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n;
}
function howMuchToRead(n, state) {
  return n <= 0 || state.length === 0 && state.ended ? 0 : state.objectMode ? 1 : n !== n ? state.flowing && state.length ? state.buffer.head.data.length : state.length : (n > state.highWaterMark && (state.highWaterMark = computeNewHighWaterMark(n)), n <= state.length ? n : state.ended ? state.length : (state.needReadable = !0, 0));
}
function chunkInvalid(state, chunk) {
  var er = null;
  return !Buffer2.isBuffer(chunk) && typeof chunk != "string" && chunk !== null && chunk !== void 0 && !state.objectMode && (er = new TypeError("Invalid non-string/buffer chunk")), er;
}
function onEofChunk(stream, state) {
  if (!state.ended) {
    if (state.decoder) {
      var chunk = state.decoder.end();
      chunk && chunk.length && (state.buffer.push(chunk), state.length += state.objectMode ? 1 : chunk.length);
    }
    state.ended = !0, emitReadable(stream);
  }
}
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = !1, state.emittedReadable || (debug("emitReadable", state.flowing), state.emittedReadable = !0, state.sync ? nextTick2(emitReadable_, stream) : emitReadable_(stream));
}
function emitReadable_(stream) {
  debug("emit readable"), stream.emit("readable"), flow(stream);
}
function maybeReadMore(stream, state) {
  state.readingMore || (state.readingMore = !0, nextTick2(maybeReadMore_, stream, state));
}
function maybeReadMore_(stream, state) {
  for (var len = state.length; !state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark && (debug("maybeReadMore read 0"), stream.read(0), len !== state.length); )
    len = state.length;
  state.readingMore = !1;
}
function pipeOnDrain(src) {
  return function() {
    var state = src._readableState;
    debug("pipeOnDrain", state.awaitDrain), state.awaitDrain && state.awaitDrain--, state.awaitDrain === 0 && src.listeners("data").length && (state.flowing = !0, flow(src));
  };
}
function nReadingNextTick(self2) {
  debug("readable nexttick read 0"), self2.read(0);
}
function resume(stream, state) {
  state.resumeScheduled || (state.resumeScheduled = !0, nextTick2(resume_, stream, state));
}
function resume_(stream, state) {
  state.reading || (debug("resume read 0"), stream.read(0)), state.resumeScheduled = !1, state.awaitDrain = 0, stream.emit("resume"), flow(stream), state.flowing && !state.reading && stream.read(0);
}
function flow(stream) {
  var state = stream._readableState;
  for (debug("flow", state.flowing); state.flowing && stream.read() !== null; )
    ;
}
function fromList(n, state) {
  if (state.length === 0)
    return null;
  var ret;
  return state.objectMode ? ret = state.buffer.shift() : !n || n >= state.length ? (state.decoder ? ret = state.buffer.join("") : state.buffer.length === 1 ? ret = state.buffer.head.data : ret = state.buffer.concat(state.length), state.buffer.clear()) : ret = fromListPartial(n, state.buffer, state.decoder), ret;
}
function fromListPartial(n, list, hasStrings) {
  var ret;
  return n < list.head.data.length ? (ret = list.head.data.slice(0, n), list.head.data = list.head.data.slice(n)) : n === list.head.data.length ? ret = list.shift() : ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list), ret;
}
function copyFromBufferString(n, list) {
  var p = list.head, c = 1, ret = p.data;
  for (n -= ret.length; p = p.next; ) {
    var str = p.data, nb = n > str.length ? str.length : n;
    if (nb === str.length ? ret += str : ret += str.slice(0, n), n -= nb, n === 0) {
      nb === str.length ? (++c, p.next ? list.head = p.next : list.head = list.tail = null) : (list.head = p, p.data = str.slice(nb));
      break;
    }
    ++c;
  }
  return list.length -= c, ret;
}
function copyFromBuffer(n, list) {
  var ret = Buffer2.allocUnsafe(n), p = list.head, c = 1;
  for (p.data.copy(ret), n -= p.data.length; p = p.next; ) {
    var buf = p.data, nb = n > buf.length ? buf.length : n;
    if (buf.copy(ret, ret.length - n, 0, nb), n -= nb, n === 0) {
      nb === buf.length ? (++c, p.next ? list.head = p.next : list.head = list.tail = null) : (list.head = p, p.data = buf.slice(nb));
      break;
    }
    ++c;
  }
  return list.length -= c, ret;
}
function endReadable(stream) {
  var state = stream._readableState;
  if (state.length > 0)
    throw new Error('"endReadable()" called on non-empty stream');
  state.endEmitted || (state.ended = !0, nextTick2(endReadableNT, state, stream));
}
function endReadableNT(state, stream) {
  !state.endEmitted && state.length === 0 && (state.endEmitted = !0, stream.readable = !1, stream.emit("end"));
}
function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++)
    f(xs[i], i);
}
function indexOf3(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++)
    if (xs[i] === x)
      return i;
  return -1;
}
var debug, MAX_HWM, init_readable = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/readable.js"() {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    init_events();
    init_util();
    init_buffer_list();
    init_string_decoder();
    init_duplex();
    init_process();
    Readable.ReadableState = ReadableState;
    debug = debuglog("stream");
    inherits_default(Readable, events_default);
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      return !state.objectMode && typeof chunk == "string" && (encoding = encoding || state.defaultEncoding, encoding !== state.encoding && (chunk = Buffer2.from(chunk, encoding), encoding = "")), readableAddChunk(this, state, chunk, encoding, !1);
    };
    Readable.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, "", !0);
    };
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === !1;
    };
    Readable.prototype.setEncoding = function(enc) {
      return this._readableState.decoder = new StringDecoder(enc), this._readableState.encoding = enc, this;
    };
    MAX_HWM = 8388608;
    Readable.prototype.read = function(n) {
      debug("read", n), n = parseInt(n, 10);
      var state = this._readableState, nOrig = n;
      if (n !== 0 && (state.emittedReadable = !1), n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended))
        return debug("read: emitReadable", state.length, state.ended), state.length === 0 && state.ended ? endReadable(this) : emitReadable(this), null;
      if (n = howMuchToRead(n, state), n === 0 && state.ended)
        return state.length === 0 && endReadable(this), null;
      var doRead = state.needReadable;
      debug("need readable", doRead), (state.length === 0 || state.length - n < state.highWaterMark) && (doRead = !0, debug("length less than watermark", doRead)), state.ended || state.reading ? (doRead = !1, debug("reading or ended", doRead)) : doRead && (debug("do read"), state.reading = !0, state.sync = !0, state.length === 0 && (state.needReadable = !0), this._read(state.highWaterMark), state.sync = !1, state.reading || (n = howMuchToRead(nOrig, state)));
      var ret;
      return n > 0 ? ret = fromList(n, state) : ret = null, ret === null ? (state.needReadable = !0, n = 0) : state.length -= n, state.length === 0 && (state.ended || (state.needReadable = !0), nOrig !== n && state.ended && endReadable(this)), ret !== null && this.emit("data", ret), ret;
    };
    Readable.prototype._read = function(n) {
      this.emit("error", new Error("not implemented"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this, state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1, debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = !pipeOpts || pipeOpts.end !== !1, endFn = doEnd ? onend2 : cleanup;
      state.endEmitted ? nextTick2(endFn) : src.once("end", endFn), dest.on("unpipe", onunpipe);
      function onunpipe(readable) {
        debug("onunpipe"), readable === src && cleanup();
      }
      function onend2() {
        debug("onend"), dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = !1;
      function cleanup() {
        debug("cleanup"), dest.removeListener("close", onclose), dest.removeListener("finish", onfinish), dest.removeListener("drain", ondrain), dest.removeListener("error", onerror), dest.removeListener("unpipe", onunpipe), src.removeListener("end", onend2), src.removeListener("end", cleanup), src.removeListener("data", ondata), cleanedUp = !0, state.awaitDrain && (!dest._writableState || dest._writableState.needDrain) && ondrain();
      }
      var increasedAwaitDrain = !1;
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata"), increasedAwaitDrain = !1;
        var ret = dest.write(chunk);
        ret === !1 && !increasedAwaitDrain && ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf3(state.pipes, dest) !== -1) && !cleanedUp && (debug("false write response, pause", src._readableState.awaitDrain), src._readableState.awaitDrain++, increasedAwaitDrain = !0), src.pause());
      }
      function onerror(er) {
        debug("onerror", er), unpipe(), dest.removeListener("error", onerror), listenerCount2(dest, "error") === 0 && dest.emit("error", er);
      }
      prependListener2(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish), unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish"), dest.removeListener("close", onclose), unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe"), src.unpipe(dest);
      }
      return dest.emit("pipe", src), state.flowing || (debug("pipe resume"), src.resume()), dest;
    };
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1)
        return dest && dest !== state.pipes ? this : (dest || (dest = state.pipes), state.pipes = null, state.pipesCount = 0, state.flowing = !1, dest && dest.emit("unpipe", this), this);
      if (!dest) {
        var dests = state.pipes, len = state.pipesCount;
        state.pipes = null, state.pipesCount = 0, state.flowing = !1;
        for (var _i = 0; _i < len; _i++)
          dests[_i].emit("unpipe", this);
        return this;
      }
      var i = indexOf3(state.pipes, dest);
      return i === -1 ? this : (state.pipes.splice(i, 1), state.pipesCount -= 1, state.pipesCount === 1 && (state.pipes = state.pipes[0]), dest.emit("unpipe", this), this);
    };
    Readable.prototype.on = function(ev, fn) {
      var res = events_default.prototype.on.call(this, ev, fn);
      if (ev === "data")
        this._readableState.flowing !== !1 && this.resume();
      else if (ev === "readable") {
        var state = this._readableState;
        !state.endEmitted && !state.readableListening && (state.readableListening = state.needReadable = !0, state.emittedReadable = !1, state.reading ? state.length && emitReadable(this, state) : nextTick2(nReadingNextTick, this));
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.resume = function() {
      var state = this._readableState;
      return state.flowing || (debug("resume"), state.flowing = !0, resume(this, state)), this;
    };
    Readable.prototype.pause = function() {
      return debug("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (debug("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
    };
    Readable.prototype.wrap = function(stream) {
      var state = this._readableState, paused = !1, self2 = this;
      stream.on("end", function() {
        if (debug("wrapped end"), state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          chunk && chunk.length && self2.push(chunk);
        }
        self2.push(null);
      }), stream.on("data", function(chunk) {
        if (debug("wrapped data"), state.decoder && (chunk = state.decoder.write(chunk)), !(state.objectMode && chunk == null) && !(!state.objectMode && (!chunk || !chunk.length))) {
          var ret = self2.push(chunk);
          ret || (paused = !0, stream.pause());
        }
      });
      for (var i in stream)
        this[i] === void 0 && typeof stream[i] == "function" && (this[i] = function(method) {
          return function() {
            return stream[method].apply(stream, arguments);
          };
        }(i));
      var events = ["error", "close", "destroy", "pause", "resume"];
      return forEach(events, function(ev) {
        stream.on(ev, self2.emit.bind(self2, ev));
      }), self2._read = function(n) {
        debug("wrapped _read", n), paused && (paused = !1, stream.resume());
      }, self2;
    };
    Readable._fromList = fromList;
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/writable.js
function nop() {
}
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk, this.encoding = encoding, this.callback = cb, this.next = null;
}
function WritableState(options, stream) {
  Object.defineProperty(this, "buffer", {
    get: deprecate(function() {
      return this.getBuffer();
    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
  }), options = options || {}, this.objectMode = !!options.objectMode, stream instanceof Duplex && (this.objectMode = this.objectMode || !!options.writableObjectMode);
  var hwm = options.highWaterMark, defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
  var noDecode = options.decodeStrings === !1;
  this.decodeStrings = !noDecode, this.defaultEncoding = options.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(er) {
    onwrite(stream, er);
  }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new CorkedRequest(this);
}
function Writable(options) {
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);
  this._writableState = new WritableState(options, this), this.writable = !0, options && (typeof options.write == "function" && (this._write = options.write), typeof options.writev == "function" && (this._writev = options.writev)), EventEmitter.call(this);
}
function writeAfterEnd(stream, cb) {
  var er = new Error("write after end");
  stream.emit("error", er), nextTick2(cb, er);
}
function validChunk(stream, state, chunk, cb) {
  var valid = !0, er = !1;
  return chunk === null ? er = new TypeError("May not write null values to stream") : !Buffer3.isBuffer(chunk) && typeof chunk != "string" && chunk !== void 0 && !state.objectMode && (er = new TypeError("Invalid non-string/buffer chunk")), er && (stream.emit("error", er), nextTick2(cb, er), valid = !1), valid;
}
function decodeChunk(state, chunk, encoding) {
  return !state.objectMode && state.decodeStrings !== !1 && typeof chunk == "string" && (chunk = Buffer3.from(chunk, encoding)), chunk;
}
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding), Buffer3.isBuffer(chunk) && (encoding = "buffer");
  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark;
  if (ret || (state.needDrain = !0), state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb), last ? last.next = state.lastBufferedRequest : state.bufferedRequest = state.lastBufferedRequest, state.bufferedRequestCount += 1;
  } else
    doWrite(stream, state, !1, len, chunk, encoding, cb);
  return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len, state.writecb = cb, state.writing = !0, state.sync = !0, writev ? stream._writev(chunk, state.onwrite) : stream._write(chunk, encoding, state.onwrite), state.sync = !1;
}
function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb, sync ? nextTick2(cb, er) : cb(er), stream._writableState.errorEmitted = !0, stream.emit("error", er);
}
function onwriteStateUpdate(state) {
  state.writing = !1, state.writecb = null, state.length -= state.writelen, state.writelen = 0;
}
function onwrite(stream, er) {
  var state = stream._writableState, sync = state.sync, cb = state.writecb;
  if (onwriteStateUpdate(state), er)
    onwriteError(stream, state, sync, er, cb);
  else {
    var finished = needFinish(state);
    !finished && !state.corked && !state.bufferProcessing && state.bufferedRequest && clearBuffer(stream, state), sync ? nextTick2(afterWrite, stream, state, finished, cb) : afterWrite(stream, state, finished, cb);
  }
}
function afterWrite(stream, state, finished, cb) {
  finished || onwriteDrain(stream, state), state.pendingcb--, cb(), finishMaybe(stream, state);
}
function onwriteDrain(stream, state) {
  state.length === 0 && state.needDrain && (state.needDrain = !1, stream.emit("drain"));
}
function clearBuffer(stream, state) {
  state.bufferProcessing = !0;
  var entry2 = state.bufferedRequest;
  if (stream._writev && entry2 && entry2.next) {
    var l = state.bufferedRequestCount, buffer = new Array(l), holder = state.corkedRequestsFree;
    holder.entry = entry2;
    for (var count = 0; entry2; )
      buffer[count] = entry2, entry2 = entry2.next, count += 1;
    doWrite(stream, state, !0, state.length, buffer, "", holder.finish), state.pendingcb++, state.lastBufferedRequest = null, holder.next ? (state.corkedRequestsFree = holder.next, holder.next = null) : state.corkedRequestsFree = new CorkedRequest(state);
  } else {
    for (; entry2; ) {
      var chunk = entry2.chunk, encoding = entry2.encoding, cb = entry2.callback, len = state.objectMode ? 1 : chunk.length;
      if (doWrite(stream, state, !1, len, chunk, encoding, cb), entry2 = entry2.next, state.writing)
        break;
    }
    entry2 === null && (state.lastBufferedRequest = null);
  }
  state.bufferedRequestCount = 0, state.bufferedRequest = entry2, state.bufferProcessing = !1;
}
function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function prefinish(stream, state) {
  state.prefinished || (state.prefinished = !0, stream.emit("prefinish"));
}
function finishMaybe(stream, state) {
  var need = needFinish(state);
  return need && (state.pendingcb === 0 ? (prefinish(stream, state), state.finished = !0, stream.emit("finish")) : prefinish(stream, state)), need;
}
function endWritable(stream, state, cb) {
  state.ending = !0, finishMaybe(stream, state), cb && (state.finished ? nextTick2(cb) : stream.once("finish", cb)), state.ended = !0, stream.writable = !1;
}
function CorkedRequest(state) {
  var _this = this;
  this.next = null, this.entry = null, this.finish = function(err) {
    var entry2 = _this.entry;
    for (_this.entry = null; entry2; ) {
      var cb = entry2.callback;
      state.pendingcb--, cb(err), entry2 = entry2.next;
    }
    state.corkedRequestsFree ? state.corkedRequestsFree.next = _this : state.corkedRequestsFree = _this;
  };
}
var init_writable = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/writable.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_util();
    init_buffer2();
    init_events();
    init_duplex();
    init_process();
    Writable.WritableState = WritableState;
    inherits_default(Writable, EventEmitter);
    WritableState.prototype.getBuffer = function() {
      for (var current = this.bufferedRequest, out = []; current; )
        out.push(current), current = current.next;
      return out;
    };
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState, ret = !1;
      return typeof encoding == "function" && (cb = encoding, encoding = null), Buffer3.isBuffer(chunk) ? encoding = "buffer" : encoding || (encoding = state.defaultEncoding), typeof cb != "function" && (cb = nop), state.ended ? writeAfterEnd(this, cb) : validChunk(this, state, chunk, cb) && (state.pendingcb++, ret = writeOrBuffer(this, state, chunk, encoding, cb)), ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      state.corked && (state.corked--, !state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest && clearBuffer(this, state));
    };
    Writable.prototype.setDefaultEncoding = function(encoding) {
      if (typeof encoding == "string" && (encoding = encoding.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new TypeError("Unknown encoding: " + encoding);
      return this._writableState.defaultEncoding = encoding, this;
    };
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("not implemented"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      typeof chunk == "function" ? (cb = chunk, chunk = null, encoding = null) : typeof encoding == "function" && (cb = encoding, encoding = null), chunk != null && this.write(chunk, encoding), state.corked && (state.corked = 1, this.uncork()), !state.ending && !state.finished && endWritable(this, state, cb);
    };
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js
function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);
  Readable.call(this, options), Writable.call(this, options), options && options.readable === !1 && (this.readable = !1), options && options.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, options && options.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", onend);
}
function onend() {
  this.allowHalfOpen || this._writableState.ended || nextTick2(onEndNT, this);
}
function onEndNT(self2) {
  self2.end();
}
var keys, method, v, init_duplex = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/duplex.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_util();
    init_process();
    init_readable();
    init_writable();
    inherits_default(Duplex, Readable);
    keys = Object.keys(Writable.prototype);
    for (v = 0; v < keys.length; v++)
      method = keys[v], Duplex.prototype[method] || (Duplex.prototype[method] = Writable.prototype[method]);
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/transform.js
function TransformState(stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null;
}
function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = !1;
  var cb = ts.writecb;
  if (!cb)
    return stream.emit("error", new Error("no writecb in Transform class"));
  ts.writechunk = null, ts.writecb = null, data != null && stream.push(data), cb(er);
  var rs = stream._readableState;
  rs.reading = !1, (rs.needReadable || rs.length < rs.highWaterMark) && stream._read(rs.highWaterMark);
}
function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);
  Duplex.call(this, options), this._transformState = new TransformState(this);
  var stream = this;
  this._readableState.needReadable = !0, this._readableState.sync = !1, options && (typeof options.transform == "function" && (this._transform = options.transform), typeof options.flush == "function" && (this._flush = options.flush)), this.once("prefinish", function() {
    typeof this._flush == "function" ? this._flush(function(er) {
      done(stream, er);
    }) : done(stream);
  });
}
function done(stream, er) {
  if (er)
    return stream.emit("error", er);
  var ws = stream._writableState, ts = stream._transformState;
  if (ws.length)
    throw new Error("Calling transform done when ws.length != 0");
  if (ts.transforming)
    throw new Error("Calling transform done when still transforming");
  return stream.push(null);
}
var init_transform = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/transform.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_duplex();
    init_util();
    inherits_default(Transform, Duplex);
    Transform.prototype.push = function(chunk, encoding) {
      return this._transformState.needTransform = !1, Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("Not implemented");
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      if (ts.writecb = cb, ts.writechunk = chunk, ts.writeencoding = encoding, !ts.transforming) {
        var rs = this._readableState;
        (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) && this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      ts.writechunk !== null && ts.writecb && !ts.transforming ? (ts.transforming = !0, this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform)) : ts.needTransform = !0;
    };
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough.js
function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);
  Transform.call(this, options);
}
var init_passthrough = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough.js"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_transform();
    init_util();
    inherits_default(PassThrough, Transform);
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node-modules-polyfills:stream
var stream_exports = {};
__export(stream_exports, {
  Duplex: () => Duplex,
  PassThrough: () => PassThrough,
  Readable: () => Readable,
  Stream: () => Stream,
  Transform: () => Transform,
  Writable: () => Writable,
  default: () => stream_default
});
function Stream() {
  events_default.call(this);
}
var stream_default, init_stream = __esm({
  "node-modules-polyfills:stream"() {
    init_virtual_process_polyfill();
    init_buffer();
    init_events();
    init_util();
    init_duplex();
    init_readable();
    init_writable();
    init_transform();
    init_passthrough();
    inherits_default(Stream, events_default);
    Stream.Readable = Readable;
    Stream.Writable = Writable;
    Stream.Duplex = Duplex;
    Stream.Transform = Transform;
    Stream.PassThrough = PassThrough;
    Stream.Stream = Stream;
    stream_default = Stream;
    Stream.prototype.pipe = function(dest, options) {
      var source = this;
      function ondata(chunk) {
        dest.writable && dest.write(chunk) === !1 && source.pause && source.pause();
      }
      source.on("data", ondata);
      function ondrain() {
        source.readable && source.resume && source.resume();
      }
      dest.on("drain", ondrain), !dest._isStdio && (!options || options.end !== !1) && (source.on("end", onend2), source.on("close", onclose));
      var didOnEnd = !1;
      function onend2() {
        didOnEnd || (didOnEnd = !0, dest.end());
      }
      function onclose() {
        didOnEnd || (didOnEnd = !0, typeof dest.destroy == "function" && dest.destroy());
      }
      function onerror(er) {
        if (cleanup(), events_default.listenerCount(this, "error") === 0)
          throw er;
      }
      source.on("error", onerror), dest.on("error", onerror);
      function cleanup() {
        source.removeListener("data", ondata), dest.removeListener("drain", ondrain), source.removeListener("end", onend2), source.removeListener("close", onclose), source.removeListener("error", onerror), dest.removeListener("error", onerror), source.removeListener("end", cleanup), source.removeListener("close", cleanup), dest.removeListener("close", cleanup);
      }
      return source.on("end", cleanup), source.on("close", cleanup), dest.on("close", cleanup), dest.emit("pipe", source), dest;
    };
  }
});

// node-modules-polyfills-commonjs:stream
var require_stream = __commonJS({
  "node-modules-polyfills-commonjs:stream"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var polyfill = (init_stream(), __toCommonJS(stream_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill)
        module.exports[k] = polyfill[k];
    } else
      polyfill && (module.exports = polyfill);
  }
});

// node_modules/react-dom/cjs/react-dom-server.node.development.js
var require_react_dom_server_node_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.node.development.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    (function() {
      "use strict";
      var React23 = require_react(), _assign = require_object_assign(), stream = require_stream(), ReactVersion = "17.0.2";
      function formatProdErrorMessage(code) {
        for (var url = "https://reactjs.org/docs/error-decoder.html?invariant=" + code, i2 = 1; i2 < arguments.length; i2++)
          url += "&args[]=" + encodeURIComponent(arguments[i2]);
        return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var ReactSharedInternals = React23.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function warn(format2) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
            args[_key - 1] = arguments[_key];
          printWarning("warn", format2, args);
        }
      }
      function error(format2) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
            args[_key2 - 1] = arguments[_key2];
          printWarning("error", format2, args);
        }
      }
      function printWarning(level, format2, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame, stack = ReactDebugCurrentFrame2.getStackAddendum();
          stack !== "" && (format2 += "%s", args = args.concat([stack]));
          var argsWithFormat = args.map(function(item) {
            return "" + item;
          });
          argsWithFormat.unshift("Warning: " + format2), Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var REACT_ELEMENT_TYPE = 60103, REACT_PORTAL_TYPE = 60106, REACT_FRAGMENT_TYPE = 60107, REACT_STRICT_MODE_TYPE = 60108, REACT_PROFILER_TYPE = 60114, REACT_PROVIDER_TYPE = 60109, REACT_CONTEXT_TYPE = 60110, REACT_FORWARD_REF_TYPE = 60112, REACT_SUSPENSE_TYPE = 60113, REACT_SUSPENSE_LIST_TYPE = 60120, REACT_MEMO_TYPE = 60115, REACT_LAZY_TYPE = 60116, REACT_BLOCK_TYPE = 60121, REACT_SERVER_BLOCK_TYPE = 60122, REACT_FUNDAMENTAL_TYPE = 60117, REACT_SCOPE_TYPE = 60119, REACT_OPAQUE_ID_TYPE = 60128, REACT_DEBUG_TRACING_MODE_TYPE = 60129, REACT_OFFSCREEN_TYPE = 60130, REACT_LEGACY_HIDDEN_TYPE = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element"), REACT_PORTAL_TYPE = symbolFor("react.portal"), REACT_FRAGMENT_TYPE = symbolFor("react.fragment"), REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode"), REACT_PROFILER_TYPE = symbolFor("react.profiler"), REACT_PROVIDER_TYPE = symbolFor("react.provider"), REACT_CONTEXT_TYPE = symbolFor("react.context"), REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref"), REACT_SUSPENSE_TYPE = symbolFor("react.suspense"), REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list"), REACT_MEMO_TYPE = symbolFor("react.memo"), REACT_LAZY_TYPE = symbolFor("react.lazy"), REACT_BLOCK_TYPE = symbolFor("react.block"), REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block"), REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental"), REACT_SCOPE_TYPE = symbolFor("react.scope"), REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id"), REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode"), REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen"), REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
      }
      function getWrappedName2(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentName(type) {
        if (type == null)
          return null;
        if (typeof type.tag == "number" && error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof type == "function")
          return type.displayName || type.name || null;
        if (typeof type == "string")
          return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName2(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
              return getComponentName(type._render);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init3 = lazyComponent._init;
              try {
                return getComponentName(init3(payload));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var enableSuspenseServerRenderer = !1, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = !0;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log, prevInfo = console.info, prevWarn = console.warn, prevError = console.error, prevGroup = console.group, prevGroupCollapsed = console.groupCollapsed, prevGroupEnd = console.groupEnd;
            var props = {
              configurable: !0,
              enumerable: !0,
              value: disabledLog,
              writable: !0
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          if (disabledDepth--, disabledDepth === 0) {
            var props = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: _assign({}, props, {
                value: prevLog
              }),
              info: _assign({}, props, {
                value: prevInfo
              }),
              warn: _assign({}, props, {
                value: prevWarn
              }),
              error: _assign({}, props, {
                value: prevError
              }),
              group: _assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: _assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: _assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          disabledDepth < 0 && error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher, prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          return `
` + prefix + name;
        }
      }
      var reentry = !1, componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap == "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry)
          return "";
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0)
            return frame;
        }
        var control;
        reentry = !0;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current, ReactCurrentDispatcher.current = null, disableLogs();
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            if (Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack == "string") {
            for (var sampleLines = sample.stack.split(`
`), controlLines = control.stack.split(`
`), s = sampleLines.length - 1, c = controlLines.length - 1; s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]; )
              c--;
            for (; s >= 1 && c >= 0; s--, c--)
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1)
                  do
                    if (s--, c--, c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = `
` + sampleLines[s].replace(" at new ", " at ");
                      return typeof fn == "function" && componentFrameCache.set(fn, _frame), _frame;
                    }
                  while (s >= 1 && c >= 0);
                break;
              }
          }
        } finally {
          reentry = !1, ReactCurrentDispatcher.current = previousDispatcher, reenableLogs(), Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "", syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        return typeof fn == "function" && componentFrameCache.set(fn, syntheticFrame), syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, !1);
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null)
          return "";
        if (typeof type == "function")
          return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type == "string")
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_BLOCK_TYPE:
              return describeFunctionComponentFrame(type._render);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init3 = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init3(payload), source, ownerFn);
              } catch {
              }
            }
          }
        return "";
      }
      var loggedTypeFailures = {}, ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame.setExtraStackFrame(null);
      }
      function checkPropTypes(typeSpecs, values2, location, componentName, element) {
        {
          var has = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var typeSpecName in typeSpecs)
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] != "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw err.name = "Invariant Violation", err;
                }
                error$1 = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              error$1 && !(error$1 instanceof Error) && (setCurrentlyValidatingElement(element), error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1), setCurrentlyValidatingElement(null)), error$1 instanceof Error && !(error$1.message in loggedTypeFailures) && (loggedTypeFailures[error$1.message] = !0, setCurrentlyValidatingElement(element), error("Failed %s type: %s", location, error$1.message), setCurrentlyValidatingElement(null));
            }
        }
      }
      var didWarnAboutInvalidateContextType;
      didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
      var emptyObject = {};
      Object.freeze(emptyObject);
      function maskContext(type, context) {
        var contextTypes = type.contextTypes;
        if (!contextTypes)
          return emptyObject;
        var maskedContext = {};
        for (var contextName in contextTypes)
          maskedContext[contextName] = context[contextName];
        return maskedContext;
      }
      function checkContextTypes(typeSpecs, values2, location) {
        checkPropTypes(typeSpecs, values2, location, "Component");
      }
      function validateContextBounds(context, threadID) {
        for (var i2 = context._threadCount | 0; i2 <= threadID; i2++)
          context[i2] = context._currentValue2, context._threadCount = i2 + 1;
      }
      function processContext(type, context, threadID, isClass) {
        if (isClass) {
          var contextType = type.contextType;
          if ("contextType" in type) {
            var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
            if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
              didWarnAboutInvalidateContextType.add(type);
              var addendum = "";
              contextType === void 0 ? addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof contextType != "object" ? addendum = " However, it is set to a " + typeof contextType + "." : contextType.$$typeof === REACT_PROVIDER_TYPE ? addendum = " Did you accidentally pass the Context.Provider instead?" : contextType._context !== void 0 ? addendum = " Did you accidentally pass the Context.Consumer instead?" : addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.", error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentName(type) || "Component", addendum);
            }
          }
          if (typeof contextType == "object" && contextType !== null)
            return validateContextBounds(contextType, threadID), contextType[threadID];
          {
            var maskedContext = maskContext(type, context);
            return type.contextTypes && checkContextTypes(type.contextTypes, maskedContext, "context"), maskedContext;
          }
        } else {
          var _maskedContext = maskContext(type, context);
          return type.contextTypes && checkContextTypes(type.contextTypes, _maskedContext, "context"), _maskedContext;
        }
      }
      for (var nextAvailableThreadIDs = new Uint16Array(16), i = 0; i < 15; i++)
        nextAvailableThreadIDs[i] = i + 1;
      nextAvailableThreadIDs[15] = 0;
      function growThreadCountAndReturnNextAvailable() {
        var oldArray = nextAvailableThreadIDs, oldSize = oldArray.length, newSize = oldSize * 2;
        if (!(newSize <= 65536))
          throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
        var newArray = new Uint16Array(newSize);
        newArray.set(oldArray), nextAvailableThreadIDs = newArray, nextAvailableThreadIDs[0] = oldSize + 1;
        for (var _i = oldSize; _i < newSize - 1; _i++)
          nextAvailableThreadIDs[_i] = _i + 1;
        return nextAvailableThreadIDs[newSize - 1] = 0, oldSize;
      }
      function allocThreadID() {
        var nextID = nextAvailableThreadIDs[0];
        return nextID === 0 ? growThreadCountAndReturnNextAvailable() : (nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID], nextID);
      }
      function freeThreadID(id) {
        nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0], nextAvailableThreadIDs[0] = id;
      }
      var RESERVED = 0, STRING = 1, BOOLEANISH_STRING = 2, BOOLEAN = 3, OVERLOADED_BOOLEAN = 4, NUMERIC = 5, POSITIVE_NUMERIC = 6, ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ROOT_ATTRIBUTE_NAME = "data-reactroot", VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$"), hasOwnProperty2 = Object.prototype.hasOwnProperty, illegalAttributeNameCache = {}, validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        return hasOwnProperty2.call(validatedAttributeNameCache, attributeName) ? !0 : hasOwnProperty2.call(illegalAttributeNameCache, attributeName) ? !1 : VALID_ATTRIBUTE_NAME_REGEX.test(attributeName) ? (validatedAttributeNameCache[attributeName] = !0, !0) : (illegalAttributeNameCache[attributeName] = !0, error("Invalid attribute name: `%s`", attributeName), !1);
      }
      function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
        return propertyInfo !== null ? propertyInfo.type === RESERVED : isCustomComponentTag ? !1 : name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N");
      }
      function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED)
          return !1;
        switch (typeof value) {
          case "function":
          case "symbol":
            return !0;
          case "boolean": {
            if (isCustomComponentTag)
              return !1;
            if (propertyInfo !== null)
              return !propertyInfo.acceptsBooleans;
            var prefix2 = name.toLowerCase().slice(0, 5);
            return prefix2 !== "data-" && prefix2 !== "aria-";
          }
          default:
            return !1;
        }
      }
      function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
        if (value === null || typeof value > "u" || shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag))
          return !0;
        if (isCustomComponentTag)
          return !1;
        if (propertyInfo !== null)
          switch (propertyInfo.type) {
            case BOOLEAN:
              return !value;
            case OVERLOADED_BOOLEAN:
              return value === !1;
            case NUMERIC:
              return isNaN(value);
            case POSITIVE_NUMERIC:
              return isNaN(value) || value < 1;
          }
        return !1;
      }
      function getPropertyInfo(name) {
        return properties2.hasOwnProperty(name) ? properties2[name] : null;
      }
      function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
        this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN, this.attributeName = attributeName, this.attributeNamespace = attributeNamespace, this.mustUseProperty = mustUseProperty, this.propertyName = name, this.type = type, this.sanitizeURL = sanitizeURL2, this.removeEmptyString = removeEmptyString;
      }
      var properties2 = {}, reservedProps = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style"
      ];
      reservedProps.forEach(function(name) {
        properties2[name] = new PropertyInfoRecord(
          name,
          RESERVED,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
        var name = _ref[0], attributeName = _ref[1];
        properties2[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          null,
          !1,
          !1
        );
      }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
        properties2[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          !1,
          name.toLowerCase(),
          null,
          !1,
          !1
        );
      }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
        properties2[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), [
        "allowFullScreen",
        "async",
        "autoFocus",
        "autoPlay",
        "controls",
        "default",
        "defer",
        "disabled",
        "disablePictureInPicture",
        "disableRemotePlayback",
        "formNoValidate",
        "hidden",
        "loop",
        "noModule",
        "noValidate",
        "open",
        "playsInline",
        "readOnly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        "itemScope"
      ].forEach(function(name) {
        properties2[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          !1,
          name.toLowerCase(),
          null,
          !1,
          !1
        );
      }), [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(name) {
        properties2[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          !0,
          name,
          null,
          !1,
          !1
        );
      }), [
        "capture",
        "download"
      ].forEach(function(name) {
        properties2[name] = new PropertyInfoRecord(
          name,
          OVERLOADED_BOOLEAN,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), [
        "cols",
        "rows",
        "size",
        "span"
      ].forEach(function(name) {
        properties2[name] = new PropertyInfoRecord(
          name,
          POSITIVE_NUMERIC,
          !1,
          name,
          null,
          !1,
          !1
        );
      }), ["rowSpan", "start"].forEach(function(name) {
        properties2[name] = new PropertyInfoRecord(
          name,
          NUMERIC,
          !1,
          name.toLowerCase(),
          null,
          !1,
          !1
        );
      });
      var CAMELIZE = /[\-\:]([a-z])/g, capitalize2 = function(token) {
        return token[1].toUpperCase();
      };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize2);
        properties2[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          null,
          !1,
          !1
        );
      }), [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize2);
        properties2[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          "http://www.w3.org/1999/xlink",
          !1,
          !1
        );
      }), [
        "xml:base",
        "xml:lang",
        "xml:space"
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize2);
        properties2[name] = new PropertyInfoRecord(
          name,
          STRING,
          !1,
          attributeName,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }), ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
        properties2[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          !1,
          attributeName.toLowerCase(),
          null,
          !1,
          !1
        );
      });
      var xlinkHref = "xlinkHref";
      properties2[xlinkHref] = new PropertyInfoRecord(
        "xlinkHref",
        STRING,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      ), ["src", "href", "action", "formAction"].forEach(function(attributeName) {
        properties2[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          !1,
          attributeName.toLowerCase(),
          null,
          !0,
          !0
        );
      });
      var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, didWarn = !1;
      function sanitizeURL(url) {
        !didWarn && isJavaScriptProtocol.test(url) && (didWarn = !0, error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url)));
      }
      var matchHtmlRegExp = /["'&<>]/;
      function escapeHtml2(string) {
        var str = "" + string, match = matchHtmlRegExp.exec(str);
        if (!match)
          return str;
        var escape2, html2 = "", index, lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escape2 = "&quot;";
              break;
            case 38:
              escape2 = "&amp;";
              break;
            case 39:
              escape2 = "&#x27;";
              break;
            case 60:
              escape2 = "&lt;";
              break;
            case 62:
              escape2 = "&gt;";
              break;
            default:
              continue;
          }
          lastIndex !== index && (html2 += str.substring(lastIndex, index)), lastIndex = index + 1, html2 += escape2;
        }
        return lastIndex !== index ? html2 + str.substring(lastIndex, index) : html2;
      }
      function escapeTextForBrowser(text) {
        return typeof text == "boolean" || typeof text == "number" ? "" + text : escapeHtml2(text);
      }
      function quoteAttributeValueForBrowser(value) {
        return '"' + escapeTextForBrowser(value) + '"';
      }
      function createMarkupForRoot() {
        return ROOT_ATTRIBUTE_NAME + '=""';
      }
      function createMarkupForProperty(name, value) {
        var propertyInfo = getPropertyInfo(name);
        if (name !== "style" && shouldIgnoreAttribute(name, propertyInfo, !1) || shouldRemoveAttribute(name, value, propertyInfo, !1))
          return "";
        if (propertyInfo !== null) {
          var attributeName = propertyInfo.attributeName, type = propertyInfo.type;
          return type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === !0 ? attributeName + '=""' : (propertyInfo.sanitizeURL && (value = "" + value, sanitizeURL(value)), attributeName + "=" + quoteAttributeValueForBrowser(value));
        } else if (isAttributeNameSafe(name))
          return name + "=" + quoteAttributeValueForBrowser(value);
        return "";
      }
      function createMarkupForCustomAttribute(name, value) {
        return !isAttributeNameSafe(name) || value == null ? "" : name + "=" + quoteAttributeValueForBrowser(value);
      }
      function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = typeof Object.is == "function" ? Object.is : is, currentlyRenderingComponent = null, firstWorkInProgressHook = null, workInProgressHook = null, isReRender = !1, didScheduleRenderPhaseUpdate = !1, renderPhaseUpdates = null, numberOfReRenders = 0, RE_RENDER_LIMIT = 25, isInHookUserCodeInDev = !1, currentHookNameInDev;
      function resolveCurrentlyRenderingComponent() {
        if (currentlyRenderingComponent === null)
          throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        return isInHookUserCodeInDev && error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), currentlyRenderingComponent;
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (prevDeps === null)
          return error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev), !1;
        nextDeps.length !== prevDeps.length && error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
        for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++)
          if (!objectIs(nextDeps[i2], prevDeps[i2]))
            return !1;
        return !0;
      }
      function createHook() {
        if (numberOfReRenders > 0)
          throw Error("Rendered more hooks than during the previous render");
        return {
          memoizedState: null,
          queue: null,
          next: null
        };
      }
      function createWorkInProgressHook() {
        return workInProgressHook === null ? firstWorkInProgressHook === null ? (isReRender = !1, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = !0, workInProgressHook = firstWorkInProgressHook) : workInProgressHook.next === null ? (isReRender = !1, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = !0, workInProgressHook = workInProgressHook.next), workInProgressHook;
      }
      function prepareToUseHooks(componentIdentity) {
        currentlyRenderingComponent = componentIdentity, isInHookUserCodeInDev = !1;
      }
      function finishHooks(Component, props, children, refOrContext) {
        for (; didScheduleRenderPhaseUpdate; )
          didScheduleRenderPhaseUpdate = !1, numberOfReRenders += 1, workInProgressHook = null, children = Component(props, refOrContext);
        return resetHooksState(), children;
      }
      function resetHooksState() {
        isInHookUserCodeInDev = !1, currentlyRenderingComponent = null, didScheduleRenderPhaseUpdate = !1, firstWorkInProgressHook = null, numberOfReRenders = 0, renderPhaseUpdates = null, workInProgressHook = null;
      }
      function readContext(context, observedBits) {
        var threadID = currentPartialRenderer.threadID;
        return validateContextBounds(context, threadID), isInHookUserCodeInDev && error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), context[threadID];
      }
      function useContext6(context, observedBits) {
        currentHookNameInDev = "useContext", resolveCurrentlyRenderingComponent();
        var threadID = currentPartialRenderer.threadID;
        return validateContextBounds(context, threadID), context[threadID];
      }
      function basicStateReducer(state, action) {
        return typeof action == "function" ? action(state) : action;
      }
      function useState5(initialState) {
        return currentHookNameInDev = "useState", useReducer(
          basicStateReducer,
          initialState
        );
      }
      function useReducer(reducer, initialArg, init3) {
        if (reducer !== basicStateReducer && (currentHookNameInDev = "useReducer"), currentlyRenderingComponent = resolveCurrentlyRenderingComponent(), workInProgressHook = createWorkInProgressHook(), isReRender) {
          var queue3 = workInProgressHook.queue, dispatch = queue3.dispatch;
          if (renderPhaseUpdates !== null) {
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue3);
            if (firstRenderPhaseUpdate !== void 0) {
              renderPhaseUpdates.delete(queue3);
              var newState = workInProgressHook.memoizedState, update = firstRenderPhaseUpdate;
              do {
                var action = update.action;
                isInHookUserCodeInDev = !0, newState = reducer(newState, action), isInHookUserCodeInDev = !1, update = update.next;
              } while (update !== null);
              return workInProgressHook.memoizedState = newState, [newState, dispatch];
            }
          }
          return [workInProgressHook.memoizedState, dispatch];
        } else {
          isInHookUserCodeInDev = !0;
          var initialState;
          reducer === basicStateReducer ? initialState = typeof initialArg == "function" ? initialArg() : initialArg : initialState = init3 !== void 0 ? init3(initialArg) : initialArg, isInHookUserCodeInDev = !1, workInProgressHook.memoizedState = initialState;
          var _queue = workInProgressHook.queue = {
            last: null,
            dispatch: null
          }, _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
          return [workInProgressHook.memoizedState, _dispatch];
        }
      }
      function useMemo5(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent(), workInProgressHook = createWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        if (workInProgressHook !== null) {
          var prevState = workInProgressHook.memoizedState;
          if (prevState !== null && nextDeps !== null) {
            var prevDeps = prevState[1];
            if (areHookInputsEqual(nextDeps, prevDeps))
              return prevState[0];
          }
        }
        isInHookUserCodeInDev = !0;
        var nextValue = nextCreate();
        return isInHookUserCodeInDev = !1, workInProgressHook.memoizedState = [nextValue, nextDeps], nextValue;
      }
      function useRef4(initialValue) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent(), workInProgressHook = createWorkInProgressHook();
        var previousRef = workInProgressHook.memoizedState;
        if (previousRef === null) {
          var ref = {
            current: initialValue
          };
          return Object.seal(ref), workInProgressHook.memoizedState = ref, ref;
        } else
          return previousRef;
      }
      function useLayoutEffect5(create, inputs) {
        currentHookNameInDev = "useLayoutEffect", error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
      }
      function dispatchAction(componentIdentity, queue3, action) {
        if (!(numberOfReRenders < RE_RENDER_LIMIT))
          throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        if (componentIdentity === currentlyRenderingComponent) {
          didScheduleRenderPhaseUpdate = !0;
          var update = {
            action,
            next: null
          };
          renderPhaseUpdates === null && (renderPhaseUpdates = /* @__PURE__ */ new Map());
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue3);
          if (firstRenderPhaseUpdate === void 0)
            renderPhaseUpdates.set(queue3, update);
          else {
            for (var lastRenderPhaseUpdate = firstRenderPhaseUpdate; lastRenderPhaseUpdate.next !== null; )
              lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            lastRenderPhaseUpdate.next = update;
          }
        }
      }
      function useCallback5(callback, deps) {
        return useMemo5(function() {
          return callback;
        }, deps);
      }
      function useMutableSource(source, getSnapshot, subscribe) {
        return resolveCurrentlyRenderingComponent(), getSnapshot(source._source);
      }
      function useDeferredValue(value) {
        return resolveCurrentlyRenderingComponent(), value;
      }
      function useTransition2() {
        resolveCurrentlyRenderingComponent();
        var startTransition = function(callback) {
          callback();
        };
        return [startTransition, !1];
      }
      function useOpaqueIdentifier() {
        return (currentPartialRenderer.identifierPrefix || "") + "R:" + (currentPartialRenderer.uniqueID++).toString(36);
      }
      function noop3() {
      }
      var currentPartialRenderer = null;
      function setCurrentPartialRenderer(renderer) {
        currentPartialRenderer = renderer;
      }
      var Dispatcher = {
        readContext,
        useContext: useContext6,
        useMemo: useMemo5,
        useReducer,
        useRef: useRef4,
        useState: useState5,
        useLayoutEffect: useLayoutEffect5,
        useCallback: useCallback5,
        useImperativeHandle: noop3,
        useEffect: noop3,
        useDebugValue: noop3,
        useDeferredValue,
        useTransition: useTransition2,
        useOpaqueIdentifier,
        useMutableSource
      }, HTML_NAMESPACE = "http://www.w3.org/1999/xhtml", MATH_NAMESPACE = "http://www.w3.org/1998/Math/MathML", SVG_NAMESPACE = "http://www.w3.org/2000/svg", Namespaces = {
        html: HTML_NAMESPACE,
        mathml: MATH_NAMESPACE,
        svg: SVG_NAMESPACE
      };
      function getIntrinsicNamespace(type) {
        switch (type) {
          case "svg":
            return SVG_NAMESPACE;
          case "math":
            return MATH_NAMESPACE;
          default:
            return HTML_NAMESPACE;
        }
      }
      function getChildNamespace(parentNamespace, type) {
        return parentNamespace == null || parentNamespace === HTML_NAMESPACE ? getIntrinsicNamespace(type) : parentNamespace === SVG_NAMESPACE && type === "foreignObject" ? HTML_NAMESPACE : parentNamespace;
      }
      var hasReadOnlyValue = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
      };
      function checkControlledValueProps(tagName, props) {
        hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null || error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), props.onChange || props.readOnly || props.disabled || props.checked == null || error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
      }
      var omittedCloseTags = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      }, voidElementTags = _assign({
        menuitem: !0
      }, omittedCloseTags), HTML = "__html";
      function assertValidProps(tag, props) {
        if (!!props) {
          if (voidElementTags[tag] && !(props.children == null && props.dangerouslySetInnerHTML == null))
            throw Error(tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          if (props.dangerouslySetInnerHTML != null) {
            if (props.children != null)
              throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if (!(typeof props.dangerouslySetInnerHTML == "object" && HTML in props.dangerouslySetInnerHTML))
              throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          }
          if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null && error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(props.style == null || typeof props.style == "object"))
            throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        }
      }
      var isUnitlessNumber = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      };
      function prefixKey(prefix2, key) {
        return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
      }
      var prefixes = ["Webkit", "ms", "Moz", "O"];
      Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes.forEach(function(prefix2) {
          isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
        });
      });
      function dangerousStyleValue(name, value, isCustomProperty) {
        var isEmpty4 = value == null || typeof value == "boolean" || value === "";
        return isEmpty4 ? "" : !isCustomProperty && typeof value == "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) ? value + "px" : ("" + value).trim();
      }
      var uppercasePattern = /([A-Z])/g, msPattern = /^ms-/;
      function hyphenateStyleName(name) {
        return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
      }
      function isCustomComponent(tagName, props) {
        if (tagName.indexOf("-") === -1)
          return typeof props.is == "string";
        switch (tagName) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var warnValidStyle = function() {
      };
      {
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/, msPattern$1 = /^-ms-/, hyphenPattern = /-(.)/g, badStyleValueWithSemicolonPattern = /;\s*$/, warnedStyleNames = {}, warnedStyleValues = {}, warnedForNaNValue = !1, warnedForInfinityValue = !1, camelize = function(string) {
          return string.replace(hyphenPattern, function(_2, character) {
            return character.toUpperCase();
          });
        }, warnHyphenatedStyleName = function(name) {
          warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, error(
            "Unsupported style property %s. Did you mean %s?",
            name,
            camelize(name.replace(msPattern$1, "ms-"))
          ));
        }, warnBadVendoredStyleName = function(name) {
          warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)));
        }, warnStyleValueWithSemicolon = function(name, value) {
          warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value] || (warnedStyleValues[value] = !0, error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, "")));
        }, warnStyleValueIsNaN = function(name, value) {
          warnedForNaNValue || (warnedForNaNValue = !0, error("`NaN` is an invalid value for the `%s` css style property.", name));
        }, warnStyleValueIsInfinity = function(name, value) {
          warnedForInfinityValue || (warnedForInfinityValue = !0, error("`Infinity` is an invalid value for the `%s` css style property.", name));
        };
        warnValidStyle = function(name, value) {
          name.indexOf("-") > -1 ? warnHyphenatedStyleName(name) : badVendoredStyleNamePattern.test(name) ? warnBadVendoredStyleName(name) : badStyleValueWithSemicolonPattern.test(value) && warnStyleValueWithSemicolon(name, value), typeof value == "number" && (isNaN(value) ? warnStyleValueIsNaN(name, value) : isFinite(value) || warnStyleValueIsInfinity(name, value));
        };
      }
      var warnValidStyle$1 = warnValidStyle, ariaProperties = {
        "aria-current": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
      }, warnedProperties = {}, rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"), rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$"), hasOwnProperty$1 = Object.prototype.hasOwnProperty;
      function validateProperty(tagName, name) {
        {
          if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name])
            return !0;
          if (rARIACamel.test(name)) {
            var ariaName = "aria-" + name.slice(4).toLowerCase(), correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
            if (correctName == null)
              return error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name), warnedProperties[name] = !0, !0;
            if (name !== correctName)
              return error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName), warnedProperties[name] = !0, !0;
          }
          if (rARIA.test(name)) {
            var lowerCasedName = name.toLowerCase(), standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
            if (standardName == null)
              return warnedProperties[name] = !0, !1;
            if (name !== standardName)
              return error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName), warnedProperties[name] = !0, !0;
          }
        }
        return !0;
      }
      function warnInvalidARIAProps(type, props) {
        {
          var invalidProps = [];
          for (var key in props) {
            var isValid = validateProperty(type, key);
            isValid || invalidProps.push(key);
          }
          var unknownPropString = invalidProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          invalidProps.length === 1 ? error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type) : invalidProps.length > 1 && error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
        }
      }
      function validateProperties(type, props) {
        isCustomComponent(type, props) || warnInvalidARIAProps(type, props);
      }
      var didWarnValueNull = !1;
      function validateProperties$1(type, props) {
        {
          if (type !== "input" && type !== "textarea" && type !== "select")
            return;
          props != null && props.value === null && !didWarnValueNull && (didWarnValueNull = !0, type === "select" && props.multiple ? error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type) : error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type));
        }
      }
      var possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
      }, validateProperty$1 = function() {
      };
      {
        var warnedProperties$1 = {}, _hasOwnProperty = Object.prototype.hasOwnProperty, EVENT_NAME_REGEX = /^on./, INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/, rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$"), rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        validateProperty$1 = function(tagName, name, value, eventRegistry) {
          if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name])
            return !0;
          var lowerCasedName = name.toLowerCase();
          if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout")
            return error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), warnedProperties$1[name] = !0, !0;
          if (eventRegistry != null) {
            var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
            if (registrationNameDependencies.hasOwnProperty(name))
              return !0;
            var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
            if (registrationName != null)
              return error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName), warnedProperties$1[name] = !0, !0;
            if (EVENT_NAME_REGEX.test(name))
              return error("Unknown event handler property `%s`. It will be ignored.", name), warnedProperties$1[name] = !0, !0;
          } else if (EVENT_NAME_REGEX.test(name))
            return INVALID_EVENT_NAME_REGEX.test(name) && error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name), warnedProperties$1[name] = !0, !0;
          if (rARIA$1.test(name) || rARIACamel$1.test(name))
            return !0;
          if (lowerCasedName === "innerhtml")
            return error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), warnedProperties$1[name] = !0, !0;
          if (lowerCasedName === "aria")
            return error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), warnedProperties$1[name] = !0, !0;
          if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value != "string")
            return error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value), warnedProperties$1[name] = !0, !0;
          if (typeof value == "number" && isNaN(value))
            return error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name), warnedProperties$1[name] = !0, !0;
          var propertyInfo = getPropertyInfo(name), isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
          if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            var standardName = possibleStandardNames[lowerCasedName];
            if (standardName !== name)
              return error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName), warnedProperties$1[name] = !0, !0;
          } else if (!isReserved && name !== lowerCasedName)
            return error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName), warnedProperties$1[name] = !0, !0;
          return typeof value == "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, !1) ? (value ? error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name) : error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name), warnedProperties$1[name] = !0, !0) : isReserved ? !0 : shouldRemoveAttributeWithWarning(name, value, propertyInfo, !1) ? (warnedProperties$1[name] = !0, !1) : ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN && (error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value), warnedProperties$1[name] = !0), !0);
        };
      }
      var warnUnknownProperties = function(type, props, eventRegistry) {
        {
          var unknownProps = [];
          for (var key in props) {
            var isValid = validateProperty$1(type, key, props[key], eventRegistry);
            isValid || unknownProps.push(key);
          }
          var unknownPropString = unknownProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          unknownProps.length === 1 ? error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type) : unknownProps.length > 1 && error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
        }
      };
      function validateProperties$2(type, props, eventRegistry) {
        isCustomComponent(type, props) || warnUnknownProperties(type, props, eventRegistry);
      }
      var toArray = React23.Children.toArray, currentDebugStacks = [], ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, ReactDebugCurrentFrame$1, prevGetCurrentStackImpl = null, getCurrentServerStackImpl = function() {
        return "";
      }, describeStackFrame = function(element) {
        return "";
      }, validatePropertiesInDevelopment = function(type, props) {
      }, pushCurrentDebugStack = function(stack) {
      }, pushElementToDebugStack = function(element) {
      }, popCurrentDebugStack = function() {
      }, hasWarnedAboutUsingContextAsConsumer = !1;
      ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame, validatePropertiesInDevelopment = function(type, props) {
        validateProperties(type, props), validateProperties$1(type, props), validateProperties$2(type, props, null);
      }, describeStackFrame = function(element) {
        return describeUnknownElementTypeFrameInDEV(element.type, element._source, null);
      }, pushCurrentDebugStack = function(stack) {
        currentDebugStacks.push(stack), currentDebugStacks.length === 1 && (prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack, ReactDebugCurrentFrame$1.getCurrentStack = getCurrentServerStackImpl);
      }, pushElementToDebugStack = function(element) {
        var stack = currentDebugStacks[currentDebugStacks.length - 1], frame = stack[stack.length - 1];
        frame.debugElementStack.push(element);
      }, popCurrentDebugStack = function() {
        currentDebugStacks.pop(), currentDebugStacks.length === 0 && (ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl, prevGetCurrentStackImpl = null);
      }, getCurrentServerStackImpl = function() {
        if (currentDebugStacks.length === 0)
          return "";
        for (var frames = currentDebugStacks[currentDebugStacks.length - 1], stack = "", i2 = frames.length - 1; i2 >= 0; i2--)
          for (var frame = frames[i2], debugElementStack = frame.debugElementStack, ii = debugElementStack.length - 1; ii >= 0; ii--)
            stack += describeStackFrame(debugElementStack[ii]);
        return stack;
      };
      var didWarnDefaultInputValue = !1, didWarnDefaultChecked = !1, didWarnDefaultSelectValue = !1, didWarnDefaultTextareaValue = !1, didWarnInvalidOptionChildren = !1, didWarnAboutNoopUpdateForComponent = {}, didWarnAboutBadClass = {}, didWarnAboutModulePatternComponent = {}, didWarnAboutDeprecatedWillMount = {}, didWarnAboutUndefinedDerivedState = {}, didWarnAboutUninitializedState = {}, valuePropNames = ["value", "defaultValue"], newlineEatingTags = {
        listing: !0,
        pre: !0,
        textarea: !0
      }, VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, validatedTagCache = {};
      function validateDangerousTag(tag) {
        if (!validatedTagCache.hasOwnProperty(tag)) {
          if (!VALID_TAG_REGEX.test(tag))
            throw Error("Invalid tag: " + tag);
          validatedTagCache[tag] = !0;
        }
      }
      var styleNameCache = {}, processStyleName = function(styleName) {
        if (styleNameCache.hasOwnProperty(styleName))
          return styleNameCache[styleName];
        var result = hyphenateStyleName(styleName);
        return styleNameCache[styleName] = result, result;
      };
      function createMarkupForStyles(styles2) {
        var serialized = "", delimiter = "";
        for (var styleName in styles2)
          if (!!styles2.hasOwnProperty(styleName)) {
            var isCustomProperty = styleName.indexOf("--") === 0, styleValue = styles2[styleName];
            isCustomProperty || warnValidStyle$1(styleName, styleValue), styleValue != null && (serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ":", serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty), delimiter = ";");
          }
        return serialized || null;
      }
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor, componentName = _constructor && getComponentName(_constructor) || "ReactClass", warningKey = componentName + "." + callerName;
          if (didWarnAboutNoopUpdateForComponent[warningKey])
            return;
          error(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, callerName, callerName, componentName), didWarnAboutNoopUpdateForComponent[warningKey] = !0;
        }
      }
      function shouldConstruct$1(Component) {
        return Component.prototype && Component.prototype.isReactComponent;
      }
      function getNonChildrenInnerMarkup(props) {
        var innerHTML = props.dangerouslySetInnerHTML;
        if (innerHTML != null) {
          if (innerHTML.__html != null)
            return innerHTML.__html;
        } else {
          var content = props.children;
          if (typeof content == "string" || typeof content == "number")
            return escapeTextForBrowser(content);
        }
        return null;
      }
      function flattenTopLevelChildren(children) {
        if (!React23.isValidElement(children))
          return toArray(children);
        var element = children;
        if (element.type !== REACT_FRAGMENT_TYPE)
          return [element];
        var fragmentChildren = element.props.children;
        if (!React23.isValidElement(fragmentChildren))
          return toArray(fragmentChildren);
        var fragmentChildElement = fragmentChildren;
        return [fragmentChildElement];
      }
      function flattenOptionChildren(children) {
        if (children == null)
          return children;
        var content = "";
        return React23.Children.forEach(children, function(child) {
          child != null && (content += child, !didWarnInvalidOptionChildren && typeof child != "string" && typeof child != "number" && (didWarnInvalidOptionChildren = !0, error("Only strings and numbers are supported as <option> children.")));
        }), content;
      }
      var hasOwnProperty$2 = Object.prototype.hasOwnProperty, STYLE = "style", RESERVED_PROPS = {
        children: null,
        dangerouslySetInnerHTML: null,
        suppressContentEditableWarning: null,
        suppressHydrationWarning: null
      };
      function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
        var ret = "<" + tagVerbatim, isCustomComponent$1 = isCustomComponent(tagLowercase, props);
        for (var propKey in props)
          if (!!hasOwnProperty$2.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue != null) {
              propKey === STYLE && (propValue = createMarkupForStyles(propValue));
              var markup = null;
              isCustomComponent$1 ? RESERVED_PROPS.hasOwnProperty(propKey) || (markup = createMarkupForCustomAttribute(propKey, propValue)) : markup = createMarkupForProperty(propKey, propValue), markup && (ret += " " + markup);
            }
          }
        return makeStaticMarkup || isRootElement && (ret += " " + createMarkupForRoot()), ret;
      }
      function validateRenderResult(child, type) {
        if (child === void 0)
          throw Error((getComponentName(type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
      }
      function resolve(child, context, threadID) {
        for (; React23.isValidElement(child); ) {
          var element = child, Component = element.type;
          if (pushElementToDebugStack(element), typeof Component != "function")
            break;
          processChild(element, Component);
        }
        function processChild(element2, Component2) {
          var isClass = shouldConstruct$1(Component2), publicContext = processContext(Component2, context, threadID, isClass), queue3 = [], replace = !1, updater = {
            isMounted: function(publicInstance) {
              return !1;
            },
            enqueueForceUpdate: function(publicInstance) {
              if (queue3 === null)
                return warnNoop(publicInstance, "forceUpdate"), null;
            },
            enqueueReplaceState: function(publicInstance, completeState) {
              replace = !0, queue3 = [completeState];
            },
            enqueueSetState: function(publicInstance, currentPartialState) {
              if (queue3 === null)
                return warnNoop(publicInstance, "setState"), null;
              queue3.push(currentPartialState);
            }
          }, inst;
          if (isClass) {
            if (inst = new Component2(element2.props, publicContext, updater), typeof Component2.getDerivedStateFromProps == "function") {
              if (inst.state === null || inst.state === void 0) {
                var componentName = getComponentName(Component2) || "Unknown";
                didWarnAboutUninitializedState[componentName] || (error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, inst.state === null ? "null" : "undefined", componentName), didWarnAboutUninitializedState[componentName] = !0);
              }
              var partialState = Component2.getDerivedStateFromProps.call(null, element2.props, inst.state);
              if (partialState === void 0) {
                var _componentName = getComponentName(Component2) || "Unknown";
                didWarnAboutUndefinedDerivedState[_componentName] || (error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", _componentName), didWarnAboutUndefinedDerivedState[_componentName] = !0);
              }
              partialState != null && (inst.state = _assign({}, inst.state, partialState));
            }
          } else {
            if (Component2.prototype && typeof Component2.prototype.render == "function") {
              var _componentName2 = getComponentName(Component2) || "Unknown";
              didWarnAboutBadClass[_componentName2] || (error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", _componentName2, _componentName2), didWarnAboutBadClass[_componentName2] = !0);
            }
            var componentIdentity = {};
            if (prepareToUseHooks(componentIdentity), inst = Component2(element2.props, publicContext, updater), inst = finishHooks(Component2, element2.props, inst, publicContext), inst != null && inst.render != null) {
              var _componentName3 = getComponentName(Component2) || "Unknown";
              didWarnAboutModulePatternComponent[_componentName3] || (error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName3, _componentName3, _componentName3), didWarnAboutModulePatternComponent[_componentName3] = !0);
            }
            if (inst == null || inst.render == null) {
              child = inst, validateRenderResult(child, Component2);
              return;
            }
          }
          inst.props = element2.props, inst.context = publicContext, inst.updater = updater;
          var initialState = inst.state;
          if (initialState === void 0 && (inst.state = initialState = null), typeof inst.UNSAFE_componentWillMount == "function" || typeof inst.componentWillMount == "function") {
            if (typeof inst.componentWillMount == "function") {
              if (inst.componentWillMount.__suppressDeprecationWarning !== !0) {
                var _componentName4 = getComponentName(Component2) || "Unknown";
                didWarnAboutDeprecatedWillMount[_componentName4] || (warn(
                  `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                  _componentName4
                ), didWarnAboutDeprecatedWillMount[_componentName4] = !0);
              }
              typeof Component2.getDerivedStateFromProps != "function" && inst.componentWillMount();
            }
            if (typeof inst.UNSAFE_componentWillMount == "function" && typeof Component2.getDerivedStateFromProps != "function" && inst.UNSAFE_componentWillMount(), queue3.length) {
              var oldQueue = queue3, oldReplace = replace;
              if (queue3 = null, replace = !1, oldReplace && oldQueue.length === 1)
                inst.state = oldQueue[0];
              else {
                for (var nextState = oldReplace ? oldQueue[0] : inst.state, dontMutate = !0, i2 = oldReplace ? 1 : 0; i2 < oldQueue.length; i2++) {
                  var partial = oldQueue[i2], _partialState = typeof partial == "function" ? partial.call(inst, nextState, element2.props, publicContext) : partial;
                  _partialState != null && (dontMutate ? (dontMutate = !1, nextState = _assign({}, nextState, _partialState)) : _assign(nextState, _partialState));
                }
                inst.state = nextState;
              }
            } else
              queue3 = null;
          }
          child = inst.render(), child === void 0 && inst.render._isMockFunction && (child = null), validateRenderResult(child, Component2);
          var childContext;
          {
            if (typeof inst.getChildContext == "function") {
              var _childContextTypes = Component2.childContextTypes;
              if (typeof _childContextTypes == "object") {
                childContext = inst.getChildContext();
                for (var contextKey in childContext)
                  if (!(contextKey in _childContextTypes))
                    throw Error((getComponentName(Component2) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
              } else
                error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", getComponentName(Component2) || "Unknown");
            }
            childContext && (context = _assign({}, context, childContext));
          }
        }
        return {
          child,
          context
        };
      }
      var ReactDOMServerRenderer = /* @__PURE__ */ function() {
        function ReactDOMServerRenderer2(children, makeStaticMarkup, options) {
          var flatChildren = flattenTopLevelChildren(children), topFrame = {
            type: null,
            domNamespace: Namespaces.html,
            children: flatChildren,
            childIndex: 0,
            context: emptyObject,
            footer: ""
          };
          topFrame.debugElementStack = [], this.threadID = allocThreadID(), this.stack = [topFrame], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = makeStaticMarkup, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = options && options.identifierPrefix || "", this.contextProviderStack = [];
        }
        var _proto = ReactDOMServerRenderer2.prototype;
        return _proto.destroy = function() {
          this.exhausted || (this.exhausted = !0, this.clearProviders(), freeThreadID(this.threadID));
        }, _proto.pushProvider = function(provider) {
          var index = ++this.contextIndex, context = provider.type._context, threadID = this.threadID;
          validateContextBounds(context, threadID);
          var previousValue = context[threadID];
          this.contextStack[index] = context, this.contextValueStack[index] = previousValue, this.contextProviderStack[index] = provider, context[threadID] = provider.props.value;
        }, _proto.popProvider = function(provider) {
          var index = this.contextIndex;
          (index < 0 || provider !== this.contextProviderStack[index]) && error("Unexpected pop.");
          var context = this.contextStack[index], previousValue = this.contextValueStack[index];
          this.contextStack[index] = null, this.contextValueStack[index] = null, this.contextProviderStack[index] = null, this.contextIndex--, context[this.threadID] = previousValue;
        }, _proto.clearProviders = function() {
          for (var index = this.contextIndex; index >= 0; index--) {
            var context = this.contextStack[index], previousValue = this.contextValueStack[index];
            context[this.threadID] = previousValue;
          }
        }, _proto.read = function(bytes) {
          if (this.exhausted)
            return null;
          var prevPartialRenderer = currentPartialRenderer;
          setCurrentPartialRenderer(this);
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = Dispatcher;
          try {
            for (var out = [""], suspended = !1; out[0].length < bytes; ) {
              if (this.stack.length === 0) {
                this.exhausted = !0, freeThreadID(this.threadID);
                break;
              }
              var frame = this.stack[this.stack.length - 1];
              if (suspended || frame.childIndex >= frame.children.length) {
                var footer = frame.footer;
                if (footer !== "" && (this.previousWasTextNode = !1), this.stack.pop(), frame.type === "select")
                  this.currentSelectValue = null;
                else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
                  var provider = frame.type;
                  this.popProvider(provider);
                } else if (frame.type === REACT_SUSPENSE_TYPE) {
                  this.suspenseDepth--;
                  var buffered = out.pop();
                  if (suspended) {
                    suspended = !1;
                    var fallbackFrame = frame.fallbackFrame;
                    if (!fallbackFrame)
                      throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                    this.stack.push(fallbackFrame), out[this.suspenseDepth] += "<!--$!-->";
                    continue;
                  } else
                    out[this.suspenseDepth] += buffered;
                }
                out[this.suspenseDepth] += footer;
                continue;
              }
              var child = frame.children[frame.childIndex++], outBuffer = "";
              pushCurrentDebugStack(this.stack), frame.debugElementStack.length = 0;
              try {
                outBuffer += this.render(child, frame.context, frame.domNamespace);
              } catch (err) {
                if (err != null && typeof err.then == "function")
                  if (enableSuspenseServerRenderer) {
                    if (!(this.suspenseDepth > 0))
                      throw Error(`A React component suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
                    suspended = !0;
                  } else
                    throw Error("ReactDOMServer does not yet support Suspense.");
                else
                  throw err;
              } finally {
                popCurrentDebugStack();
              }
              out.length <= this.suspenseDepth && out.push(""), out[this.suspenseDepth] += outBuffer;
            }
            return out[0];
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher, setCurrentPartialRenderer(prevPartialRenderer), resetHooksState();
          }
        }, _proto.render = function(child, context, parentNamespace) {
          if (typeof child == "string" || typeof child == "number") {
            var text = "" + child;
            return text === "" ? "" : this.makeStaticMarkup ? escapeTextForBrowser(text) : this.previousWasTextNode ? "<!-- -->" + escapeTextForBrowser(text) : (this.previousWasTextNode = !0, escapeTextForBrowser(text));
          } else {
            var nextChild, _resolve = resolve(child, context, this.threadID);
            if (nextChild = _resolve.child, context = _resolve.context, nextChild === null || nextChild === !1)
              return "";
            if (!React23.isValidElement(nextChild)) {
              if (nextChild != null && nextChild.$$typeof != null) {
                var $$typeof = nextChild.$$typeof;
                throw Error($$typeof === REACT_PORTAL_TYPE ? "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." : "Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue.");
              }
              var nextChildren = toArray(nextChild), frame = {
                type: null,
                domNamespace: parentNamespace,
                children: nextChildren,
                childIndex: 0,
                context,
                footer: ""
              };
              return frame.debugElementStack = [], this.stack.push(frame), "";
            }
            var nextElement = nextChild, elementType = nextElement.type;
            if (typeof elementType == "string")
              return this.renderDOM(nextElement, context, parentNamespace);
            switch (elementType) {
              case REACT_LEGACY_HIDDEN_TYPE:
              case REACT_DEBUG_TRACING_MODE_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
              case REACT_FRAGMENT_TYPE: {
                var _nextChildren = toArray(nextChild.props.children), _frame = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren,
                  childIndex: 0,
                  context,
                  footer: ""
                };
                return _frame.debugElementStack = [], this.stack.push(_frame), "";
              }
              case REACT_SUSPENSE_TYPE:
                throw Error("ReactDOMServer does not yet support Suspense.");
              case REACT_SCOPE_TYPE:
                throw Error("ReactDOMServer does not yet support scope components.");
            }
            if (typeof elementType == "object" && elementType !== null)
              switch (elementType.$$typeof) {
                case REACT_FORWARD_REF_TYPE: {
                  var element = nextChild, _nextChildren5, componentIdentity = {};
                  prepareToUseHooks(componentIdentity), _nextChildren5 = elementType.render(element.props, element.ref), _nextChildren5 = finishHooks(elementType.render, element.props, _nextChildren5, element.ref), _nextChildren5 = toArray(_nextChildren5);
                  var _frame5 = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren5,
                    childIndex: 0,
                    context,
                    footer: ""
                  };
                  return _frame5.debugElementStack = [], this.stack.push(_frame5), "";
                }
                case REACT_MEMO_TYPE: {
                  var _element = nextChild, _nextChildren6 = [React23.createElement(elementType.type, _assign({
                    ref: _element.ref
                  }, _element.props))], _frame6 = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren6,
                    childIndex: 0,
                    context,
                    footer: ""
                  };
                  return _frame6.debugElementStack = [], this.stack.push(_frame6), "";
                }
                case REACT_PROVIDER_TYPE: {
                  var provider = nextChild, nextProps = provider.props, _nextChildren7 = toArray(nextProps.children), _frame7 = {
                    type: provider,
                    domNamespace: parentNamespace,
                    children: _nextChildren7,
                    childIndex: 0,
                    context,
                    footer: ""
                  };
                  return _frame7.debugElementStack = [], this.pushProvider(provider), this.stack.push(_frame7), "";
                }
                case REACT_CONTEXT_TYPE: {
                  var reactContext = nextChild.type;
                  reactContext._context === void 0 ? reactContext !== reactContext.Consumer && (hasWarnedAboutUsingContextAsConsumer || (hasWarnedAboutUsingContextAsConsumer = !0, error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : reactContext = reactContext._context;
                  var _nextProps = nextChild.props, threadID = this.threadID;
                  validateContextBounds(reactContext, threadID);
                  var nextValue = reactContext[threadID], _nextChildren8 = toArray(_nextProps.children(nextValue)), _frame8 = {
                    type: nextChild,
                    domNamespace: parentNamespace,
                    children: _nextChildren8,
                    childIndex: 0,
                    context,
                    footer: ""
                  };
                  return _frame8.debugElementStack = [], this.stack.push(_frame8), "";
                }
                case REACT_FUNDAMENTAL_TYPE:
                  throw Error("ReactDOMServer does not yet support the fundamental API.");
                case REACT_LAZY_TYPE: {
                  var _element2 = nextChild, lazyComponent = nextChild.type, payload = lazyComponent._payload, init3 = lazyComponent._init, result = init3(payload), _nextChildren10 = [React23.createElement(result, _assign({
                    ref: _element2.ref
                  }, _element2.props))], _frame10 = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren10,
                    childIndex: 0,
                    context,
                    footer: ""
                  };
                  return _frame10.debugElementStack = [], this.stack.push(_frame10), "";
                }
              }
            var info = "";
            {
              var owner = nextElement._owner;
              (elementType === void 0 || typeof elementType == "object" && elementType !== null && Object.keys(elementType).length === 0) && (info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var ownerName = owner ? getComponentName(owner) : null;
              ownerName && (info += `

Check the render method of \`` + ownerName + "`.");
            }
            throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info);
          }
        }, _proto.renderDOM = function(element, context, parentNamespace) {
          var tag = element.type.toLowerCase(), namespace = parentNamespace;
          parentNamespace === Namespaces.html && (namespace = getIntrinsicNamespace(tag)), namespace === Namespaces.html && tag !== element.type && error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", element.type), validateDangerousTag(tag);
          var props = element.props;
          if (tag === "input")
            checkControlledValueProps("input", props), props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked && (error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type), didWarnDefaultChecked = !0), props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue && (error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type), didWarnDefaultInputValue = !0), props = _assign({
              type: void 0
            }, props, {
              defaultChecked: void 0,
              defaultValue: void 0,
              value: props.value != null ? props.value : props.defaultValue,
              checked: props.checked != null ? props.checked : props.defaultChecked
            });
          else if (tag === "textarea") {
            checkControlledValueProps("textarea", props), props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue && (error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), didWarnDefaultTextareaValue = !0);
            var initialValue = props.value;
            if (initialValue == null) {
              var defaultValue = props.defaultValue, textareaChildren = props.children;
              if (textareaChildren != null) {
                if (error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), defaultValue != null)
                  throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                if (Array.isArray(textareaChildren)) {
                  if (!(textareaChildren.length <= 1))
                    throw Error("<textarea> can only have at most one child.");
                  textareaChildren = textareaChildren[0];
                }
                defaultValue = "" + textareaChildren;
              }
              defaultValue == null && (defaultValue = ""), initialValue = defaultValue;
            }
            props = _assign({}, props, {
              value: void 0,
              children: "" + initialValue
            });
          } else if (tag === "select") {
            {
              checkControlledValueProps("select", props);
              for (var i2 = 0; i2 < valuePropNames.length; i2++) {
                var propName = valuePropNames[i2];
                if (props[propName] != null) {
                  var isArray3 = Array.isArray(props[propName]);
                  props.multiple && !isArray3 ? error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName) : !props.multiple && isArray3 && error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
                }
              }
              props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue && (error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), didWarnDefaultSelectValue = !0);
            }
            this.currentSelectValue = props.value != null ? props.value : props.defaultValue, props = _assign({}, props, {
              value: void 0
            });
          } else if (tag === "option") {
            var selected = null, selectValue = this.currentSelectValue, optionChildren = flattenOptionChildren(props.children);
            if (selectValue != null) {
              var value;
              if (props.value != null ? value = props.value + "" : value = optionChildren, selected = !1, Array.isArray(selectValue)) {
                for (var j = 0; j < selectValue.length; j++)
                  if ("" + selectValue[j] === value) {
                    selected = !0;
                    break;
                  }
              } else
                selected = "" + selectValue === value;
              props = _assign({
                selected: void 0,
                children: void 0
              }, props, {
                selected,
                children: optionChildren
              });
            }
          }
          validatePropertiesInDevelopment(tag, props), assertValidProps(tag, props);
          var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1), footer = "";
          omittedCloseTags.hasOwnProperty(tag) ? out += "/>" : (out += ">", footer = "</" + element.type + ">");
          var children, innerMarkup = getNonChildrenInnerMarkup(props);
          innerMarkup != null ? (children = [], newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === `
` && (out += `
`), out += innerMarkup) : children = toArray(props.children);
          var frame = {
            domNamespace: getChildNamespace(parentNamespace, element.type),
            type: tag,
            children,
            childIndex: 0,
            context,
            footer
          };
          return frame.debugElementStack = [], this.stack.push(frame), this.previousWasTextNode = !1, out;
        }, ReactDOMServerRenderer2;
      }();
      function renderToString2(element, options) {
        var renderer = new ReactDOMServerRenderer(element, !1, options);
        try {
          var markup = renderer.read(1 / 0);
          return markup;
        } finally {
          renderer.destroy();
        }
      }
      function renderToStaticMarkup(element, options) {
        var renderer = new ReactDOMServerRenderer(element, !0, options);
        try {
          var markup = renderer.read(1 / 0);
          return markup;
        } finally {
          renderer.destroy();
        }
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype), subClass.prototype.constructor = subClass, subClass.__proto__ = superClass;
      }
      var ReactMarkupReadableStream = /* @__PURE__ */ function(_Readable) {
        _inheritsLoose(ReactMarkupReadableStream2, _Readable);
        function ReactMarkupReadableStream2(element, makeStaticMarkup, options) {
          var _this;
          return _this = _Readable.call(this, {}) || this, _this.partialRenderer = new ReactDOMServerRenderer(element, makeStaticMarkup, options), _this;
        }
        var _proto = ReactMarkupReadableStream2.prototype;
        return _proto._destroy = function(err, callback) {
          this.partialRenderer.destroy(), callback(err);
        }, _proto._read = function(size) {
          try {
            this.push(this.partialRenderer.read(size));
          } catch (err) {
            this.destroy(err);
          }
        }, ReactMarkupReadableStream2;
      }(stream.Readable);
      function renderToNodeStream(element, options) {
        return new ReactMarkupReadableStream(element, !1, options);
      }
      function renderToStaticNodeStream(element, options) {
        return new ReactMarkupReadableStream(element, !0, options);
      }
      exports.renderToNodeStream = renderToNodeStream, exports.renderToStaticMarkup = renderToStaticMarkup, exports.renderToStaticNodeStream = renderToStaticNodeStream, exports.renderToString = renderToString2, exports.version = ReactVersion;
    })();
  }
});

// node_modules/react-dom/server.node.js
var require_server_node = __commonJS({
  "node_modules/react-dom/server.node.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_react_dom_server_node_development();
  }
});

// node_modules/react-dom/server.js
var require_server = __commonJS({
  "node_modules/react-dom/server.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_server_node();
  }
});

// node_modules/@emotion/sheet/dist/emotion-sheet.cjs.dev.js
var require_emotion_sheet_cjs_dev = __commonJS({
  "node_modules/@emotion/sheet/dist/emotion-sheet.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    function sheetForTag(tag) {
      if (tag.sheet)
        return tag.sheet;
      for (var i = 0; i < document.styleSheets.length; i++)
        if (document.styleSheets[i].ownerNode === tag)
          return document.styleSheets[i];
    }
    function createStyleElement(options) {
      var tag = document.createElement("style");
      return tag.setAttribute("data-emotion", options.key), options.nonce !== void 0 && tag.setAttribute("nonce", options.nonce), tag.appendChild(document.createTextNode("")), tag.setAttribute("data-s", ""), tag;
    }
    var StyleSheet = /* @__PURE__ */ function() {
      function StyleSheet2(options) {
        var _this = this;
        this._insertTag = function(tag) {
          var before;
          _this.tags.length === 0 ? _this.insertionPoint ? before = _this.insertionPoint.nextSibling : _this.prepend ? before = _this.container.firstChild : before = _this.before : before = _this.tags[_this.tags.length - 1].nextSibling, _this.container.insertBefore(tag, before), _this.tags.push(tag);
        }, this.isSpeedy = options.speedy === void 0 ? !1 : options.speedy, this.tags = [], this.ctr = 0, this.nonce = options.nonce, this.key = options.key, this.container = options.container, this.prepend = options.prepend, this.insertionPoint = options.insertionPoint, this.before = null;
      }
      var _proto = StyleSheet2.prototype;
      return _proto.hydrate = function(nodes) {
        nodes.forEach(this._insertTag);
      }, _proto.insert = function(rule) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(createStyleElement(this));
        var tag = this.tags[this.tags.length - 1], isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
        if (isImportRule && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule, this.isSpeedy) {
          var sheet = sheetForTag(tag);
          try {
            sheet.insertRule(rule, sheet.cssRules.length);
          } catch (e) {
            /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule) || console.error('There was a problem inserting the following rule: "' + rule + '"', e);
          }
        } else
          tag.appendChild(document.createTextNode(rule));
        this.ctr++;
      }, _proto.flush = function() {
        this.tags.forEach(function(tag) {
          return tag.parentNode && tag.parentNode.removeChild(tag);
        }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = !1;
      }, StyleSheet2;
    }();
    exports.StyleSheet = StyleSheet;
  }
});

// node_modules/@emotion/sheet/dist/emotion-sheet.cjs.js
var require_emotion_sheet_cjs = __commonJS({
  "node_modules/@emotion/sheet/dist/emotion-sheet.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_sheet_cjs_dev();
  }
});

// node_modules/stylis/dist/umd/stylis.js
var require_stylis = __commonJS({
  "node_modules/stylis/dist/umd/stylis.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    (function(e, r2) {
      typeof exports == "object" && typeof module < "u" ? r2(exports) : typeof define == "function" && define.amd ? define(["exports"], r2) : (e = e || self, r2(e.stylis = {}));
    })(exports, function(e) {
      "use strict";
      var r2 = "-ms-", a = "-moz-", c = "-webkit-", t = "comm", n = "rule", s = "decl", i = "@page", u = "@media", o = "@import", f = "@charset", l = "@viewport", h = "@supports", p = "@document", v = "@namespace", b = "@keyframes", d = "@font-face", m = "@counter-style", w = "@font-feature-values", k = Math.abs, $ = String.fromCharCode, g = Object.assign;
      function x(e2, r3) {
        return (((r3 << 2 ^ O(e2, 0)) << 2 ^ O(e2, 1)) << 2 ^ O(e2, 2)) << 2 ^ O(e2, 3);
      }
      function E(e2) {
        return e2.trim();
      }
      function y(e2, r3) {
        return (e2 = r3.exec(e2)) ? e2[0] : e2;
      }
      function T(e2, r3, a2) {
        return e2.replace(r3, a2);
      }
      function A(e2, r3) {
        return e2.indexOf(r3);
      }
      function O(e2, r3) {
        return e2.charCodeAt(r3) | 0;
      }
      function C(e2, r3, a2) {
        return e2.slice(r3, a2);
      }
      function M(e2) {
        return e2.length;
      }
      function S(e2) {
        return e2.length;
      }
      function R(e2, r3) {
        return r3.push(e2), e2;
      }
      function z(e2, r3) {
        return e2.map(r3).join("");
      }
      e.line = 1, e.column = 1, e.length = 0, e.position = 0, e.character = 0, e.characters = "";
      function N(r3, a2, c2, t2, n2, s2, i2) {
        return { value: r3, root: a2, parent: c2, type: t2, props: n2, children: s2, line: e.line, column: e.column, length: i2, return: "" };
      }
      function P(e2, r3) {
        return g(N("", null, null, "", null, null, 0), e2, { length: -e2.length }, r3);
      }
      function j() {
        return e.character;
      }
      function U() {
        return e.character = e.position > 0 ? O(e.characters, --e.position) : 0, e.column--, e.character === 10 && (e.column = 1, e.line--), e.character;
      }
      function _2() {
        return e.character = e.position < e.length ? O(e.characters, e.position++) : 0, e.column++, e.character === 10 && (e.column = 1, e.line++), e.character;
      }
      function F() {
        return O(e.characters, e.position);
      }
      function I() {
        return e.position;
      }
      function L(r3, a2) {
        return C(e.characters, r3, a2);
      }
      function D(e2) {
        switch (e2) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function K(r3) {
        return e.line = e.column = 1, e.length = M(e.characters = r3), e.position = 0, [];
      }
      function V(r3) {
        return e.characters = "", r3;
      }
      function W(r3) {
        return E(L(e.position - 1, Z(r3 === 91 ? r3 + 2 : r3 === 40 ? r3 + 1 : r3)));
      }
      function Y(e2) {
        return V(G(K(e2)));
      }
      function B(r3) {
        for (; (e.character = F()) && e.character < 33; )
          _2();
        return D(r3) > 2 || D(e.character) > 3 ? "" : " ";
      }
      function G(r3) {
        for (; _2(); )
          switch (D(e.character)) {
            case 0:
              R(J(e.position - 1), r3);
              break;
            case 2:
              R(W(e.character), r3);
              break;
            default:
              R($(e.character), r3);
          }
        return r3;
      }
      function H(r3, a2) {
        for (; --a2 && _2() && !(e.character < 48 || e.character > 102 || e.character > 57 && e.character < 65 || e.character > 70 && e.character < 97); )
          ;
        return L(r3, I() + (a2 < 6 && F() == 32 && _2() == 32));
      }
      function Z(r3) {
        for (; _2(); )
          switch (e.character) {
            case r3:
              return e.position;
            case 34:
            case 39:
              r3 !== 34 && r3 !== 39 && Z(e.character);
              break;
            case 40:
              r3 === 41 && Z(r3);
              break;
            case 92:
              _2();
              break;
          }
        return e.position;
      }
      function q(r3, a2) {
        for (; _2() && r3 + e.character !== 47 + 10; )
          if (r3 + e.character === 42 + 42 && F() === 47)
            break;
        return "/*" + L(a2, e.position - 1) + "*" + $(r3 === 47 ? r3 : _2());
      }
      function J(r3) {
        for (; !D(F()); )
          _2();
        return L(r3, e.position);
      }
      function Q(e2) {
        return V(X("", null, null, null, [""], e2 = K(e2), 0, [0], e2));
      }
      function X(e2, r3, a2, c2, t2, n2, s2, i2, u2) {
        for (var o2 = 0, f2 = 0, l2 = s2, h2 = 0, p2 = 0, v2 = 0, b2 = 1, d2 = 1, m2 = 1, w2 = 0, k2 = "", g2 = t2, x2 = n2, E2 = c2, y2 = k2; d2; )
          switch (v2 = w2, w2 = _2()) {
            case 40:
              if (v2 != 108 && y2.charCodeAt(l2 - 1) == 58) {
                A(y2 += T(W(w2), "&", "&\f"), "&\f") != -1 && (m2 = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              y2 += W(w2);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              y2 += B(v2);
              break;
            case 92:
              y2 += H(I() - 1, 7);
              continue;
            case 47:
              switch (F()) {
                case 42:
                case 47:
                  R(re(q(_2(), I()), r3, a2), u2);
                  break;
                default:
                  y2 += "/";
              }
              break;
            case 123 * b2:
              i2[o2++] = M(y2) * m2;
            case 125 * b2:
            case 59:
            case 0:
              switch (w2) {
                case 0:
                case 125:
                  d2 = 0;
                case 59 + f2:
                  p2 > 0 && M(y2) - l2 && R(p2 > 32 ? ae(y2 + ";", c2, a2, l2 - 1) : ae(T(y2, " ", "") + ";", c2, a2, l2 - 2), u2);
                  break;
                case 59:
                  y2 += ";";
                default:
                  if (R(E2 = ee(y2, r3, a2, o2, f2, t2, i2, k2, g2 = [], x2 = [], l2), n2), w2 === 123)
                    if (f2 === 0)
                      X(y2, r3, E2, E2, g2, n2, l2, i2, x2);
                    else
                      switch (h2) {
                        case 100:
                        case 109:
                        case 115:
                          X(e2, E2, E2, c2 && R(ee(e2, E2, E2, 0, 0, t2, i2, k2, t2, g2 = [], l2), x2), t2, x2, l2, i2, c2 ? g2 : x2);
                          break;
                        default:
                          X(y2, E2, E2, E2, [""], x2, 0, i2, x2);
                      }
              }
              o2 = f2 = p2 = 0, b2 = m2 = 1, k2 = y2 = "", l2 = s2;
              break;
            case 58:
              l2 = 1 + M(y2), p2 = v2;
            default:
              if (b2 < 1) {
                if (w2 == 123)
                  --b2;
                else if (w2 == 125 && b2++ == 0 && U() == 125)
                  continue;
              }
              switch (y2 += $(w2), w2 * b2) {
                case 38:
                  m2 = f2 > 0 ? 1 : (y2 += "\f", -1);
                  break;
                case 44:
                  i2[o2++] = (M(y2) - 1) * m2, m2 = 1;
                  break;
                case 64:
                  F() === 45 && (y2 += W(_2())), h2 = F(), f2 = l2 = M(k2 = y2 += J(I())), w2++;
                  break;
                case 45:
                  v2 === 45 && M(y2) == 2 && (b2 = 0);
              }
          }
        return n2;
      }
      function ee(e2, r3, a2, c2, t2, s2, i2, u2, o2, f2, l2) {
        for (var h2 = t2 - 1, p2 = t2 === 0 ? s2 : [""], v2 = S(p2), b2 = 0, d2 = 0, m2 = 0; b2 < c2; ++b2)
          for (var w2 = 0, $2 = C(e2, h2 + 1, h2 = k(d2 = i2[b2])), g2 = e2; w2 < v2; ++w2)
            (g2 = E(d2 > 0 ? p2[w2] + " " + $2 : T($2, /&\f/g, p2[w2]))) && (o2[m2++] = g2);
        return N(e2, r3, a2, t2 === 0 ? n : u2, o2, f2, l2);
      }
      function re(e2, r3, a2) {
        return N(e2, r3, a2, t, $(j()), C(e2, 2, -2), 0);
      }
      function ae(e2, r3, a2, c2) {
        return N(e2, r3, a2, s, C(e2, 0, c2), C(e2, c2 + 1, -1), c2);
      }
      function ce(e2, t2) {
        switch (x(e2, t2)) {
          case 5103:
            return c + "print-" + e2 + e2;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return c + e2 + e2;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return c + e2 + a + e2 + r2 + e2 + e2;
          case 6828:
          case 4268:
            return c + e2 + r2 + e2 + e2;
          case 6165:
            return c + e2 + r2 + "flex-" + e2 + e2;
          case 5187:
            return c + e2 + T(e2, /(\w+).+(:[^]+)/, c + "box-$1$2" + r2 + "flex-$1$2") + e2;
          case 5443:
            return c + e2 + r2 + "flex-item-" + T(e2, /flex-|-self/, "") + e2;
          case 4675:
            return c + e2 + r2 + "flex-line-pack" + T(e2, /align-content|flex-|-self/, "") + e2;
          case 5548:
            return c + e2 + r2 + T(e2, "shrink", "negative") + e2;
          case 5292:
            return c + e2 + r2 + T(e2, "basis", "preferred-size") + e2;
          case 6060:
            return c + "box-" + T(e2, "-grow", "") + c + e2 + r2 + T(e2, "grow", "positive") + e2;
          case 4554:
            return c + T(e2, /([^-])(transform)/g, "$1" + c + "$2") + e2;
          case 6187:
            return T(T(T(e2, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), e2, "") + e2;
          case 5495:
          case 3959:
            return T(e2, /(image-set\([^]*)/, c + "$1$`$1");
          case 4968:
            return T(T(e2, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + r2 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c + e2 + e2;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return T(e2, /(.+)-inline(.+)/, c + "$1$2") + e2;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (M(e2) - 1 - t2 > 6)
              switch (O(e2, t2 + 1)) {
                case 109:
                  if (O(e2, t2 + 4) !== 45)
                    break;
                case 102:
                  return T(e2, /(.+:)(.+)-([^]+)/, "$1" + c + "$2-$3$1" + a + (O(e2, t2 + 3) == 108 ? "$3" : "$2-$3")) + e2;
                case 115:
                  return ~A(e2, "stretch") ? ce(T(e2, "stretch", "fill-available"), t2) + e2 : e2;
              }
            break;
          case 4949:
            if (O(e2, t2 + 1) !== 115)
              break;
          case 6444:
            switch (O(e2, M(e2) - 3 - (~A(e2, "!important") && 10))) {
              case 107:
                return T(e2, ":", ":" + c) + e2;
              case 101:
                return T(e2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + c + (O(e2, 14) === 45 ? "inline-" : "") + "box$3$1" + c + "$2$3$1" + r2 + "$2box$3") + e2;
            }
            break;
          case 5936:
            switch (O(e2, t2 + 11)) {
              case 114:
                return c + e2 + r2 + T(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;
              case 108:
                return c + e2 + r2 + T(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;
              case 45:
                return c + e2 + r2 + T(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
            }
            return c + e2 + r2 + e2 + e2;
        }
        return e2;
      }
      function te(e2, r3) {
        for (var a2 = "", c2 = S(e2), t2 = 0; t2 < c2; t2++)
          a2 += r3(e2[t2], t2, e2, r3) || "";
        return a2;
      }
      function ne(e2, r3, a2, c2) {
        switch (e2.type) {
          case o:
          case s:
            return e2.return = e2.return || e2.value;
          case t:
            return "";
          case b:
            return e2.return = e2.value + "{" + te(e2.children, c2) + "}";
          case n:
            e2.value = e2.props.join(",");
        }
        return M(a2 = te(e2.children, c2)) ? e2.return = e2.value + "{" + a2 + "}" : "";
      }
      function se(e2) {
        var r3 = S(e2);
        return function(a2, c2, t2, n2) {
          for (var s2 = "", i2 = 0; i2 < r3; i2++)
            s2 += e2[i2](a2, c2, t2, n2) || "";
          return s2;
        };
      }
      function ie(e2) {
        return function(r3) {
          r3.root || (r3 = r3.return) && e2(r3);
        };
      }
      function ue(e2, t2, i2, u2) {
        if (e2.length > -1 && !e2.return)
          switch (e2.type) {
            case s:
              e2.return = ce(e2.value, e2.length);
              break;
            case b:
              return te([P(e2, { value: T(e2.value, "@", "@" + c) })], u2);
            case n:
              if (e2.length)
                return z(e2.props, function(t3) {
                  switch (y(t3, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                      return te([P(e2, { props: [T(t3, /:(read-\w+)/, ":" + a + "$1")] })], u2);
                    case "::placeholder":
                      return te([P(e2, { props: [T(t3, /:(plac\w+)/, ":" + c + "input-$1")] }), P(e2, { props: [T(t3, /:(plac\w+)/, ":" + a + "$1")] }), P(e2, { props: [T(t3, /:(plac\w+)/, r2 + "input-$1")] })], u2);
                  }
                  return "";
                });
          }
      }
      function oe(e2) {
        switch (e2.type) {
          case n:
            e2.props = e2.props.map(function(r3) {
              return z(Y(r3), function(r4, a2, c2) {
                switch (O(r4, 0)) {
                  case 12:
                    return C(r4, 1, M(r4));
                  case 0:
                  case 40:
                  case 43:
                  case 62:
                  case 126:
                    return r4;
                  case 58:
                    c2[++a2] === "global" && (c2[a2] = "", c2[++a2] = "\f" + C(c2[a2], a2 = 1, -1));
                  case 32:
                    return a2 === 1 ? "" : r4;
                  default:
                    switch (a2) {
                      case 0:
                        return e2 = r4, S(c2) > 1 ? "" : r4;
                      case (a2 = S(c2) - 1):
                      case 2:
                        return a2 === 2 ? r4 + e2 + e2 : r4 + e2;
                      default:
                        return r4;
                    }
                }
              });
            });
        }
      }
      e.CHARSET = f, e.COMMENT = t, e.COUNTER_STYLE = m, e.DECLARATION = s, e.DOCUMENT = p, e.FONT_FACE = d, e.FONT_FEATURE_VALUES = w, e.IMPORT = o, e.KEYFRAMES = b, e.MEDIA = u, e.MOZ = a, e.MS = r2, e.NAMESPACE = v, e.PAGE = i, e.RULESET = n, e.SUPPORTS = h, e.VIEWPORT = l, e.WEBKIT = c, e.abs = k, e.alloc = K, e.append = R, e.assign = g, e.caret = I, e.char = j, e.charat = O, e.combine = z, e.comment = re, e.commenter = q, e.compile = Q, e.copy = P, e.dealloc = V, e.declaration = ae, e.delimit = W, e.delimiter = Z, e.escaping = H, e.from = $, e.hash = x, e.identifier = J, e.indexof = A, e.match = y, e.middleware = se, e.namespace = oe, e.next = _2, e.node = N, e.parse = X, e.peek = F, e.prefix = ce, e.prefixer = ue, e.prev = U, e.replace = T, e.ruleset = ee, e.rulesheet = ie, e.serialize = te, e.sizeof = S, e.slice = L, e.stringify = ne, e.strlen = M, e.substr = C, e.token = D, e.tokenize = Y, e.tokenizer = G, e.trim = E, e.whitespace = B, Object.defineProperty(e, "__esModule", { value: !0 });
    });
  }
});

// node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.dev.js
var require_emotion_weak_memoize_cjs_dev = __commonJS({
  "node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var weakMemoize = function(func) {
      var cache = /* @__PURE__ */ new WeakMap();
      return function(arg) {
        if (cache.has(arg))
          return cache.get(arg);
        var ret = func(arg);
        return cache.set(arg, ret), ret;
      };
    };
    exports.default = weakMemoize;
  }
});

// node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.js
var require_emotion_weak_memoize_cjs = __commonJS({
  "node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_weak_memoize_cjs_dev();
  }
});

// node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js
var require_emotion_memoize_cjs_dev = __commonJS({
  "node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    function memoize2(fn) {
      var cache = /* @__PURE__ */ Object.create(null);
      return function(arg) {
        return cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg];
      };
    }
    exports.default = memoize2;
  }
});

// node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js
var require_emotion_memoize_cjs = __commonJS({
  "node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_memoize_cjs_dev();
  }
});

// node_modules/@emotion/cache/dist/emotion-cache.cjs.dev.js
var require_emotion_cache_cjs_dev = __commonJS({
  "node_modules/@emotion/cache/dist/emotion-cache.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var sheet = require_emotion_sheet_cjs(), stylis = require_stylis(), weakMemoize = require_emotion_weak_memoize_cjs(), memoize2 = require_emotion_memoize_cjs();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var weakMemoize__default = /* @__PURE__ */ _interopDefault(weakMemoize), memoize__default = /* @__PURE__ */ _interopDefault(memoize2), identifierWithPointTracking = function(begin, points, index) {
      for (var previous = 0, character = 0; previous = character, character = stylis.peek(), previous === 38 && character === 12 && (points[index] = 1), !stylis.token(character); )
        stylis.next();
      return stylis.slice(begin, stylis.position);
    }, toRules = function(parsed, points) {
      var index = -1, character = 44;
      do
        switch (stylis.token(character)) {
          case 0:
            character === 38 && stylis.peek() === 12 && (points[index] = 1), parsed[index] += identifierWithPointTracking(stylis.position - 1, points, index);
            break;
          case 2:
            parsed[index] += stylis.delimit(character);
            break;
          case 4:
            if (character === 44) {
              parsed[++index] = stylis.peek() === 58 ? "&\f" : "", points[index] = parsed[index].length;
              break;
            }
          default:
            parsed[index] += stylis.from(character);
        }
      while (character = stylis.next());
      return parsed;
    }, getRules = function(value, points) {
      return stylis.dealloc(toRules(stylis.alloc(value), points));
    }, fixedElements = /* @__PURE__ */ new WeakMap(), compat = function(element) {
      if (!(element.type !== "rule" || !element.parent || element.length < 1)) {
        for (var value = element.value, parent = element.parent, isImplicitRule = element.column === parent.column && element.line === parent.line; parent.type !== "rule"; )
          if (parent = parent.parent, !parent)
            return;
        if (!(element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) && !isImplicitRule) {
          fixedElements.set(element, !0);
          for (var points = [], rules = getRules(value, points), parentRules = parent.props, i = 0, k = 0; i < rules.length; i++)
            for (var j = 0; j < parentRules.length; j++, k++)
              element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
        }
      }
    }, removeLabel = function(element) {
      if (element.type === "decl") {
        var value = element.value;
        value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98 && (element.return = "", element.value = "");
      }
    }, ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", isIgnoringComment = function(element) {
      return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
    }, createUnsafeSelectorsAlarm = function(cache) {
      return function(element, index, children) {
        if (!(element.type !== "rule" || cache.compat)) {
          var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
          if (unsafePseudoClasses) {
            for (var isNested = element.parent === children[0], commentContainer = isNested ? children[0].children : children, i = commentContainer.length - 1; i >= 0; i--) {
              var node = commentContainer[i];
              if (node.line < element.line)
                break;
              if (node.column < element.column) {
                if (isIgnoringComment(node))
                  return;
                break;
              }
            }
            unsafePseudoClasses.forEach(function(unsafePseudoClass) {
              console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
            });
          }
        }
      };
    }, isImportRule = function(element) {
      return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
    }, isPrependedWithRegularRules = function(index, children) {
      for (var i = index - 1; i >= 0; i--)
        if (!isImportRule(children[i]))
          return !0;
      return !1;
    }, nullifyElement = function(element) {
      element.type = "", element.value = "", element.return = "", element.children = "", element.props = "";
    }, incorrectImportAlarm = function(element, index, children) {
      !isImportRule(element) || (element.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), nullifyElement(element)) : isPrependedWithRegularRules(index, children) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), nullifyElement(element)));
    }, isBrowser = typeof document < "u", getServerStylisCache = isBrowser ? void 0 : weakMemoize__default.default(function() {
      return memoize__default.default(function() {
        var cache = {};
        return function(name) {
          return cache[name];
        };
      });
    }), defaultStylisPlugins = [stylis.prefixer], createCache2 = function(options) {
      var key = options.key;
      if (!key)
        throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
      if (isBrowser && key === "css") {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(ssrStyles, function(node) {
          var dataEmotionAttribute = node.getAttribute("data-emotion");
          dataEmotionAttribute.indexOf(" ") !== -1 && (document.head.appendChild(node), node.setAttribute("data-s", ""));
        });
      }
      var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
      if (/[^a-z-]/.test(key))
        throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
      var inserted = {}, container, nodesToHydrate = [];
      isBrowser && (container = options.container || document.head, Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
        function(node) {
          for (var attrib = node.getAttribute("data-emotion").split(" "), i = 1; i < attrib.length; i++)
            inserted[attrib[i]] = !0;
          nodesToHydrate.push(node);
        }
      ));
      var _insert, omnipresentPlugins = [compat, removeLabel];
      if (omnipresentPlugins.push(createUnsafeSelectorsAlarm({
        get compat() {
          return cache.compat;
        }
      }), incorrectImportAlarm), isBrowser) {
        var currentSheet, finalizingPlugins = [stylis.stringify, function(element) {
          element.root || (element.return ? currentSheet.insert(element.return) : element.value && element.type !== stylis.COMMENT && currentSheet.insert(element.value + "{}"));
        }], serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)), stylis$1 = function(styles2) {
          return stylis.serialize(stylis.compile(styles2), serializer);
        };
        _insert = function(selector, serialized, sheet2, shouldCache) {
          currentSheet = sheet2, serialized.map !== void 0 && (currentSheet = {
            insert: function(rule) {
              sheet2.insert(rule + serialized.map);
            }
          }), stylis$1(selector ? selector + "{" + serialized.styles + "}" : serialized.styles), shouldCache && (cache.inserted[serialized.name] = !0);
        };
      } else {
        var _finalizingPlugins = [stylis.stringify], _serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins)), _stylis = function(styles2) {
          return stylis.serialize(stylis.compile(styles2), _serializer);
        }, serverStylisCache = getServerStylisCache(stylisPlugins)(key), getRules2 = function(selector, serialized) {
          var name = serialized.name;
          return serverStylisCache[name] === void 0 && (serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles)), serverStylisCache[name];
        };
        _insert = function(selector, serialized, sheet2, shouldCache) {
          var name = serialized.name, rules = getRules2(selector, serialized);
          if (cache.compat === void 0)
            return shouldCache && (cache.inserted[name] = !0), serialized.map !== void 0 ? rules + serialized.map : rules;
          if (shouldCache)
            cache.inserted[name] = rules;
          else
            return rules;
        };
      }
      var cache = {
        key,
        sheet: new sheet.StyleSheet({
          key,
          container,
          nonce: options.nonce,
          speedy: options.speedy,
          prepend: options.prepend,
          insertionPoint: options.insertionPoint
        }),
        nonce: options.nonce,
        inserted,
        registered: {},
        insert: _insert
      };
      return cache.sheet.hydrate(nodesToHydrate), cache;
    };
    exports.default = createCache2;
  }
});

// node_modules/@emotion/cache/dist/emotion-cache.cjs.js
var require_emotion_cache_cjs = __commonJS({
  "node_modules/@emotion/cache/dist/emotion-cache.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_cache_cjs_dev();
  }
});

// node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    function _extends5() {
      return module.exports = _extends5 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source)
            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
      }, module.exports.__esModule = !0, module.exports.default = module.exports, _extends5.apply(this, arguments);
    }
    module.exports = _extends5, module.exports.__esModule = !0, module.exports.default = module.exports;
  }
});

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.dev.js
var require_emotion_is_prop_valid_cjs_dev = __commonJS({
  "node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var memoize2 = require_emotion_memoize_cjs();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var memoize__default = /* @__PURE__ */ _interopDefault(memoize2), reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = /* @__PURE__ */ memoize__default.default(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
    );
    exports.default = isPropValid;
  }
});

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js
var require_emotion_is_prop_valid_cjs = __commonJS({
  "node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_is_prop_valid_cjs_dev();
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    (function() {
      "use strict";
      var hasSymbol2 = typeof Symbol == "function" && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol2 ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol2 ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol2 ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol2 ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol2 ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol2 ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol2 ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol2 ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol2 ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol2 ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol2 ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol2 ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol2 ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol2 ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol2 ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol2 ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type == "string" || typeof type == "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object == "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef2 = REACT_FORWARD_REF_TYPE, Fragment4 = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo2 = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
      function isAsyncMode(object) {
        return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef2, exports.Fragment = Fragment4, exports.Lazy = Lazy, exports.Memo = Memo2, exports.Portal = Portal, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, exports.typeOf = typeOf;
    })();
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_react_is_development();
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var reactIs = require_react_is(), REACT_STATICS = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0
    }, KNOWN_STATICS = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
    }, FORWARD_REF_STATICS = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0
    }, MEMO_STATICS = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    }, TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      return reactIs.isMemo(component) ? MEMO_STATICS : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getPrototypeOf = Object.getPrototypeOf, objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent != "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          inheritedComponent && inheritedComponent !== objectPrototype && hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
        var keys2 = getOwnPropertyNames(sourceComponent);
        getOwnPropertySymbols && (keys2 = keys2.concat(getOwnPropertySymbols(sourceComponent)));
        for (var targetStatics = getStatics(targetComponent), sourceStatics = getStatics(sourceComponent), i = 0; i < keys2.length; ++i) {
          var key = keys2[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.dev.js
var require_emotion_react_isolated_hnrs_cjs_dev = __commonJS({
  "node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var hoistNonReactStatics$1 = require_hoist_non_react_statics_cjs();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var hoistNonReactStatics__default = /* @__PURE__ */ _interopDefault(hoistNonReactStatics$1), hoistNonReactStatics = function(targetComponent, sourceComponent) {
      return hoistNonReactStatics__default.default(targetComponent, sourceComponent);
    };
    exports.default = hoistNonReactStatics;
  }
});

// node_modules/@emotion/utils/dist/emotion-utils.cjs.dev.js
var require_emotion_utils_cjs_dev = __commonJS({
  "node_modules/@emotion/utils/dist/emotion-utils.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var isBrowser = typeof document < "u";
    function getRegisteredStyles(registered, registeredStyles, classNames) {
      var rawClassName = "";
      return classNames.split(" ").forEach(function(className) {
        registered[className] !== void 0 ? registeredStyles.push(registered[className] + ";") : rawClassName += className + " ";
      }), rawClassName;
    }
    var registerStyles = function(cache, serialized, isStringTag2) {
      var className = cache.key + "-" + serialized.name;
      (isStringTag2 === !1 || isBrowser === !1 && cache.compat !== void 0) && cache.registered[className] === void 0 && (cache.registered[className] = serialized.styles);
    }, insertStyles = function(cache, serialized, isStringTag2) {
      registerStyles(cache, serialized, isStringTag2);
      var className = cache.key + "-" + serialized.name;
      if (cache.inserted[serialized.name] === void 0) {
        var stylesForSSR = "", current = serialized;
        do {
          var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, !0);
          !isBrowser && maybeStyles !== void 0 && (stylesForSSR += maybeStyles), current = current.next;
        } while (current !== void 0);
        if (!isBrowser && stylesForSSR.length !== 0)
          return stylesForSSR;
      }
    };
    exports.getRegisteredStyles = getRegisteredStyles;
    exports.insertStyles = insertStyles;
    exports.registerStyles = registerStyles;
  }
});

// node_modules/@emotion/utils/dist/emotion-utils.cjs.js
var require_emotion_utils_cjs = __commonJS({
  "node_modules/@emotion/utils/dist/emotion-utils.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_utils_cjs_dev();
  }
});

// node_modules/@emotion/hash/dist/emotion-hash.cjs.dev.js
var require_emotion_hash_cjs_dev = __commonJS({
  "node_modules/@emotion/hash/dist/emotion-hash.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    function murmur2(str) {
      for (var h = 0, k, i = 0, len = str.length; len >= 4; ++i, len -= 4)
        k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24, k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16), k ^= k >>> 24, h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
      switch (len) {
        case 3:
          h ^= (str.charCodeAt(i + 2) & 255) << 16;
        case 2:
          h ^= (str.charCodeAt(i + 1) & 255) << 8;
        case 1:
          h ^= str.charCodeAt(i) & 255, h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
      }
      return h ^= h >>> 13, h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16), ((h ^ h >>> 15) >>> 0).toString(36);
    }
    exports.default = murmur2;
  }
});

// node_modules/@emotion/hash/dist/emotion-hash.cjs.js
var require_emotion_hash_cjs = __commonJS({
  "node_modules/@emotion/hash/dist/emotion-hash.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_hash_cjs_dev();
  }
});

// node_modules/@emotion/unitless/dist/emotion-unitless.cjs.dev.js
var require_emotion_unitless_cjs_dev = __commonJS({
  "node_modules/@emotion/unitless/dist/emotion-unitless.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };
    exports.default = unitlessKeys;
  }
});

// node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js
var require_emotion_unitless_cjs = __commonJS({
  "node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_unitless_cjs_dev();
  }
});

// node_modules/@emotion/serialize/dist/emotion-serialize.cjs.dev.js
var require_emotion_serialize_cjs_dev = __commonJS({
  "node_modules/@emotion/serialize/dist/emotion-serialize.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var hashString = require_emotion_hash_cjs(), unitless = require_emotion_unitless_cjs(), memoize2 = require_emotion_memoize_cjs();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var hashString__default = /* @__PURE__ */ _interopDefault(hashString), unitless__default = /* @__PURE__ */ _interopDefault(unitless), memoize__default = /* @__PURE__ */ _interopDefault(memoize2), ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", hyphenateRegex = /[A-Z]|^ms/g, animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g, isCustomProperty = function(property) {
      return property.charCodeAt(1) === 45;
    }, isProcessableValue = function(value) {
      return value != null && typeof value != "boolean";
    }, processStyleName = /* @__PURE__ */ memoize__default.default(function(styleName) {
      return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
    }), processStyleValue = function(key, value) {
      switch (key) {
        case "animation":
        case "animationName":
          if (typeof value == "string")
            return value.replace(animationRegex, function(match, p1, p2) {
              return cursor = {
                name: p1,
                styles: p2,
                next: cursor
              }, p1;
            });
      }
      return unitless__default.default[key] !== 1 && !isCustomProperty(key) && typeof value == "number" && value !== 0 ? value + "px" : value;
    };
    contentValuePattern = /(var|attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, contentValues = ["normal", "none", "initial", "inherit", "unset"], oldProcessStyleValue = processStyleValue, msPattern = /^-ms-/, hyphenPattern = /-(.)/g, hyphenatedCache = {}, processStyleValue = function(key, value) {
      if (key === "content" && (typeof value != "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")))
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      var processed = oldProcessStyleValue(key, value);
      return processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0 && (hyphenatedCache[key] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?")), processed;
    };
    var contentValuePattern, contentValues, oldProcessStyleValue, msPattern, hyphenPattern, hyphenatedCache, noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
    function handleInterpolation(mergedProps, registered, interpolation) {
      if (interpolation == null)
        return "";
      if (interpolation.__emotion_styles !== void 0) {
        if (interpolation.toString() === "NO_COMPONENT_SELECTOR")
          throw new Error(noComponentSelectorMessage);
        return interpolation;
      }
      switch (typeof interpolation) {
        case "boolean":
          return "";
        case "object": {
          if (interpolation.anim === 1)
            return cursor = {
              name: interpolation.name,
              styles: interpolation.styles,
              next: cursor
            }, interpolation.name;
          if (interpolation.styles !== void 0) {
            var next = interpolation.next;
            if (next !== void 0)
              for (; next !== void 0; )
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                }, next = next.next;
            var styles2 = interpolation.styles + ";";
            return interpolation.map !== void 0 && (styles2 += interpolation.map), styles2;
          }
          return createStringFromObject(mergedProps, registered, interpolation);
        }
        case "function": {
          if (mergedProps !== void 0) {
            var previousCursor = cursor, result = interpolation(mergedProps);
            return cursor = previousCursor, handleInterpolation(mergedProps, registered, result);
          } else
            console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
          break;
        }
        case "string":
          var matched = [], replaced = interpolation.replace(animationRegex, function(match, p1, p2) {
            var fakeVarName = "animation" + matched.length;
            return matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + fakeVarName + "}";
          });
          matched.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + replaced + "`"));
          break;
      }
      if (registered == null)
        return interpolation;
      var cached = registered[interpolation];
      return cached !== void 0 ? cached : interpolation;
    }
    function createStringFromObject(mergedProps, registered, obj) {
      var string = "";
      if (Array.isArray(obj))
        for (var i = 0; i < obj.length; i++)
          string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      else
        for (var _key in obj) {
          var value = obj[_key];
          if (typeof value != "object")
            registered != null && registered[value] !== void 0 ? string += _key + "{" + registered[value] + "}" : isProcessableValue(value) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";");
          else {
            if (_key === "NO_COMPONENT_SELECTOR")
              throw new Error(noComponentSelectorMessage);
            if (Array.isArray(value) && typeof value[0] == "string" && (registered == null || registered[value[0]] === void 0))
              for (var _i = 0; _i < value.length; _i++)
                isProcessableValue(value[_i]) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";");
            else {
              var interpolated = handleInterpolation(mergedProps, registered, value);
              switch (_key) {
                case "animation":
                case "animationName": {
                  string += processStyleName(_key) + ":" + interpolated + ";";
                  break;
                }
                default:
                  _key === "undefined" && console.error(UNDEFINED_AS_OBJECT_KEY_ERROR), string += _key + "{" + interpolated + "}";
              }
            }
          }
        }
      return string;
    }
    var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g, sourceMapPattern;
    sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
    var cursor, serializeStyles = function(args, registered, mergedProps) {
      if (args.length === 1 && typeof args[0] == "object" && args[0] !== null && args[0].styles !== void 0)
        return args[0];
      var stringMode = !0, styles2 = "";
      cursor = void 0;
      var strings = args[0];
      strings == null || strings.raw === void 0 ? (stringMode = !1, styles2 += handleInterpolation(mergedProps, registered, strings)) : (strings[0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), styles2 += strings[0]);
      for (var i = 1; i < args.length; i++)
        styles2 += handleInterpolation(mergedProps, registered, args[i]), stringMode && (strings[i] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), styles2 += strings[i]);
      var sourceMap;
      styles2 = styles2.replace(sourceMapPattern, function(match2) {
        return sourceMap = match2, "";
      }), labelPattern.lastIndex = 0;
      for (var identifierName = "", match; (match = labelPattern.exec(styles2)) !== null; )
        identifierName += "-" + match[1];
      var name = hashString__default.default(styles2) + identifierName;
      return {
        name,
        styles: styles2,
        map: sourceMap,
        next: cursor,
        toString: function() {
          return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        }
      };
    };
    exports.serializeStyles = serializeStyles;
  }
});

// node_modules/@emotion/serialize/dist/emotion-serialize.cjs.js
var require_emotion_serialize_cjs = __commonJS({
  "node_modules/@emotion/serialize/dist/emotion-serialize.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_serialize_cjs_dev();
  }
});

// node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.dev.js
var require_emotion_use_insertion_effect_with_fallbacks_cjs_dev = __commonJS({
  "node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var React23 = require_react();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      return e && Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: !0,
            get: function() {
              return e[k];
            }
          });
        }
      }), n.default = e, Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React23), isBrowser = typeof document < "u", syncFallback = function(create) {
      return create();
    }, useInsertionEffect = React__namespace["useInsertionEffect"] ? React__namespace["useInsertionEffect"] : !1, useInsertionEffectAlwaysWithSyncFallback = isBrowser && useInsertionEffect || syncFallback, useInsertionEffectWithLayoutFallback = useInsertionEffect || React23.useLayoutEffect;
    exports.useInsertionEffectAlwaysWithSyncFallback = useInsertionEffectAlwaysWithSyncFallback;
    exports.useInsertionEffectWithLayoutFallback = useInsertionEffectWithLayoutFallback;
  }
});

// node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.js
var require_emotion_use_insertion_effect_with_fallbacks_cjs = __commonJS({
  "node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_use_insertion_effect_with_fallbacks_cjs_dev();
  }
});

// node_modules/@emotion/react/dist/emotion-element-b63ca7c6.cjs.dev.js
var require_emotion_element_b63ca7c6_cjs_dev = __commonJS({
  "node_modules/@emotion/react/dist/emotion-element-b63ca7c6.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var React23 = require_react(), createCache2 = require_emotion_cache_cjs(), _extends5 = require_extends(), weakMemoize = require_emotion_weak_memoize_cjs(), _isolatedHnrs_dist_emotionReact_isolatedHnrs = require_emotion_react_isolated_hnrs_cjs_dev(), utils = require_emotion_utils_cjs(), serialize2 = require_emotion_serialize_cjs(), useInsertionEffectWithFallbacks = require_emotion_use_insertion_effect_with_fallbacks_cjs();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var createCache__default = /* @__PURE__ */ _interopDefault(createCache2), weakMemoize__default = /* @__PURE__ */ _interopDefault(weakMemoize), isBrowser = typeof document < "u", hasOwnProperty2 = {}.hasOwnProperty, EmotionCacheContext = /* @__PURE__ */ React23.createContext(
      typeof HTMLElement < "u" ? /* @__PURE__ */ createCache__default.default({
        key: "css"
      }) : null
    );
    EmotionCacheContext.displayName = "EmotionCacheContext";
    var CacheProvider2 = EmotionCacheContext.Provider, __unsafe_useEmotionCache = function() {
      return React23.useContext(EmotionCacheContext);
    };
    exports.withEmotionCache = function(func) {
      return /* @__PURE__ */ React23.forwardRef(function(props, ref) {
        var cache = React23.useContext(EmotionCacheContext);
        return func(props, cache, ref);
      });
    };
    isBrowser || (exports.withEmotionCache = function(func) {
      return function(props) {
        var cache = React23.useContext(EmotionCacheContext);
        return cache === null ? (cache = createCache__default.default({
          key: "css"
        }), /* @__PURE__ */ React23.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache))) : func(props, cache);
      };
    });
    var ThemeContext3 = /* @__PURE__ */ React23.createContext({});
    ThemeContext3.displayName = "EmotionThemeContext";
    var useTheme5 = function() {
      return React23.useContext(ThemeContext3);
    }, getTheme = function(outerTheme, theme2) {
      if (typeof theme2 == "function") {
        var mergedTheme = theme2(outerTheme);
        if (mergedTheme == null || typeof mergedTheme != "object" || Array.isArray(mergedTheme))
          throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
        return mergedTheme;
      }
      if (theme2 == null || typeof theme2 != "object" || Array.isArray(theme2))
        throw new Error("[ThemeProvider] Please make your theme prop a plain object");
      return _extends5({}, outerTheme, theme2);
    }, createCacheWithTheme = /* @__PURE__ */ weakMemoize__default.default(function(outerTheme) {
      return weakMemoize__default.default(function(theme2) {
        return getTheme(outerTheme, theme2);
      });
    }), ThemeProvider3 = function(props) {
      var theme2 = React23.useContext(ThemeContext3);
      return props.theme !== theme2 && (theme2 = createCacheWithTheme(theme2)(props.theme)), /* @__PURE__ */ React23.createElement(ThemeContext3.Provider, {
        value: theme2
      }, props.children);
    };
    function withTheme(Component) {
      var componentName = Component.displayName || Component.name || "Component", render = function(props, ref) {
        var theme2 = React23.useContext(ThemeContext3);
        return /* @__PURE__ */ React23.createElement(Component, _extends5({
          theme: theme2,
          ref
        }, props));
      }, WithTheme = /* @__PURE__ */ React23.forwardRef(render);
      return WithTheme.displayName = "WithTheme(" + componentName + ")", _isolatedHnrs_dist_emotionReact_isolatedHnrs.default(WithTheme, Component);
    }
    var getLastPart = function(functionName) {
      var parts = functionName.split(".");
      return parts[parts.length - 1];
    }, getFunctionNameFromStackTraceLine = function(line) {
      var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
      if (match || (match = /^([A-Za-z0-9$.]+)@/.exec(line), match))
        return getLastPart(match[1]);
    }, internalReactFunctionNames = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), sanitizeIdentifier = function(identifier) {
      return identifier.replace(/\$/g, "-");
    }, getLabelFromStackTrace = function(stackTrace) {
      if (!!stackTrace)
        for (var lines = stackTrace.split(`
`), i = 0; i < lines.length; i++) {
          var functionName = getFunctionNameFromStackTraceLine(lines[i]);
          if (!!functionName) {
            if (internalReactFunctionNames.has(functionName))
              break;
            if (/^[A-Z]/.test(functionName))
              return sanitizeIdentifier(functionName);
          }
        }
    }, typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", createEmotionProps = function(type, props) {
      if (typeof props.css == "string" && props.css.indexOf(":") !== -1)
        throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
      var newProps = {};
      for (var key in props)
        hasOwnProperty2.call(props, key) && (newProps[key] = props[key]);
      if (newProps[typePropName] = type, !!props.css && (typeof props.css != "object" || typeof props.css.name != "string" || props.css.name.indexOf("-") === -1)) {
        var label = getLabelFromStackTrace(new Error().stack);
        label && (newProps[labelPropName] = label);
      }
      return newProps;
    }, Insertion = function(_ref) {
      var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
      utils.registerStyles(cache, serialized, isStringTag2);
      var rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function() {
        return utils.insertStyles(cache, serialized, isStringTag2);
      });
      if (!isBrowser && rules !== void 0) {
        for (var _ref2, serializedNames = serialized.name, next = serialized.next; next !== void 0; )
          serializedNames += " " + next.name, next = next.next;
        return /* @__PURE__ */ React23.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref2.nonce = cache.sheet.nonce, _ref2));
      }
      return null;
    }, Emotion = /* @__PURE__ */ exports.withEmotionCache(function(props, cache, ref) {
      var cssProp = props.css;
      typeof cssProp == "string" && cache.registered[cssProp] !== void 0 && (cssProp = cache.registered[cssProp]);
      var WrappedComponent = props[typePropName], registeredStyles = [cssProp], className = "";
      typeof props.className == "string" ? className = utils.getRegisteredStyles(cache.registered, registeredStyles, props.className) : props.className != null && (className = props.className + " ");
      var serialized = serialize2.serializeStyles(registeredStyles, void 0, React23.useContext(ThemeContext3));
      if (serialized.name.indexOf("-") === -1) {
        var labelFromStack = props[labelPropName];
        labelFromStack && (serialized = serialize2.serializeStyles([serialized, "label:" + labelFromStack + ";"]));
      }
      className += cache.key + "-" + serialized.name;
      var newProps = {};
      for (var key in props)
        hasOwnProperty2.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName && (newProps[key] = props[key]);
      return newProps.ref = ref, newProps.className = className, /* @__PURE__ */ React23.createElement(React23.Fragment, null, /* @__PURE__ */ React23.createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof WrappedComponent == "string"
      }), /* @__PURE__ */ React23.createElement(WrappedComponent, newProps));
    });
    Emotion.displayName = "EmotionCssPropInternal";
    exports.CacheProvider = CacheProvider2;
    exports.Emotion = Emotion;
    exports.ThemeContext = ThemeContext3;
    exports.ThemeProvider = ThemeProvider3;
    exports.__unsafe_useEmotionCache = __unsafe_useEmotionCache;
    exports.createEmotionProps = createEmotionProps;
    exports.hasOwnProperty = hasOwnProperty2;
    exports.isBrowser = isBrowser;
    exports.useTheme = useTheme5;
    exports.withTheme = withTheme;
  }
});

// node_modules/@emotion/react/dist/emotion-react.cjs.dev.js
var require_emotion_react_cjs_dev = __commonJS({
  "node_modules/@emotion/react/dist/emotion-react.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var React23 = require_react();
    require_emotion_cache_cjs();
    var emotionElement = require_emotion_element_b63ca7c6_cjs_dev();
    require_extends();
    require_emotion_weak_memoize_cjs();
    require_hoist_non_react_statics_cjs();
    require_emotion_react_isolated_hnrs_cjs_dev();
    var utils = require_emotion_utils_cjs(), serialize2 = require_emotion_serialize_cjs(), useInsertionEffectWithFallbacks = require_emotion_use_insertion_effect_with_fallbacks_cjs(), pkg = {
      name: "@emotion/react",
      version: "11.10.4",
      main: "dist/emotion-react.cjs.js",
      module: "dist/emotion-react.esm.js",
      browser: {
        "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
      },
      exports: {
        ".": {
          module: {
            worker: "./dist/emotion-react.worker.esm.js",
            browser: "./dist/emotion-react.browser.esm.js",
            default: "./dist/emotion-react.esm.js"
          },
          default: "./dist/emotion-react.cjs.js"
        },
        "./jsx-runtime": {
          module: {
            worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
            browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
            default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
          },
          default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
        },
        "./_isolated-hnrs": {
          module: {
            worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
            browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
            default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
          },
          default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
        },
        "./jsx-dev-runtime": {
          module: {
            worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
            browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
            default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
          },
          default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
        },
        "./package.json": "./package.json",
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      },
      types: "types/index.d.ts",
      files: [
        "src",
        "dist",
        "jsx-runtime",
        "jsx-dev-runtime",
        "_isolated-hnrs",
        "types/*.d.ts",
        "macro.js",
        "macro.d.ts",
        "macro.js.flow"
      ],
      sideEffects: !1,
      author: "Emotion Contributors",
      license: "MIT",
      scripts: {
        "test:typescript": "dtslint types"
      },
      dependencies: {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.10.0",
        "@emotion/cache": "^11.10.0",
        "@emotion/serialize": "^1.1.0",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
        "@emotion/utils": "^1.2.0",
        "@emotion/weak-memoize": "^0.3.0",
        "hoist-non-react-statics": "^3.3.1"
      },
      peerDependencies: {
        "@babel/core": "^7.0.0",
        react: ">=16.8.0"
      },
      peerDependenciesMeta: {
        "@babel/core": {
          optional: !0
        },
        "@types/react": {
          optional: !0
        }
      },
      devDependencies: {
        "@babel/core": "^7.18.5",
        "@definitelytyped/dtslint": "0.0.112",
        "@emotion/css": "11.10.0",
        "@emotion/css-prettifier": "1.1.0",
        "@emotion/server": "11.10.0",
        "@emotion/styled": "11.10.4",
        "html-tag-names": "^1.1.2",
        react: "16.14.0",
        "svg-tag-names": "^1.1.1",
        typescript: "^4.5.5"
      },
      repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
      publishConfig: {
        access: "public"
      },
      "umd:main": "dist/emotion-react.umd.min.js",
      preconstruct: {
        entrypoints: [
          "./index.js",
          "./jsx-runtime.js",
          "./jsx-dev-runtime.js",
          "./_isolated-hnrs.js"
        ],
        umdName: "emotionReact",
        exports: {
          envConditions: [
            "browser",
            "worker"
          ],
          extra: {
            "./types/css-prop": "./types/css-prop.d.ts",
            "./macro": "./macro.js"
          }
        }
      }
    }, jsx = function(type, props) {
      var args = arguments;
      if (props == null || !emotionElement.hasOwnProperty.call(props, "css"))
        return React23.createElement.apply(void 0, args);
      var argsLength = args.length, createElementArgArray = new Array(argsLength);
      createElementArgArray[0] = emotionElement.Emotion, createElementArgArray[1] = emotionElement.createEmotionProps(type, props);
      for (var i = 2; i < argsLength; i++)
        createElementArgArray[i] = args[i];
      return React23.createElement.apply(null, createElementArgArray);
    }, warnedAboutCssPropForGlobal = !1, Global2 = /* @__PURE__ */ emotionElement.withEmotionCache(function(props, cache) {
      !warnedAboutCssPropForGlobal && (props.className || props.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), warnedAboutCssPropForGlobal = !0);
      var styles2 = props.styles, serialized = serialize2.serializeStyles([styles2], void 0, React23.useContext(emotionElement.ThemeContext));
      if (!emotionElement.isBrowser) {
        for (var _ref, serializedNames = serialized.name, serializedStyles = serialized.styles, next = serialized.next; next !== void 0; )
          serializedNames += " " + next.name, serializedStyles += next.styles, next = next.next;
        var shouldCache = cache.compat === !0, rules = cache.insert("", {
          name: serializedNames,
          styles: serializedStyles
        }, cache.sheet, shouldCache);
        return shouldCache ? null : /* @__PURE__ */ React23.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref));
      }
      var sheetRef = React23.useRef();
      return useInsertionEffectWithFallbacks.useInsertionEffectWithLayoutFallback(function() {
        var key = cache.key + "-global", sheet = new cache.sheet.constructor({
          key,
          nonce: cache.sheet.nonce,
          container: cache.sheet.container,
          speedy: cache.sheet.isSpeedy
        }), rehydrating = !1, node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
        return cache.sheet.tags.length && (sheet.before = cache.sheet.tags[0]), node !== null && (rehydrating = !0, node.setAttribute("data-emotion", key), sheet.hydrate([node])), sheetRef.current = [sheet, rehydrating], function() {
          sheet.flush();
        };
      }, [cache]), useInsertionEffectWithFallbacks.useInsertionEffectWithLayoutFallback(function() {
        var sheetRefCurrent = sheetRef.current, sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
        if (rehydrating) {
          sheetRefCurrent[1] = !1;
          return;
        }
        if (serialized.next !== void 0 && utils.insertStyles(cache, serialized.next, !0), sheet.tags.length) {
          var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
          sheet.before = element, sheet.flush();
        }
        cache.insert("", serialized, sheet, !1);
      }, [cache, serialized.name]), null;
    });
    Global2.displayName = "EmotionGlobal";
    function css2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
        args[_key] = arguments[_key];
      return serialize2.serializeStyles(args);
    }
    var keyframes2 = function() {
      var insertable = css2.apply(void 0, arguments), name = "animation-" + insertable.name;
      return {
        name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function() {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
      };
    }, classnames = function classnames2(args) {
      for (var len = args.length, i = 0, cls = ""; i < len; i++) {
        var arg = args[i];
        if (arg != null) {
          var toAdd = void 0;
          switch (typeof arg) {
            case "boolean":
              break;
            case "object": {
              if (Array.isArray(arg))
                toAdd = classnames2(arg);
              else {
                arg.styles !== void 0 && arg.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), toAdd = "";
                for (var k in arg)
                  arg[k] && k && (toAdd && (toAdd += " "), toAdd += k);
              }
              break;
            }
            default:
              toAdd = arg;
          }
          toAdd && (cls && (cls += " "), cls += toAdd);
        }
      }
      return cls;
    };
    function merge2(registered, css3, className) {
      var registeredStyles = [], rawClassName = utils.getRegisteredStyles(registered, registeredStyles, className);
      return registeredStyles.length < 2 ? className : rawClassName + css3(registeredStyles);
    }
    var Insertion = function(_ref) {
      var cache = _ref.cache, serializedArr = _ref.serializedArr, rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function() {
        for (var rules2 = "", i = 0; i < serializedArr.length; i++) {
          var res = utils.insertStyles(cache, serializedArr[i], !1);
          !emotionElement.isBrowser && res !== void 0 && (rules2 += res);
        }
        if (!emotionElement.isBrowser)
          return rules2;
      });
      if (!emotionElement.isBrowser && rules.length !== 0) {
        var _ref2;
        return /* @__PURE__ */ React23.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function(serialized) {
          return serialized.name;
        }).join(" "), _ref2.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref2.nonce = cache.sheet.nonce, _ref2));
      }
      return null;
    }, ClassNames = /* @__PURE__ */ emotionElement.withEmotionCache(function(props, cache) {
      var hasRendered = !1, serializedArr = [], css3 = function() {
        if (hasRendered)
          throw new Error("css can only be used during render");
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
          args[_key] = arguments[_key];
        var serialized = serialize2.serializeStyles(args, cache.registered);
        return serializedArr.push(serialized), utils.registerStyles(cache, serialized, !1), cache.key + "-" + serialized.name;
      }, cx = function() {
        if (hasRendered)
          throw new Error("cx can only be used during render");
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
          args[_key2] = arguments[_key2];
        return merge2(cache.registered, css3, classnames(args));
      }, content = {
        css: css3,
        cx,
        theme: React23.useContext(emotionElement.ThemeContext)
      }, ele = props.children(content);
      return hasRendered = !0, /* @__PURE__ */ React23.createElement(React23.Fragment, null, /* @__PURE__ */ React23.createElement(Insertion, {
        cache,
        serializedArr
      }), ele);
    });
    ClassNames.displayName = "EmotionClassNames";
    isBrowser = typeof document < "u", isJest = typeof jest < "u", isBrowser && !isJest && (globalContext = typeof globalThis < "u" ? globalThis : isBrowser ? window : globalThis, globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__", globalContext[globalKey] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), globalContext[globalKey] = !0);
    var isBrowser, isJest, globalContext, globalKey;
    exports.CacheProvider = emotionElement.CacheProvider;
    exports.ThemeContext = emotionElement.ThemeContext;
    exports.ThemeProvider = emotionElement.ThemeProvider;
    exports.__unsafe_useEmotionCache = emotionElement.__unsafe_useEmotionCache;
    exports.useTheme = emotionElement.useTheme;
    Object.defineProperty(exports, "withEmotionCache", {
      enumerable: !0,
      get: function() {
        return emotionElement.withEmotionCache;
      }
    });
    exports.withTheme = emotionElement.withTheme;
    exports.ClassNames = ClassNames;
    exports.Global = Global2;
    exports.createElement = jsx;
    exports.css = css2;
    exports.jsx = jsx;
    exports.keyframes = keyframes2;
  }
});

// node_modules/@emotion/react/dist/emotion-react.cjs.js
var require_emotion_react_cjs = __commonJS({
  "node_modules/@emotion/react/dist/emotion-react.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_react_cjs_dev();
  }
});

// node_modules/@emotion/styled/base/dist/emotion-styled-base.cjs.dev.js
var require_emotion_styled_base_cjs_dev = __commonJS({
  "node_modules/@emotion/styled/base/dist/emotion-styled-base.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var _extends5 = require_extends(), React23 = require_react(), isPropValid = require_emotion_is_prop_valid_cjs(), react = require_emotion_react_cjs(), utils = require_emotion_utils_cjs(), serialize2 = require_emotion_serialize_cjs(), useInsertionEffectWithFallbacks = require_emotion_use_insertion_effect_with_fallbacks_cjs();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var isPropValid__default = /* @__PURE__ */ _interopDefault(isPropValid), testOmitPropsOnStringTag = isPropValid__default.default, testOmitPropsOnComponent = function(key) {
      return key !== "theme";
    }, getDefaultShouldForwardProp = function(tag) {
      return typeof tag == "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
    }, composeShouldForwardProps = function(tag, options, isReal) {
      var shouldForwardProp2;
      if (options) {
        var optionsShouldForwardProp = options.shouldForwardProp;
        shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
          return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
        } : optionsShouldForwardProp;
      }
      return typeof shouldForwardProp2 != "function" && isReal && (shouldForwardProp2 = tag.__emotion_forwardProp), shouldForwardProp2;
    }, ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, isBrowser = typeof document < "u", Insertion = function(_ref) {
      var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
      utils.registerStyles(cache, serialized, isStringTag2);
      var rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function() {
        return utils.insertStyles(cache, serialized, isStringTag2);
      });
      if (!isBrowser && rules !== void 0) {
        for (var _ref2, serializedNames = serialized.name, next = serialized.next; next !== void 0; )
          serializedNames += " " + next.name, next = next.next;
        return /* @__PURE__ */ React23.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref2.nonce = cache.sheet.nonce, _ref2));
      }
      return null;
    }, createStyled2 = function createStyled3(tag, options) {
      if (tag === void 0)
        throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
      var isReal = tag.__emotion_real === tag, baseTag = isReal && tag.__emotion_base || tag, identifierName, targetClassName;
      options !== void 0 && (identifierName = options.label, targetClassName = options.target);
      var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal), defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag), shouldUseAs = !defaultShouldForwardProp("as");
      return function() {
        var args = arguments, styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
        if (identifierName !== void 0 && styles2.push("label:" + identifierName + ";"), args[0] == null || args[0].raw === void 0)
          styles2.push.apply(styles2, args);
        else {
          args[0][0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), styles2.push(args[0][0]);
          for (var len = args.length, i = 1; i < len; i++)
            args[0][i] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), styles2.push(args[i], args[0][i]);
        }
        var Styled = react.withEmotionCache(function(props, cache, ref) {
          var FinalTag = shouldUseAs && props.as || baseTag, className = "", classInterpolations = [], mergedProps = props;
          if (props.theme == null) {
            mergedProps = {};
            for (var key in props)
              mergedProps[key] = props[key];
            mergedProps.theme = React23.useContext(react.ThemeContext);
          }
          typeof props.className == "string" ? className = utils.getRegisteredStyles(cache.registered, classInterpolations, props.className) : props.className != null && (className = props.className + " ");
          var serialized = serialize2.serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
          className += cache.key + "-" + serialized.name, targetClassName !== void 0 && (className += " " + targetClassName);
          var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp, newProps = {};
          for (var _key in props)
            shouldUseAs && _key === "as" || finalShouldForwardProp(_key) && (newProps[_key] = props[_key]);
          return newProps.className = className, newProps.ref = ref, /* @__PURE__ */ React23.createElement(React23.Fragment, null, /* @__PURE__ */ React23.createElement(Insertion, {
            cache,
            serialized,
            isStringTag: typeof FinalTag == "string"
          }), /* @__PURE__ */ React23.createElement(FinalTag, newProps));
        });
        return Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag == "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")", Styled.defaultProps = tag.defaultProps, Styled.__emotion_real = Styled, Styled.__emotion_base = baseTag, Styled.__emotion_styles = styles2, Styled.__emotion_forwardProp = shouldForwardProp2, Object.defineProperty(Styled, "toString", {
          value: function() {
            return targetClassName === void 0 ? "NO_COMPONENT_SELECTOR" : "." + targetClassName;
          }
        }), Styled.withComponent = function(nextTag, nextOptions) {
          return createStyled3(nextTag, _extends5({}, options, nextOptions, {
            shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, !0)
          })).apply(void 0, styles2);
        }, Styled;
      };
    };
    exports.default = createStyled2;
  }
});

// node_modules/@emotion/styled/dist/emotion-styled.cjs.dev.js
var require_emotion_styled_cjs_dev = __commonJS({
  "node_modules/@emotion/styled/dist/emotion-styled.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    require_extends();
    require_react();
    require_emotion_is_prop_valid_cjs();
    var base_dist_emotionStyledBase = require_emotion_styled_base_cjs_dev();
    require_emotion_react_cjs();
    require_emotion_utils_cjs();
    require_emotion_serialize_cjs();
    require_emotion_use_insertion_effect_with_fallbacks_cjs();
    var tags = [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan"
    ], newStyled = base_dist_emotionStyledBase.default.bind();
    tags.forEach(function(tagName) {
      newStyled[tagName] = newStyled(tagName);
    });
    exports.default = newStyled;
  }
});

// node_modules/@emotion/styled/dist/emotion-styled.cjs.js
var require_emotion_styled_cjs = __commonJS({
  "node_modules/@emotion/styled/dist/emotion-styled.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_styled_cjs_dev();
  }
});

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    (function() {
      "use strict";
      var hasSymbol2 = typeof Symbol == "function" && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol2 ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol2 ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol2 ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol2 ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol2 ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol2 ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol2 ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol2 ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol2 ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol2 ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol2 ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol2 ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol2 ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol2 ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol2 ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol2 ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type == "string" || typeof type == "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object == "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef2 = REACT_FORWARD_REF_TYPE, Fragment4 = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo2 = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
      function isAsyncMode(object) {
        return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef2, exports.Fragment = Fragment4, exports.Lazy = Lazy, exports.Memo = Memo2, exports.Portal = Portal, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, exports.typeOf = typeOf;
    })();
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_react_is_development2();
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var printWarning = function() {
    };
    ReactPropTypesSecret = require_ReactPropTypesSecret(), loggedTypeFailures = {}, has = require_has(), printWarning = function(text) {
      var message = "Warning: " + text;
      typeof console < "u" && console.error(message);
      try {
        throw new Error(message);
      } catch {
      }
    };
    var ReactPropTypesSecret, loggedTypeFailures, has;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      for (var typeSpecName in typeSpecs)
        if (has(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] != "function") {
              var err = Error(
                (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw err.name = "Invariant Violation", err;
            }
            error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error) && printWarning(
            (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = !0;
            var stack = getStack ? getStack() : "";
            printWarning(
              "Failed " + location + " type: " + error.message + (stack ?? "")
            );
          }
        }
    }
    checkPropTypes.resetWarningCache = function() {
      loggedTypeFailures = {};
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var ReactIs = require_react_is2(), assign = require_object_assign(), ReactPropTypesSecret = require_ReactPropTypesSecret(), has = require_has(), checkPropTypes = require_checkPropTypes(), printWarning = function() {
    };
    printWarning = function(text) {
      var message = "Warning: " + text;
      typeof console < "u" && console.error(message);
      try {
        throw new Error(message);
      } catch {
      }
    };
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement2, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol == "function" && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn == "function")
          return iteratorFn;
      }
      var ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
      }
      function PropTypeError(message, data) {
        this.message = message, this.data = data && typeof data == "object" ? data : {}, this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0;
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw err.name = "Invariant Violation", err;
            } else if (typeof console < "u") {
              var cacheKey = componentName + ":" + propName;
              !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning(
                "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
              ), manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
            }
          }
          return props[propName] == null ? isRequired ? props[propName] === null ? new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`.")) : new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`.")) : null : validate(props, propName, componentName, location, propFullName);
        }
        var chainedCheckType = checkType.bind(null, !1);
        return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName], propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker != "function")
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error)
              return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement2(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS, actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues))
          return arguments.length > 1 ? printWarning(
            "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
          ) : printWarning("Invalid argument supplied to oneOf, expected an array."), emptyFunctionThatReturnsNull;
        function validate(props, propName, componentName, location, propFullName) {
          for (var propValue = props[propName], i = 0; i < expectedValues.length; i++)
            if (is(propValue, expectedValues[i]))
              return null;
          var valuesString = JSON.stringify(expectedValues, function(key, value) {
            var type = getPreciseType(value);
            return type === "symbol" ? String(value) : value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker != "function")
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          var propValue = props[propName], propType = getPropType(propValue);
          if (propType !== "object")
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          for (var key in propValue)
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error)
                return error;
            }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers))
          return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), emptyFunctionThatReturnsNull;
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker != "function")
            return printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            ), emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var expectedTypes = [], i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2], checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null)
              return null;
            checkerResult.data && has(checkerResult.data, "expectedType") && expectedTypes.push(checkerResult.data.expectedType);
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName], propType = getPropType(propValue);
          if (propType !== "object")
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker != "function")
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error)
              return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName], propType = getPropType(propValue);
          if (propType !== "object")
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker != "function")
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            if (!checker)
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error)
              return error;
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return !0;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue))
              return propValue.every(isNode);
            if (propValue === null || isValidElement2(propValue))
              return !0;
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue), step;
              if (iteratorFn !== propValue.entries) {
                for (; !(step = iterator.next()).done; )
                  if (!isNode(step.value))
                    return !1;
              } else
                for (; !(step = iterator.next()).done; ) {
                  var entry2 = step.value;
                  if (entry2 && !isNode(entry2[1]))
                    return !1;
                }
            } else
              return !1;
            return !0;
          default:
            return !1;
        }
      }
      function isSymbol2(propType, propValue) {
        return propType === "symbol" ? !0 : propValue ? propValue["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && propValue instanceof Symbol : !1;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol2(propType, propValue) ? "symbol" : propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue > "u" || propValue === null)
          return "" + propValue;
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date)
            return "date";
          if (propValue instanceof RegExp)
            return "regexp";
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        return !propValue.constructor || !propValue.constructor.name ? ANONYMOUS : propValue.constructor.name;
      }
      return ReactPropTypes.checkPropTypes = checkPropTypes, ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    ReactIs = require_react_is2(), throwOnDirectAccess = !0, module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    var ReactIs, throwOnDirectAccess;
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    (function() {
      "use strict";
      var React23 = require_react(), _assign = require_object_assign(), REACT_ELEMENT_TYPE = 60103, REACT_PORTAL_TYPE = 60106;
      exports.Fragment = 60107;
      var REACT_STRICT_MODE_TYPE = 60108, REACT_PROFILER_TYPE = 60114, REACT_PROVIDER_TYPE = 60109, REACT_CONTEXT_TYPE = 60110, REACT_FORWARD_REF_TYPE = 60112, REACT_SUSPENSE_TYPE = 60113, REACT_SUSPENSE_LIST_TYPE = 60120, REACT_MEMO_TYPE = 60115, REACT_LAZY_TYPE = 60116, REACT_BLOCK_TYPE = 60121, REACT_SERVER_BLOCK_TYPE = 60122, REACT_FUNDAMENTAL_TYPE = 60117, REACT_SCOPE_TYPE = 60119, REACT_OPAQUE_ID_TYPE = 60128, REACT_DEBUG_TRACING_MODE_TYPE = 60129, REACT_OFFSCREEN_TYPE = 60130, REACT_LEGACY_HIDDEN_TYPE = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element"), REACT_PORTAL_TYPE = symbolFor("react.portal"), exports.Fragment = symbolFor("react.fragment"), REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode"), REACT_PROFILER_TYPE = symbolFor("react.profiler"), REACT_PROVIDER_TYPE = symbolFor("react.provider"), REACT_CONTEXT_TYPE = symbolFor("react.context"), REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref"), REACT_SUSPENSE_TYPE = symbolFor("react.suspense"), REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list"), REACT_MEMO_TYPE = symbolFor("react.memo"), REACT_LAZY_TYPE = symbolFor("react.lazy"), REACT_BLOCK_TYPE = symbolFor("react.block"), REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block"), REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental"), REACT_SCOPE_TYPE = symbolFor("react.scope"), REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id"), REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode"), REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen"), REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
      }
      var MAYBE_ITERATOR_SYMBOL = typeof Symbol == "function" && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable != "object")
          return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        return typeof maybeIterator == "function" ? maybeIterator : null;
      }
      var ReactSharedInternals = React23.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format2) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
            args[_key2 - 1] = arguments[_key2];
          printWarning("error", format2, args);
        }
      }
      function printWarning(level, format2, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame, stack = ReactDebugCurrentFrame2.getStackAddendum();
          stack !== "" && (format2 += "%s", args = args.concat([stack]));
          var argsWithFormat = args.map(function(item) {
            return "" + item;
          });
          argsWithFormat.unshift("Warning: " + format2), Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = !1;
      function isValidElementType(type) {
        return !!(typeof type == "string" || typeof type == "function" || type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE));
      }
      function getWrappedName2(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentName(type) {
        if (type == null)
          return null;
        if (typeof type.tag == "number" && error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof type == "function")
          return type.displayName || type.name || null;
        if (typeof type == "string")
          return type;
        switch (type) {
          case exports.Fragment:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName2(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
              return getComponentName(type._render);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init3 = lazyComponent._init;
              try {
                return getComponentName(init3(payload));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = !0;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log, prevInfo = console.info, prevWarn = console.warn, prevError = console.error, prevGroup = console.group, prevGroupCollapsed = console.groupCollapsed, prevGroupEnd = console.groupEnd;
            var props = {
              configurable: !0,
              enumerable: !0,
              value: disabledLog,
              writable: !0
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          if (disabledDepth--, disabledDepth === 0) {
            var props = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: _assign({}, props, {
                value: prevLog
              }),
              info: _assign({}, props, {
                value: prevInfo
              }),
              warn: _assign({}, props, {
                value: prevWarn
              }),
              error: _assign({}, props, {
                value: prevError
              }),
              group: _assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: _assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: _assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          disabledDepth < 0 && error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher, prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          return `
` + prefix + name;
        }
      }
      var reentry = !1, componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap == "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry)
          return "";
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0)
            return frame;
        }
        var control;
        reentry = !0;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current, ReactCurrentDispatcher.current = null, disableLogs();
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            if (Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack == "string") {
            for (var sampleLines = sample.stack.split(`
`), controlLines = control.stack.split(`
`), s = sampleLines.length - 1, c = controlLines.length - 1; s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]; )
              c--;
            for (; s >= 1 && c >= 0; s--, c--)
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1)
                  do
                    if (s--, c--, c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = `
` + sampleLines[s].replace(" at new ", " at ");
                      return typeof fn == "function" && componentFrameCache.set(fn, _frame), _frame;
                    }
                  while (s >= 1 && c >= 0);
                break;
              }
          }
        } finally {
          reentry = !1, ReactCurrentDispatcher.current = previousDispatcher, reenableLogs(), Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "", syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        return typeof fn == "function" && componentFrameCache.set(fn, syntheticFrame), syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, !1);
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null)
          return "";
        if (typeof type == "function")
          return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type == "string")
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_BLOCK_TYPE:
              return describeFunctionComponentFrame(type._render);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init3 = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init3(payload), source, ownerFn);
              } catch {
              }
            }
          }
        return "";
      }
      var loggedTypeFailures = {}, ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame.setExtraStackFrame(null);
      }
      function checkPropTypes(typeSpecs, values2, location, componentName, element) {
        {
          var has = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var typeSpecName in typeSpecs)
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] != "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw err.name = "Invariant Violation", err;
                }
                error$1 = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              error$1 && !(error$1 instanceof Error) && (setCurrentlyValidatingElement(element), error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1), setCurrentlyValidatingElement(null)), error$1 instanceof Error && !(error$1.message in loggedTypeFailures) && (loggedTypeFailures[error$1.message] = !0, setCurrentlyValidatingElement(element), error("Failed %s type: %s", location, error$1.message), setCurrentlyValidatingElement(null));
            }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner, hasOwnProperty2 = Object.prototype.hasOwnProperty, RESERVED_PROPS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
      didWarnAboutStringRefs = {};
      function hasValidRef(config3) {
        if (hasOwnProperty2.call(config3, "ref")) {
          var getter = Object.getOwnPropertyDescriptor(config3, "ref").get;
          if (getter && getter.isReactWarning)
            return !1;
        }
        return config3.ref !== void 0;
      }
      function hasValidKey(config3) {
        if (hasOwnProperty2.call(config3, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config3, "key").get;
          if (getter && getter.isReactWarning)
            return !1;
        }
        return config3.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config3, self2) {
        if (typeof config3.ref == "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);
          didWarnAboutStringRefs[componentName] || (error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config3.ref), didWarnAboutStringRefs[componentName] = !0);
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName));
          };
          warnAboutAccessingKey.isReactWarning = !0, Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            specialPropRefWarningShown || (specialPropRefWarningShown = !0, error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName));
          };
          warnAboutAccessingRef.isReactWarning = !0, Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: !0
          });
        }
      }
      var ReactElement = function(type, key, ref, self2, source, owner, props) {
        var element = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: owner
        };
        return element._store = {}, Object.defineProperty(element._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(element, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: self2
        }), Object.defineProperty(element, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: source
        }), Object.freeze && (Object.freeze(element.props), Object.freeze(element)), element;
      };
      function jsxDEV6(type, config3, maybeKey, source, self2) {
        {
          var propName, props = {}, key = null, ref = null;
          maybeKey !== void 0 && (key = "" + maybeKey), hasValidKey(config3) && (key = "" + config3.key), hasValidRef(config3) && (ref = config3.ref, warnIfStringRefCannotBeAutoConverted(config3, self2));
          for (propName in config3)
            hasOwnProperty2.call(config3, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (props[propName] = config3[propName]);
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps)
              props[propName] === void 0 && (props[propName] = defaultProps[propName]);
          }
          if (key || ref) {
            var displayName = typeof type == "function" ? type.displayName || type.name || "Unknown" : type;
            key && defineKeyPropWarningGetter(props, displayName), ref && defineRefPropWarningGetter(props, displayName);
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner, ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
      }
      var propTypesMisspellWarningShown;
      propTypesMisspellWarningShown = !1;
      function isValidElement2(object) {
        return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentName(ReactCurrentOwner$1.current.type);
            if (name)
              return `

Check the render method of \`` + name + "`.";
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, ""), lineNumber = source.lineNumber;
            return `

Check your code at ` + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType == "string" ? parentType : parentType.displayName || parentType.name;
            parentName && (info = `

Check the top-level render call using <` + parentName + ">.");
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null)
            return;
          element._store.validated = !0;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo])
            return;
          ownerHasKeyUseWarning[currentComponentErrorInfo] = !0;
          var childOwner = "";
          element && element._owner && element._owner !== ReactCurrentOwner$1.current && (childOwner = " It was passed a child from " + getComponentName(element._owner.type) + "."), setCurrentlyValidatingElement$1(element), error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner), setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node != "object")
            return;
          if (Array.isArray(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement2(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement2(node))
            node._store && (node._store.validated = !0);
          else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn == "function" && iteratorFn !== node.entries)
              for (var iterator = iteratorFn.call(node), step; !(step = iterator.next()).done; )
                isValidElement2(step.value) && validateExplicitKey(step.value, parentType);
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type == null || typeof type == "string")
            return;
          var propTypes;
          if (typeof type == "function")
            propTypes = type.propTypes;
          else if (typeof type == "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE))
            propTypes = type.propTypes;
          else
            return;
          if (propTypes) {
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = !0;
            var _name = getComponentName(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          typeof type.getDefaultProps == "function" && !type.getDefaultProps.isReactClassApproved && error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function validateFragmentProps(fragment) {
        {
          for (var keys2 = Object.keys(fragment.props), i = 0; i < keys2.length; i++) {
            var key = keys2[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment), error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key), setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          fragment.ref !== null && (setCurrentlyValidatingElement$1(fragment), error("Invalid attribute `ref` supplied to `React.Fragment`."), setCurrentlyValidatingElement$1(null));
        }
      }
      function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            (type === void 0 || typeof type == "object" && type !== null && Object.keys(type).length === 0) && (info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sourceInfo = getSourceInfoErrorAddendum(source);
            sourceInfo ? info += sourceInfo : info += getDeclarationErrorAddendum();
            var typeString;
            type === null ? typeString = "null" : Array.isArray(type) ? typeString = "array" : type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentName(type.type) || "Unknown") + " />", info = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type, error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV6(type, props, key, source, self2);
          if (element == null)
            return element;
          if (validType) {
            var children = props.children;
            if (children !== void 0)
              if (isStaticChildren)
                if (Array.isArray(children)) {
                  for (var i = 0; i < children.length; i++)
                    validateChildKeys(children[i], type);
                  Object.freeze && Object.freeze(children);
                } else
                  error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                validateChildKeys(children, type);
          }
          return type === exports.Fragment ? validateFragmentProps(element) : validatePropTypes(element), element;
        }
      }
      function jsxWithValidationStatic(type, props, key) {
        return jsxWithValidation(type, props, key, !0);
      }
      function jsxWithValidationDynamic(type, props, key) {
        return jsxWithValidation(type, props, key, !1);
      }
      var jsx = jsxWithValidationDynamic, jsxs = jsxWithValidationStatic;
      exports.jsx = jsx, exports.jsxs = jsxs;
    })();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_react_jsx_runtime_development();
  }
});

// node_modules/@mui/utils/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development3 = __commonJS({
  "node_modules/@mui/utils/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    (function() {
      "use strict";
      var REACT_ELEMENT_TYPE = Symbol.for("react.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), enableScopeAPI = !1, enableCacheElement = !1, enableTransitionTracing = !1, enableLegacyHidden = !1, enableDebugTracing = !1, REACT_MODULE_REFERENCE;
      REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      function isValidElementType(type) {
        return !!(typeof type == "string" || typeof type == "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0));
      }
      function typeOf(object) {
        if (typeof object == "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_SERVER_CONTEXT_TYPE:
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef2 = REACT_FORWARD_REF_TYPE, Fragment4 = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo2 = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, SuspenseList = REACT_SUSPENSE_LIST_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1, hasWarnedAboutDeprecatedIsConcurrentMode = !1;
      function isAsyncMode(object) {
        return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
      }
      function isConcurrentMode(object) {
        return hasWarnedAboutDeprecatedIsConcurrentMode || (hasWarnedAboutDeprecatedIsConcurrentMode = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      function isSuspenseList(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      }
      exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef2, exports.Fragment = Fragment4, exports.Lazy = Lazy, exports.Memo = Memo2, exports.Portal = Portal, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.SuspenseList = SuspenseList, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isSuspenseList = isSuspenseList, exports.isValidElementType = isValidElementType, exports.typeOf = typeOf;
    })();
  }
});

// node_modules/@mui/utils/node_modules/react-is/index.js
var require_react_is3 = __commonJS({
  "node_modules/@mui/utils/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_react_is_development3();
  }
});

// node_modules/through/index.js
var require_through = __commonJS({
  "node_modules/through/index.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var Stream2 = require_stream();
    exports = module.exports = through;
    through.through = through;
    function through(write4, end, opts) {
      write4 = write4 || function(data) {
        this.queue(data);
      }, end = end || function() {
        this.queue(null);
      };
      var ended = !1, destroyed = !1, buffer = [], _ended = !1, stream = new Stream2();
      stream.readable = stream.writable = !0, stream.paused = !1, stream.autoDestroy = !(opts && opts.autoDestroy === !1), stream.write = function(data) {
        return write4.call(this, data), !stream.paused;
      };
      function drain() {
        for (; buffer.length && !stream.paused; ) {
          var data = buffer.shift();
          if (data === null)
            return stream.emit("end");
          stream.emit("data", data);
        }
      }
      stream.queue = stream.push = function(data) {
        return _ended || (data === null && (_ended = !0), buffer.push(data), drain()), stream;
      }, stream.on("end", function() {
        stream.readable = !1, !stream.writable && stream.autoDestroy && process.nextTick(function() {
          stream.destroy();
        });
      });
      function _end() {
        stream.writable = !1, end.call(stream), !stream.readable && stream.autoDestroy && stream.destroy();
      }
      return stream.end = function(data) {
        if (!ended)
          return ended = !0, arguments.length && stream.write(data), _end(), stream;
      }, stream.destroy = function() {
        if (!destroyed)
          return destroyed = !0, ended = !0, buffer.length = 0, stream.writable = stream.readable = !1, stream.emit("close"), stream;
      }, stream.pause = function() {
        if (!stream.paused)
          return stream.paused = !0, stream;
      }, stream.resume = function() {
        return stream.paused && (stream.paused = !1, stream.emit("resume")), drain(), stream.paused || stream.emit("drain"), stream;
      }, stream;
    }
  }
});

// node_modules/html-tokenize/node_modules/buffer-from/index.js
var require_buffer_from = __commonJS({
  "node_modules/html-tokenize/node_modules/buffer-from/index.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var toString4 = Object.prototype.toString, isModern = typeof Buffer2.alloc == "function" && typeof Buffer2.allocUnsafe == "function" && typeof Buffer2.from == "function";
    function isArrayBuffer(input) {
      return toString4.call(input).slice(8, -1) === "ArrayBuffer";
    }
    function fromArrayBuffer3(obj, byteOffset, length) {
      byteOffset >>>= 0;
      var maxLength = obj.byteLength - byteOffset;
      if (maxLength < 0)
        throw new RangeError("'offset' is out of bounds");
      if (length === void 0)
        length = maxLength;
      else if (length >>>= 0, length > maxLength)
        throw new RangeError("'length' is out of bounds");
      return isModern ? Buffer2.from(obj.slice(byteOffset, byteOffset + length)) : new Buffer2(new Uint8Array(obj.slice(byteOffset, byteOffset + length)));
    }
    function fromString3(string, encoding) {
      if ((typeof encoding != "string" || encoding === "") && (encoding = "utf8"), !Buffer2.isEncoding(encoding))
        throw new TypeError('"encoding" must be a valid string encoding');
      return isModern ? Buffer2.from(string, encoding) : new Buffer2(string, encoding);
    }
    function bufferFrom(value, encodingOrOffset, length) {
      if (typeof value == "number")
        throw new TypeError('"value" argument must not be a number');
      return isArrayBuffer(value) ? fromArrayBuffer3(value, encodingOrOffset, length) : typeof value == "string" ? fromString3(value, encodingOrOffset) : isModern ? Buffer2.from(value) : new Buffer2(value);
    }
    module.exports = bufferFrom;
  }
});

// node_modules/html-tokenize/node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/html-tokenize/node_modules/isarray/index.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = Array.isArray || function(arr) {
      return Object.prototype.toString.call(arr) == "[object Array]";
    };
  }
});

// node-modules-polyfills-commonjs:buffer
var require_buffer = __commonJS({
  "node-modules-polyfills-commonjs:buffer"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var polyfill = (init_buffer2(), __toCommonJS(buffer_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill)
        module.exports[k] = polyfill[k];
    } else
      polyfill && (module.exports = polyfill);
  }
});

// node-modules-polyfills-commonjs:events
var require_events = __commonJS({
  "node-modules-polyfills-commonjs:events"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var polyfill = (init_events(), __toCommonJS(events_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill)
        module.exports[k] = polyfill[k];
    } else
      polyfill && (module.exports = polyfill);
  }
});

// node_modules/core-util-is/lib/util.js
var require_util = __commonJS({
  "node_modules/core-util-is/lib/util.js"(exports) {
    init_virtual_process_polyfill();
    init_buffer();
    function isArray3(arg) {
      return Array.isArray ? Array.isArray(arg) : objectToString2(arg) === "[object Array]";
    }
    exports.isArray = isArray3;
    function isBoolean2(arg) {
      return typeof arg == "boolean";
    }
    exports.isBoolean = isBoolean2;
    function isNull2(arg) {
      return arg === null;
    }
    exports.isNull = isNull2;
    function isNullOrUndefined2(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined2;
    function isNumber2(arg) {
      return typeof arg == "number";
    }
    exports.isNumber = isNumber2;
    function isString2(arg) {
      return typeof arg == "string";
    }
    exports.isString = isString2;
    function isSymbol2(arg) {
      return typeof arg == "symbol";
    }
    exports.isSymbol = isSymbol2;
    function isUndefined2(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined2;
    function isRegExp2(re) {
      return objectToString2(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp2;
    function isObject2(arg) {
      return typeof arg == "object" && arg !== null;
    }
    exports.isObject = isObject2;
    function isDate2(d) {
      return objectToString2(d) === "[object Date]";
    }
    exports.isDate = isDate2;
    function isError2(e) {
      return objectToString2(e) === "[object Error]" || e instanceof Error;
    }
    exports.isError = isError2;
    function isFunction2(arg) {
      return typeof arg == "function";
    }
    exports.isFunction = isFunction2;
    function isPrimitive2(arg) {
      return arg === null || typeof arg == "boolean" || typeof arg == "number" || typeof arg == "string" || typeof arg == "symbol" || typeof arg > "u";
    }
    exports.isPrimitive = isPrimitive2;
    exports.isBuffer = require_buffer().Buffer.isBuffer;
    function objectToString2(o) {
      return Object.prototype.toString.call(o);
    }
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    typeof Object.create == "function" ? module.exports = function(ctor, superCtor) {
      superCtor && (ctor.super_ = superCtor, ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }));
    } : module.exports = function(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype, ctor.prototype = new TempCtor(), ctor.prototype.constructor = ctor;
      }
    };
  }
});

// node_modules/html-tokenize/node_modules/string_decoder/index.js
var require_string_decoder = __commonJS({
  "node_modules/html-tokenize/node_modules/string_decoder/index.js"(exports) {
    init_virtual_process_polyfill();
    init_buffer();
    var Buffer4 = require_buffer().Buffer, isBufferEncoding2 = Buffer4.isEncoding || function(encoding) {
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return !0;
        default:
          return !1;
      }
    };
    function assertEncoding2(encoding) {
      if (encoding && !isBufferEncoding2(encoding))
        throw new Error("Unknown encoding: " + encoding);
    }
    var StringDecoder2 = exports.StringDecoder = function(encoding) {
      switch (this.encoding = (encoding || "utf8").toLowerCase().replace(/[-_]/, ""), assertEncoding2(encoding), this.encoding) {
        case "utf8":
          this.surrogateSize = 3;
          break;
        case "ucs2":
        case "utf16le":
          this.surrogateSize = 2, this.detectIncompleteChar = utf16DetectIncompleteChar2;
          break;
        case "base64":
          this.surrogateSize = 3, this.detectIncompleteChar = base64DetectIncompleteChar2;
          break;
        default:
          this.write = passThroughWrite2;
          return;
      }
      this.charBuffer = new Buffer4(6), this.charReceived = 0, this.charLength = 0;
    };
    StringDecoder2.prototype.write = function(buffer) {
      for (var charStr = ""; this.charLength; ) {
        var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length;
        if (buffer.copy(this.charBuffer, this.charReceived, 0, available), this.charReceived += available, this.charReceived < this.charLength)
          return "";
        buffer = buffer.slice(available, buffer.length), charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var charCode = charStr.charCodeAt(charStr.length - 1);
        if (charCode >= 55296 && charCode <= 56319) {
          this.charLength += this.surrogateSize, charStr = "";
          continue;
        }
        if (this.charReceived = this.charLength = 0, buffer.length === 0)
          return charStr;
        break;
      }
      this.detectIncompleteChar(buffer);
      var end = buffer.length;
      this.charLength && (buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end), end -= this.charReceived), charStr += buffer.toString(this.encoding, 0, end);
      var end = charStr.length - 1, charCode = charStr.charCodeAt(end);
      if (charCode >= 55296 && charCode <= 56319) {
        var size = this.surrogateSize;
        return this.charLength += size, this.charReceived += size, this.charBuffer.copy(this.charBuffer, size, 0, size), buffer.copy(this.charBuffer, 0, 0, size), charStr.substring(0, end);
      }
      return charStr;
    };
    StringDecoder2.prototype.detectIncompleteChar = function(buffer) {
      for (var i = buffer.length >= 3 ? 3 : buffer.length; i > 0; i--) {
        var c = buffer[buffer.length - i];
        if (i == 1 && c >> 5 == 6) {
          this.charLength = 2;
          break;
        }
        if (i <= 2 && c >> 4 == 14) {
          this.charLength = 3;
          break;
        }
        if (i <= 3 && c >> 3 == 30) {
          this.charLength = 4;
          break;
        }
      }
      this.charReceived = i;
    };
    StringDecoder2.prototype.end = function(buffer) {
      var res = "";
      if (buffer && buffer.length && (res = this.write(buffer)), this.charReceived) {
        var cr = this.charReceived, buf = this.charBuffer, enc = this.encoding;
        res += buf.slice(0, cr).toString(enc);
      }
      return res;
    };
    function passThroughWrite2(buffer) {
      return buffer.toString(this.encoding);
    }
    function utf16DetectIncompleteChar2(buffer) {
      this.charReceived = buffer.length % 2, this.charLength = this.charReceived ? 2 : 0;
    }
    function base64DetectIncompleteChar2(buffer) {
      this.charReceived = buffer.length % 3, this.charLength = this.charReceived ? 3 : 0;
    }
  }
});

// node_modules/html-tokenize/node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/html-tokenize/node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = Readable2;
    var isArray3 = require_isarray(), Buffer4 = require_buffer().Buffer;
    Readable2.ReadableState = ReadableState2;
    var EE = require_events().EventEmitter;
    EE.listenerCount || (EE.listenerCount = function(emitter, type) {
      return emitter.listeners(type).length;
    });
    var Stream2 = require_stream(), util = require_util();
    util.inherits = require_inherits_browser();
    var StringDecoder2;
    util.inherits(Readable2, Stream2);
    function ReadableState2(options, stream) {
      options = options || {};
      var hwm = options.highWaterMark;
      this.highWaterMark = hwm || hwm === 0 ? hwm : 16 * 1024, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = !1, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.calledRead = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.objectMode = !!options.objectMode, this.defaultEncoding = options.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, options.encoding && (StringDecoder2 || (StringDecoder2 = require_string_decoder().StringDecoder), this.decoder = new StringDecoder2(options.encoding), this.encoding = options.encoding);
    }
    function Readable2(options) {
      if (!(this instanceof Readable2))
        return new Readable2(options);
      this._readableState = new ReadableState2(options, this), this.readable = !0, Stream2.call(this);
    }
    Readable2.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      return typeof chunk == "string" && !state.objectMode && (encoding = encoding || state.defaultEncoding, encoding !== state.encoding && (chunk = new Buffer4(chunk, encoding), encoding = "")), readableAddChunk2(this, state, chunk, encoding, !1);
    };
    Readable2.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk2(this, state, chunk, "", !0);
    };
    function readableAddChunk2(stream, state, chunk, encoding, addToFront) {
      var er = chunkInvalid2(state, chunk);
      if (er)
        stream.emit("error", er);
      else if (chunk == null)
        state.reading = !1, state.ended || onEofChunk2(stream, state);
      else if (state.objectMode || chunk && chunk.length > 0)
        if (state.ended && !addToFront) {
          var e = new Error("stream.push() after EOF");
          stream.emit("error", e);
        } else if (state.endEmitted && addToFront) {
          var e = new Error("stream.unshift() after end event");
          stream.emit("error", e);
        } else
          state.decoder && !addToFront && !encoding && (chunk = state.decoder.write(chunk)), state.length += state.objectMode ? 1 : chunk.length, addToFront ? state.buffer.unshift(chunk) : (state.reading = !1, state.buffer.push(chunk)), state.needReadable && emitReadable2(stream), maybeReadMore2(stream, state);
      else
        addToFront || (state.reading = !1);
      return needMoreData2(state);
    }
    function needMoreData2(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable2.prototype.setEncoding = function(enc) {
      StringDecoder2 || (StringDecoder2 = require_string_decoder().StringDecoder), this._readableState.decoder = new StringDecoder2(enc), this._readableState.encoding = enc;
    };
    var MAX_HWM2 = 8388608;
    function roundUpToNextPowerOf2(n) {
      if (n >= MAX_HWM2)
        n = MAX_HWM2;
      else {
        n--;
        for (var p = 1; p < 32; p <<= 1)
          n |= n >> p;
        n++;
      }
      return n;
    }
    function howMuchToRead2(n, state) {
      return state.length === 0 && state.ended ? 0 : state.objectMode ? n === 0 ? 0 : 1 : n === null || isNaN(n) ? state.flowing && state.buffer.length ? state.buffer[0].length : state.length : n <= 0 ? 0 : (n > state.highWaterMark && (state.highWaterMark = roundUpToNextPowerOf2(n)), n > state.length ? state.ended ? state.length : (state.needReadable = !0, 0) : n);
    }
    Readable2.prototype.read = function(n) {
      var state = this._readableState;
      state.calledRead = !0;
      var nOrig = n, ret;
      if ((typeof n != "number" || n > 0) && (state.emittedReadable = !1), n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended))
        return emitReadable2(this), null;
      if (n = howMuchToRead2(n, state), n === 0 && state.ended)
        return ret = null, state.length > 0 && state.decoder && (ret = fromList2(n, state), state.length -= ret.length), state.length === 0 && endReadable2(this), ret;
      var doRead = state.needReadable;
      return state.length - n <= state.highWaterMark && (doRead = !0), (state.ended || state.reading) && (doRead = !1), doRead && (state.reading = !0, state.sync = !0, state.length === 0 && (state.needReadable = !0), this._read(state.highWaterMark), state.sync = !1), doRead && !state.reading && (n = howMuchToRead2(nOrig, state)), n > 0 ? ret = fromList2(n, state) : ret = null, ret === null && (state.needReadable = !0, n = 0), state.length -= n, state.length === 0 && !state.ended && (state.needReadable = !0), state.ended && !state.endEmitted && state.length === 0 && endReadable2(this), ret;
    };
    function chunkInvalid2(state, chunk) {
      var er = null;
      return !Buffer4.isBuffer(chunk) && typeof chunk != "string" && chunk !== null && chunk !== void 0 && !state.objectMode && (er = new TypeError("Invalid non-string/buffer chunk")), er;
    }
    function onEofChunk2(stream, state) {
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        chunk && chunk.length && (state.buffer.push(chunk), state.length += state.objectMode ? 1 : chunk.length);
      }
      state.ended = !0, state.length > 0 ? emitReadable2(stream) : endReadable2(stream);
    }
    function emitReadable2(stream) {
      var state = stream._readableState;
      state.needReadable = !1, !state.emittedReadable && (state.emittedReadable = !0, state.sync ? process.nextTick(function() {
        emitReadable_2(stream);
      }) : emitReadable_2(stream));
    }
    function emitReadable_2(stream) {
      stream.emit("readable");
    }
    function maybeReadMore2(stream, state) {
      state.readingMore || (state.readingMore = !0, process.nextTick(function() {
        maybeReadMore_2(stream, state);
      }));
    }
    function maybeReadMore_2(stream, state) {
      for (var len = state.length; !state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark && (stream.read(0), len !== state.length); )
        len = state.length;
      state.readingMore = !1;
    }
    Readable2.prototype._read = function(n) {
      this.emit("error", new Error("not implemented"));
    };
    Readable2.prototype.pipe = function(dest, pipeOpts) {
      var src = this, state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      var doEnd = (!pipeOpts || pipeOpts.end !== !1) && dest !== process.stdout && dest !== process.stderr, endFn = doEnd ? onend2 : cleanup;
      state.endEmitted ? process.nextTick(endFn) : src.once("end", endFn), dest.on("unpipe", onunpipe);
      function onunpipe(readable) {
        readable === src && cleanup();
      }
      function onend2() {
        dest.end();
      }
      var ondrain = pipeOnDrain2(src);
      dest.on("drain", ondrain);
      function cleanup() {
        dest.removeListener("close", onclose), dest.removeListener("finish", onfinish), dest.removeListener("drain", ondrain), dest.removeListener("error", onerror), dest.removeListener("unpipe", onunpipe), src.removeListener("end", onend2), src.removeListener("end", cleanup), (!dest._writableState || dest._writableState.needDrain) && ondrain();
      }
      function onerror(er) {
        unpipe(), dest.removeListener("error", onerror), EE.listenerCount(dest, "error") === 0 && dest.emit("error", er);
      }
      !dest._events || !dest._events.error ? dest.on("error", onerror) : isArray3(dest._events.error) ? dest._events.error.unshift(onerror) : dest._events.error = [onerror, dest._events.error];
      function onclose() {
        dest.removeListener("finish", onfinish), unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        dest.removeListener("close", onclose), unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        src.unpipe(dest);
      }
      return dest.emit("pipe", src), state.flowing || (this.on("readable", pipeOnReadable), state.flowing = !0, process.nextTick(function() {
        flow2(src);
      })), dest;
    };
    function pipeOnDrain2(src) {
      return function() {
        var dest = this, state = src._readableState;
        state.awaitDrain--, state.awaitDrain === 0 && flow2(src);
      };
    }
    function flow2(src) {
      var state = src._readableState, chunk;
      state.awaitDrain = 0;
      function write4(dest, i, list) {
        var written = dest.write(chunk);
        written === !1 && state.awaitDrain++;
      }
      for (; state.pipesCount && (chunk = src.read()) !== null; )
        if (state.pipesCount === 1 ? write4(state.pipes, 0, null) : forEach2(state.pipes, write4), src.emit("data", chunk), state.awaitDrain > 0)
          return;
      if (state.pipesCount === 0) {
        state.flowing = !1, EE.listenerCount(src, "data") > 0 && emitDataEvents(src);
        return;
      }
      state.ranOut = !0;
    }
    function pipeOnReadable() {
      this._readableState.ranOut && (this._readableState.ranOut = !1, flow2(this));
    }
    Readable2.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1)
        return dest && dest !== state.pipes ? this : (dest || (dest = state.pipes), state.pipes = null, state.pipesCount = 0, this.removeListener("readable", pipeOnReadable), state.flowing = !1, dest && dest.emit("unpipe", this), this);
      if (!dest) {
        var dests = state.pipes, len = state.pipesCount;
        state.pipes = null, state.pipesCount = 0, this.removeListener("readable", pipeOnReadable), state.flowing = !1;
        for (var i = 0; i < len; i++)
          dests[i].emit("unpipe", this);
        return this;
      }
      var i = indexOf4(state.pipes, dest);
      return i === -1 ? this : (state.pipes.splice(i, 1), state.pipesCount -= 1, state.pipesCount === 1 && (state.pipes = state.pipes[0]), dest.emit("unpipe", this), this);
    };
    Readable2.prototype.on = function(ev, fn) {
      var res = Stream2.prototype.on.call(this, ev, fn);
      if (ev === "data" && !this._readableState.flowing && emitDataEvents(this), ev === "readable" && this.readable) {
        var state = this._readableState;
        state.readableListening || (state.readableListening = !0, state.emittedReadable = !1, state.needReadable = !0, state.reading ? state.length && emitReadable2(this, state) : this.read(0));
      }
      return res;
    };
    Readable2.prototype.addListener = Readable2.prototype.on;
    Readable2.prototype.resume = function() {
      emitDataEvents(this), this.read(0), this.emit("resume");
    };
    Readable2.prototype.pause = function() {
      emitDataEvents(this, !0), this.emit("pause");
    };
    function emitDataEvents(stream, startPaused) {
      var state = stream._readableState;
      if (state.flowing)
        throw new Error("Cannot switch to old mode now.");
      var paused = startPaused || !1, readable = !1;
      stream.readable = !0, stream.pipe = Stream2.prototype.pipe, stream.on = stream.addListener = Stream2.prototype.on, stream.on("readable", function() {
        readable = !0;
        for (var c; !paused && (c = stream.read()) !== null; )
          stream.emit("data", c);
        c === null && (readable = !1, stream._readableState.needReadable = !0);
      }), stream.pause = function() {
        paused = !0, this.emit("pause");
      }, stream.resume = function() {
        paused = !1, readable ? process.nextTick(function() {
          stream.emit("readable");
        }) : this.read(0), this.emit("resume");
      }, stream.emit("readable");
    }
    Readable2.prototype.wrap = function(stream) {
      var state = this._readableState, paused = !1, self2 = this;
      stream.on("end", function() {
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          chunk && chunk.length && self2.push(chunk);
        }
        self2.push(null);
      }), stream.on("data", function(chunk) {
        if (state.decoder && (chunk = state.decoder.write(chunk)), !(state.objectMode && chunk == null) && !(!state.objectMode && (!chunk || !chunk.length))) {
          var ret = self2.push(chunk);
          ret || (paused = !0, stream.pause());
        }
      });
      for (var i in stream)
        typeof stream[i] == "function" && typeof this[i] > "u" && (this[i] = function(method) {
          return function() {
            return stream[method].apply(stream, arguments);
          };
        }(i));
      var events = ["error", "close", "destroy", "pause", "resume"];
      return forEach2(events, function(ev) {
        stream.on(ev, self2.emit.bind(self2, ev));
      }), self2._read = function(n) {
        paused && (paused = !1, stream.resume());
      }, self2;
    };
    Readable2._fromList = fromList2;
    function fromList2(n, state) {
      var list = state.buffer, length = state.length, stringMode = !!state.decoder, objectMode = !!state.objectMode, ret;
      if (list.length === 0)
        return null;
      if (length === 0)
        ret = null;
      else if (objectMode)
        ret = list.shift();
      else if (!n || n >= length)
        stringMode ? ret = list.join("") : ret = Buffer4.concat(list, length), list.length = 0;
      else if (n < list[0].length) {
        var buf = list[0];
        ret = buf.slice(0, n), list[0] = buf.slice(n);
      } else if (n === list[0].length)
        ret = list.shift();
      else {
        stringMode ? ret = "" : ret = new Buffer4(n);
        for (var c = 0, i = 0, l = list.length; i < l && c < n; i++) {
          var buf = list[0], cpy = Math.min(n - c, buf.length);
          stringMode ? ret += buf.slice(0, cpy) : buf.copy(ret, c, 0, cpy), cpy < buf.length ? list[0] = buf.slice(cpy) : list.shift(), c += cpy;
        }
      }
      return ret;
    }
    function endReadable2(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error("endReadable called on non-empty stream");
      !state.endEmitted && state.calledRead && (state.ended = !0, process.nextTick(function() {
        !state.endEmitted && state.length === 0 && (state.endEmitted = !0, stream.readable = !1, stream.emit("end"));
      }));
    }
    function forEach2(xs, f) {
      for (var i = 0, l = xs.length; i < l; i++)
        f(xs[i], i);
    }
    function indexOf4(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++)
        if (xs[i] === x)
          return i;
      return -1;
    }
  }
});

// node_modules/html-tokenize/node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/html-tokenize/node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = Duplex2;
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj)
        keys2.push(key);
      return keys2;
    }, util = require_util();
    util.inherits = require_inherits_browser();
    var Readable2 = require_stream_readable(), Writable2 = require_stream_writable();
    util.inherits(Duplex2, Readable2);
    forEach2(objectKeys(Writable2.prototype), function(method) {
      Duplex2.prototype[method] || (Duplex2.prototype[method] = Writable2.prototype[method]);
    });
    function Duplex2(options) {
      if (!(this instanceof Duplex2))
        return new Duplex2(options);
      Readable2.call(this, options), Writable2.call(this, options), options && options.readable === !1 && (this.readable = !1), options && options.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, options && options.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", onend2);
    }
    function onend2() {
      this.allowHalfOpen || this._writableState.ended || process.nextTick(this.end.bind(this));
    }
    function forEach2(xs, f) {
      for (var i = 0, l = xs.length; i < l; i++)
        f(xs[i], i);
    }
  }
});

// node_modules/html-tokenize/node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/html-tokenize/node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = Writable2;
    var Buffer4 = require_buffer().Buffer;
    Writable2.WritableState = WritableState2;
    var util = require_util();
    util.inherits = require_inherits_browser();
    var Stream2 = require_stream();
    util.inherits(Writable2, Stream2);
    function WriteReq2(chunk, encoding, cb) {
      this.chunk = chunk, this.encoding = encoding, this.callback = cb;
    }
    function WritableState2(options, stream) {
      options = options || {};
      var hwm = options.highWaterMark;
      this.highWaterMark = hwm || hwm === 0 ? hwm : 16 * 1024, this.objectMode = !!options.objectMode, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
      var noDecode = options.decodeStrings === !1;
      this.decodeStrings = !noDecode, this.defaultEncoding = options.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(er) {
        onwrite2(stream, er);
      }, this.writecb = null, this.writelen = 0, this.buffer = [], this.errorEmitted = !1;
    }
    function Writable2(options) {
      var Duplex2 = require_stream_duplex();
      if (!(this instanceof Writable2) && !(this instanceof Duplex2))
        return new Writable2(options);
      this._writableState = new WritableState2(options, this), this.writable = !0, Stream2.call(this);
    }
    Writable2.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe. Not readable."));
    };
    function writeAfterEnd2(stream, state, cb) {
      var er = new Error("write after end");
      stream.emit("error", er), process.nextTick(function() {
        cb(er);
      });
    }
    function validChunk2(stream, state, chunk, cb) {
      var valid = !0;
      if (!Buffer4.isBuffer(chunk) && typeof chunk != "string" && chunk !== null && chunk !== void 0 && !state.objectMode) {
        var er = new TypeError("Invalid non-string/buffer chunk");
        stream.emit("error", er), process.nextTick(function() {
          cb(er);
        }), valid = !1;
      }
      return valid;
    }
    Writable2.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState, ret = !1;
      return typeof encoding == "function" && (cb = encoding, encoding = null), Buffer4.isBuffer(chunk) ? encoding = "buffer" : encoding || (encoding = state.defaultEncoding), typeof cb != "function" && (cb = function() {
      }), state.ended ? writeAfterEnd2(this, state, cb) : validChunk2(this, state, chunk, cb) && (ret = writeOrBuffer2(this, state, chunk, encoding, cb)), ret;
    };
    function decodeChunk2(state, chunk, encoding) {
      return !state.objectMode && state.decodeStrings !== !1 && typeof chunk == "string" && (chunk = new Buffer4(chunk, encoding)), chunk;
    }
    function writeOrBuffer2(stream, state, chunk, encoding, cb) {
      chunk = decodeChunk2(state, chunk, encoding), Buffer4.isBuffer(chunk) && (encoding = "buffer");
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      return ret || (state.needDrain = !0), state.writing ? state.buffer.push(new WriteReq2(chunk, encoding, cb)) : doWrite2(stream, state, len, chunk, encoding, cb), ret;
    }
    function doWrite2(stream, state, len, chunk, encoding, cb) {
      state.writelen = len, state.writecb = cb, state.writing = !0, state.sync = !0, stream._write(chunk, encoding, state.onwrite), state.sync = !1;
    }
    function onwriteError2(stream, state, sync, er, cb) {
      sync ? process.nextTick(function() {
        cb(er);
      }) : cb(er), stream._writableState.errorEmitted = !0, stream.emit("error", er);
    }
    function onwriteStateUpdate2(state) {
      state.writing = !1, state.writecb = null, state.length -= state.writelen, state.writelen = 0;
    }
    function onwrite2(stream, er) {
      var state = stream._writableState, sync = state.sync, cb = state.writecb;
      if (onwriteStateUpdate2(state), er)
        onwriteError2(stream, state, sync, er, cb);
      else {
        var finished = needFinish2(stream, state);
        !finished && !state.bufferProcessing && state.buffer.length && clearBuffer2(stream, state), sync ? process.nextTick(function() {
          afterWrite2(stream, state, finished, cb);
        }) : afterWrite2(stream, state, finished, cb);
      }
    }
    function afterWrite2(stream, state, finished, cb) {
      finished || onwriteDrain2(stream, state), cb(), finished && finishMaybe2(stream, state);
    }
    function onwriteDrain2(stream, state) {
      state.length === 0 && state.needDrain && (state.needDrain = !1, stream.emit("drain"));
    }
    function clearBuffer2(stream, state) {
      state.bufferProcessing = !0;
      for (var c = 0; c < state.buffer.length; c++) {
        var entry2 = state.buffer[c], chunk = entry2.chunk, encoding = entry2.encoding, cb = entry2.callback, len = state.objectMode ? 1 : chunk.length;
        if (doWrite2(stream, state, len, chunk, encoding, cb), state.writing) {
          c++;
          break;
        }
      }
      state.bufferProcessing = !1, c < state.buffer.length ? state.buffer = state.buffer.slice(c) : state.buffer.length = 0;
    }
    Writable2.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("not implemented"));
    };
    Writable2.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      typeof chunk == "function" ? (cb = chunk, chunk = null, encoding = null) : typeof encoding == "function" && (cb = encoding, encoding = null), typeof chunk < "u" && chunk !== null && this.write(chunk, encoding), !state.ending && !state.finished && endWritable2(this, state, cb);
    };
    function needFinish2(stream, state) {
      return state.ending && state.length === 0 && !state.finished && !state.writing;
    }
    function finishMaybe2(stream, state) {
      var need = needFinish2(stream, state);
      return need && (state.finished = !0, stream.emit("finish")), need;
    }
    function endWritable2(stream, state, cb) {
      state.ending = !0, finishMaybe2(stream, state), cb && (state.finished ? process.nextTick(cb) : stream.once("finish", cb)), state.ended = !0;
    }
  }
});

// node_modules/html-tokenize/node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/html-tokenize/node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = Transform2;
    var Duplex2 = require_stream_duplex(), util = require_util();
    util.inherits = require_inherits_browser();
    util.inherits(Transform2, Duplex2);
    function TransformState2(options, stream) {
      this.afterTransform = function(er, data) {
        return afterTransform2(stream, er, data);
      }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null;
    }
    function afterTransform2(stream, er, data) {
      var ts = stream._transformState;
      ts.transforming = !1;
      var cb = ts.writecb;
      if (!cb)
        return stream.emit("error", new Error("no writecb in Transform class"));
      ts.writechunk = null, ts.writecb = null, data != null && stream.push(data), cb && cb(er);
      var rs = stream._readableState;
      rs.reading = !1, (rs.needReadable || rs.length < rs.highWaterMark) && stream._read(rs.highWaterMark);
    }
    function Transform2(options) {
      if (!(this instanceof Transform2))
        return new Transform2(options);
      Duplex2.call(this, options);
      var ts = this._transformState = new TransformState2(options, this), stream = this;
      this._readableState.needReadable = !0, this._readableState.sync = !1, this.once("finish", function() {
        typeof this._flush == "function" ? this._flush(function(er) {
          done2(stream, er);
        }) : done2(stream);
      });
    }
    Transform2.prototype.push = function(chunk, encoding) {
      return this._transformState.needTransform = !1, Duplex2.prototype.push.call(this, chunk, encoding);
    };
    Transform2.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("not implemented");
    };
    Transform2.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      if (ts.writecb = cb, ts.writechunk = chunk, ts.writeencoding = encoding, !ts.transforming) {
        var rs = this._readableState;
        (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) && this._read(rs.highWaterMark);
      }
    };
    Transform2.prototype._read = function(n) {
      var ts = this._transformState;
      ts.writechunk !== null && ts.writecb && !ts.transforming ? (ts.transforming = !0, this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform)) : ts.needTransform = !0;
    };
    function done2(stream, er) {
      if (er)
        return stream.emit("error", er);
      var ws = stream._writableState, rs = stream._readableState, ts = stream._transformState;
      if (ws.length)
        throw new Error("calling transform done when ws.length != 0");
      if (ts.transforming)
        throw new Error("calling transform done when still transforming");
      return stream.push(null);
    }
  }
});

// node_modules/html-tokenize/node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/html-tokenize/node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = PassThrough2;
    var Transform2 = require_stream_transform(), util = require_util();
    util.inherits = require_inherits_browser();
    util.inherits(PassThrough2, Transform2);
    function PassThrough2(options) {
      if (!(this instanceof PassThrough2))
        return new PassThrough2(options);
      Transform2.call(this, options);
    }
    PassThrough2.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/html-tokenize/node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/html-tokenize/node_modules/readable-stream/readable.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var Stream2 = require_stream();
    exports = module.exports = require_stream_readable();
    exports.Stream = Stream2;
    exports.Readable = exports;
    exports.Writable = require_stream_writable();
    exports.Duplex = require_stream_duplex();
    exports.Transform = require_stream_transform();
    exports.PassThrough = require_stream_passthrough();
    !process.browser && process.env.READABLE_STREAM === "disable" && (module.exports = require_stream());
  }
});

// node_modules/html-tokenize/index.js
var require_html_tokenize = __commonJS({
  "node_modules/html-tokenize/index.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var bufferFrom = require_buffer_from(), Transform2 = require_readable().Transform, inherits2 = require_inherits_browser();
    inherits2(Tokenize, Transform2);
    module.exports = Tokenize;
    var codes = {
      lt: "<".charCodeAt(0),
      gt: ">".charCodeAt(0),
      slash: "/".charCodeAt(0),
      dquote: '"'.charCodeAt(0),
      squote: "'".charCodeAt(0),
      equal: "=".charCodeAt(0)
    }, strings = {
      endScript: bufferFrom("<\/script"),
      endStyle: bufferFrom("</style"),
      endTitle: bufferFrom("</title"),
      comment: bufferFrom("<!--"),
      endComment: bufferFrom("-->"),
      cdata: bufferFrom("<![CDATA["),
      endCdata: bufferFrom("]]>")
    }, states = {
      TagNameState: 1,
      AttributeNameState: 2,
      BeforeAttributeValueState: 3,
      AttributeValueState: 4
    };
    function Tokenize() {
      if (!(this instanceof Tokenize))
        return new Tokenize();
      Transform2.call(this), this._readableState.objectMode = !0, this.state = "text", this.tagState = null, this.quoteState = null, this.raw = null, this.buffers = [], this._last = [];
    }
    Tokenize.prototype._transform = function(buf, enc, next) {
      var i = 0, offset = 0;
      for (this._prev && (buf = Buffer2.concat([this._prev, buf]), i = this._prev.length - 1, offset = this._offset, this._prev = null, this._offset = 0); i < buf.length; i++) {
        var b = buf[i];
        if (this._last.push(b), this._last.length > 9 && this._last.shift(), this.raw) {
          var parts = this._testRaw(buf, offset, i);
          parts && (this.push(["text", parts[0]]), this.raw === strings.endComment || this.raw === strings.endCdata ? (this.state = "text", this.buffers = [], this.push(["close", parts[1]])) : (this.state = "open", this.buffers = [parts[1]]), this.raw = null, offset = i + 1);
        } else {
          if (this.state === "text" && b === codes.lt && i === buf.length - 1)
            return this._prev = buf, this._offset = offset, next();
          if (this.state === "text" && b === codes.lt && !isWhiteSpace(buf[i + 1]))
            i > 0 && i - offset > 0 && this.buffers.push(buf.slice(offset, i)), offset = i, this.state = "open", this.tagState = states.TagNameState, this._pushState("text");
          else if (this.tagState === states.TagNameState && isWhiteSpace(b))
            this.tagState = states.AttributeNameState;
          else if (this.tagState === states.AttributeNameState && b === codes.equal)
            this.tagState = states.BeforeAttributeValueState;
          else if (!(this.tagState === states.BeforeAttributeValueState && isWhiteSpace(b)))
            if (this.tagState === states.BeforeAttributeValueState && b !== codes.gt)
              this.tagState = states.AttributeValueState, b === codes.dquote ? this.quoteState = "double" : b === codes.squote ? this.quoteState = "single" : this.quoteState = null;
            else if (this.tagState === states.AttributeValueState && !this.quoteState && isWhiteSpace(b))
              this.tagState = states.AttributeNameState;
            else if (this.tagState === states.AttributeValueState && this.quoteState === "double" && b === codes.dquote)
              this.quoteState = null, this.tagState = states.AttributeNameState;
            else if (this.tagState === states.AttributeValueState && this.quoteState === "single" && b === codes.squote)
              this.quoteState = null, this.tagState = states.AttributeNameState;
            else if (this.state === "open" && b === codes.gt && !this.quoteState)
              if (this.buffers.push(buf.slice(offset, i + 1)), offset = i + 1, this.state = "text", this.tagState = null, this._getChar(1) === codes.slash)
                this._pushState("close");
              else {
                var tag = this._getTag();
                tag === "script" && (this.raw = strings.endScript), tag === "style" && (this.raw = strings.endStyle), tag === "title" && (this.raw = strings.endTitle), this._pushState("open");
              }
            else
              this.state === "open" && compare5(this._last, strings.comment) ? (this.buffers.push(buf.slice(offset, i + 1)), offset = i + 1, this.state = "text", this.raw = strings.endComment, this._pushState("open")) : this.state === "open" && compare5(this._last, strings.cdata) && (this.buffers.push(buf.slice(offset, i + 1)), offset = i + 1, this.state = "text", this.raw = strings.endCdata, this._pushState("open"));
        }
      }
      offset < buf.length && this.buffers.push(buf.slice(offset)), next();
    };
    Tokenize.prototype._flush = function(next) {
      this.state === "text" && this._pushState("text"), this.push(null), next();
    };
    Tokenize.prototype._pushState = function(ev) {
      if (this.buffers.length !== 0) {
        var buf = Buffer2.concat(this.buffers);
        this.buffers = [], this.push([ev, buf]);
      }
    };
    Tokenize.prototype._getChar = function(i) {
      for (var offset = 0, j = 0; j < this.buffers.length; j++) {
        var buf = this.buffers[j];
        if (offset + buf.length > i)
          return buf[i - offset];
        offset += buf;
      }
    };
    Tokenize.prototype._getTag = function() {
      for (var offset = 0, tag = "", j = 0; j < this.buffers.length; j++) {
        for (var buf = this.buffers[j], k = 0; k < buf.length; k++)
          if (!(offset === 0 && k === 0)) {
            var c = String.fromCharCode(buf[k]);
            if (/[^\w-!\[\]]/.test(c))
              return tag.toLowerCase();
            tag += c;
          }
        offset += buf.length;
      }
    };
    Tokenize.prototype._testRaw = function(buf, offset, index) {
      var raw = this.raw, last = this._last;
      if (!!compare5(last, raw)) {
        this.buffers.push(buf.slice(offset, index + 1));
        var buf = Buffer2.concat(this.buffers), k = buf.length - raw.length;
        return [buf.slice(0, k), buf.slice(k)];
      }
    };
    function compare5(a, b) {
      if (a.length < b.length)
        return !1;
      for (var i = a.length - 1, j = b.length - 1; i >= 0 && j >= 0; i--, j--)
        if (lower(a[i]) !== lower(b[j]))
          return !1;
      return !0;
    }
    function lower(n) {
      return n >= 65 && n <= 90 ? n + 32 : n;
    }
    function isWhiteSpace(b) {
      return b === 32 || b === 9 || b === 10 || b === 12 || b === 13;
    }
  }
});

// node_modules/process-nextick-args/index.js
var require_process_nextick_args = __commonJS({
  "node_modules/process-nextick-args/index.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    typeof process > "u" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0 ? module.exports = { nextTick: nextTick3 } : module.exports = process;
    function nextTick3(fn, arg1, arg2, arg3) {
      if (typeof fn != "function")
        throw new TypeError('"callback" argument must be a function');
      var len = arguments.length, args, i;
      switch (len) {
        case 0:
        case 1:
          return process.nextTick(fn);
        case 2:
          return process.nextTick(function() {
            fn.call(null, arg1);
          });
        case 3:
          return process.nextTick(function() {
            fn.call(null, arg1, arg2);
          });
        case 4:
          return process.nextTick(function() {
            fn.call(null, arg1, arg2, arg3);
          });
        default:
          for (args = new Array(len - 1), i = 0; i < args.length; )
            args[i++] = arguments[i];
          return process.nextTick(function() {
            fn.apply(null, args);
          });
      }
    }
  }
});

// node_modules/isarray/index.js
var require_isarray2 = __commonJS({
  "node_modules/isarray/index.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var toString4 = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString4.call(arr) == "[object Array]";
    };
  }
});

// node_modules/duplexer2/node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream2 = __commonJS({
  "node_modules/duplexer2/node_modules/readable-stream/lib/internal/streams/stream.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_stream();
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var buffer = require_buffer(), Buffer4 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src)
        dst[key] = src[key];
    }
    Buffer4.from && Buffer4.alloc && Buffer4.allocUnsafe && Buffer4.allocUnsafeSlow ? module.exports = buffer : (copyProps(buffer, exports), exports.Buffer = SafeBuffer);
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer4(arg, encodingOrOffset, length);
    }
    copyProps(Buffer4, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg == "number")
        throw new TypeError("Argument must not be a number");
      return Buffer4(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill3, encoding) {
      if (typeof size != "number")
        throw new TypeError("Argument must be a number");
      var buf = Buffer4(size);
      return fill3 !== void 0 ? typeof encoding == "string" ? buf.fill(fill3, encoding) : buf.fill(fill3) : buf.fill(0), buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size != "number")
        throw new TypeError("Argument must be a number");
      return Buffer4(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size != "number")
        throw new TypeError("Argument must be a number");
      return buffer.SlowBuffer(size);
    };
  }
});

// node-modules-polyfills-commonjs:util
var require_util2 = __commonJS({
  "node-modules-polyfills-commonjs:util"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var polyfill = (init_util(), __toCommonJS(util_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill)
        module.exports[k] = polyfill[k];
    } else
      polyfill && (module.exports = polyfill);
  }
});

// node_modules/duplexer2/node_modules/readable-stream/lib/internal/streams/BufferList.js
var require_BufferList = __commonJS({
  "node_modules/duplexer2/node_modules/readable-stream/lib/internal/streams/BufferList.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor))
        throw new TypeError("Cannot call a class as a function");
    }
    var Buffer4 = require_safe_buffer().Buffer, util = require_util2();
    function copyBuffer(src, target, offset) {
      src.copy(target, offset);
    }
    module.exports = function() {
      function BufferList2() {
        _classCallCheck(this, BufferList2), this.head = null, this.tail = null, this.length = 0;
      }
      return BufferList2.prototype.push = function(v) {
        var entry2 = { data: v, next: null };
        this.length > 0 ? this.tail.next = entry2 : this.head = entry2, this.tail = entry2, ++this.length;
      }, BufferList2.prototype.unshift = function(v) {
        var entry2 = { data: v, next: this.head };
        this.length === 0 && (this.tail = entry2), this.head = entry2, ++this.length;
      }, BufferList2.prototype.shift = function() {
        if (this.length !== 0) {
          var ret = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, ret;
        }
      }, BufferList2.prototype.clear = function() {
        this.head = this.tail = null, this.length = 0;
      }, BufferList2.prototype.join = function(s) {
        if (this.length === 0)
          return "";
        for (var p = this.head, ret = "" + p.data; p = p.next; )
          ret += s + p.data;
        return ret;
      }, BufferList2.prototype.concat = function(n) {
        if (this.length === 0)
          return Buffer4.alloc(0);
        if (this.length === 1)
          return this.head.data;
        for (var ret = Buffer4.allocUnsafe(n >>> 0), p = this.head, i = 0; p; )
          copyBuffer(p.data, ret, i), i += p.data.length, p = p.next;
        return ret;
      }, BufferList2;
    }();
    util && util.inspect && util.inspect.custom && (module.exports.prototype[util.inspect.custom] = function() {
      var obj = util.inspect({ length: this.length });
      return this.constructor.name + " " + obj;
    });
  }
});

// node_modules/duplexer2/node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/duplexer2/node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var pna = require_process_nextick_args();
    function destroy(err, cb) {
      var _this = this, readableDestroyed = this._readableState && this._readableState.destroyed, writableDestroyed = this._writableState && this._writableState.destroyed;
      return readableDestroyed || writableDestroyed ? (cb ? cb(err) : err && (!this._writableState || !this._writableState.errorEmitted) && pna.nextTick(emitErrorNT, this, err), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(err || null, function(err2) {
        !cb && err2 ? (pna.nextTick(emitErrorNT, _this, err2), _this._writableState && (_this._writableState.errorEmitted = !0)) : cb && cb(err2);
      }), this);
    }
    function undestroy() {
      this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    module.exports = {
      destroy,
      undestroy
    };
  }
});

// node_modules/util-deprecate/browser.js
var require_browser = __commonJS({
  "node_modules/util-deprecate/browser.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = deprecate2;
    function deprecate2(fn, msg) {
      if (config3("noDeprecation"))
        return fn;
      var warned = !1;
      function deprecated() {
        if (!warned) {
          if (config3("throwDeprecation"))
            throw new Error(msg);
          config3("traceDeprecation") ? console.trace(msg) : console.warn(msg), warned = !0;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    }
    function config3(name) {
      try {
        if (!globalThis.localStorage)
          return !1;
      } catch {
        return !1;
      }
      var val = globalThis.localStorage[name];
      return val == null ? !1 : String(val).toLowerCase() === "true";
    }
  }
});

// node_modules/duplexer2/node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable2 = __commonJS({
  "node_modules/duplexer2/node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var pna = require_process_nextick_args();
    module.exports = Writable2;
    function CorkedRequest2(state) {
      var _this = this;
      this.next = null, this.entry = null, this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var asyncWrite = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick, Duplex2;
    Writable2.WritableState = WritableState2;
    var util = Object.create(require_util());
    util.inherits = require_inherits_browser();
    var internalUtil = {
      deprecate: require_browser()
    }, Stream2 = require_stream2(), Buffer4 = require_safe_buffer().Buffer, OurUint8Array = globalThis.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer4.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer4.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    util.inherits(Writable2, Stream2);
    function nop2() {
    }
    function WritableState2(options, stream) {
      Duplex2 = Duplex2 || require_stream_duplex2(), options = options || {};
      var isDuplex = stream instanceof Duplex2;
      this.objectMode = !!options.objectMode, isDuplex && (this.objectMode = this.objectMode || !!options.writableObjectMode);
      var hwm = options.highWaterMark, writableHwm = options.writableHighWaterMark, defaultHwm = this.objectMode ? 16 : 16 * 1024;
      hwm || hwm === 0 ? this.highWaterMark = hwm : isDuplex && (writableHwm || writableHwm === 0) ? this.highWaterMark = writableHwm : this.highWaterMark = defaultHwm, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
      var noDecode = options.decodeStrings === !1;
      this.decodeStrings = !noDecode, this.defaultEncoding = options.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(er) {
        onwrite2(stream, er);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new CorkedRequest2(this);
    }
    WritableState2.prototype.getBuffer = function() {
      for (var current = this.bufferedRequest, out = []; current; )
        out.push(current), current = current.next;
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState2.prototype, "buffer", {
          get: internalUtil.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch {
      }
    })();
    var realHasInstance;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (realHasInstance = Function.prototype[Symbol.hasInstance], Object.defineProperty(Writable2, Symbol.hasInstance, {
      value: function(object) {
        return realHasInstance.call(this, object) ? !0 : this !== Writable2 ? !1 : object && object._writableState instanceof WritableState2;
      }
    })) : realHasInstance = function(object) {
      return object instanceof this;
    };
    function Writable2(options) {
      if (Duplex2 = Duplex2 || require_stream_duplex2(), !realHasInstance.call(Writable2, this) && !(this instanceof Duplex2))
        return new Writable2(options);
      this._writableState = new WritableState2(options, this), this.writable = !0, options && (typeof options.write == "function" && (this._write = options.write), typeof options.writev == "function" && (this._writev = options.writev), typeof options.destroy == "function" && (this._destroy = options.destroy), typeof options.final == "function" && (this._final = options.final)), Stream2.call(this);
    }
    Writable2.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    function writeAfterEnd2(stream, cb) {
      var er = new Error("write after end");
      stream.emit("error", er), pna.nextTick(cb, er);
    }
    function validChunk2(stream, state, chunk, cb) {
      var valid = !0, er = !1;
      return chunk === null ? er = new TypeError("May not write null values to stream") : typeof chunk != "string" && chunk !== void 0 && !state.objectMode && (er = new TypeError("Invalid non-string/buffer chunk")), er && (stream.emit("error", er), pna.nextTick(cb, er), valid = !1), valid;
    }
    Writable2.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState, ret = !1, isBuf = !state.objectMode && _isUint8Array(chunk);
      return isBuf && !Buffer4.isBuffer(chunk) && (chunk = _uint8ArrayToBuffer(chunk)), typeof encoding == "function" && (cb = encoding, encoding = null), isBuf ? encoding = "buffer" : encoding || (encoding = state.defaultEncoding), typeof cb != "function" && (cb = nop2), state.ended ? writeAfterEnd2(this, cb) : (isBuf || validChunk2(this, state, chunk, cb)) && (state.pendingcb++, ret = writeOrBuffer2(this, state, isBuf, chunk, encoding, cb)), ret;
    };
    Writable2.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable2.prototype.uncork = function() {
      var state = this._writableState;
      state.corked && (state.corked--, !state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest && clearBuffer2(this, state));
    };
    Writable2.prototype.setDefaultEncoding = function(encoding) {
      if (typeof encoding == "string" && (encoding = encoding.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new TypeError("Unknown encoding: " + encoding);
      return this._writableState.defaultEncoding = encoding, this;
    };
    function decodeChunk2(state, chunk, encoding) {
      return !state.objectMode && state.decodeStrings !== !1 && typeof chunk == "string" && (chunk = Buffer4.from(chunk, encoding)), chunk;
    }
    Object.defineProperty(Writable2.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer2(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk2(state, chunk, encoding);
        chunk !== newChunk && (isBuf = !0, encoding = "buffer", chunk = newChunk);
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (ret || (state.needDrain = !0), state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        }, last ? last.next = state.lastBufferedRequest : state.bufferedRequest = state.lastBufferedRequest, state.bufferedRequestCount += 1;
      } else
        doWrite2(stream, state, !1, len, chunk, encoding, cb);
      return ret;
    }
    function doWrite2(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len, state.writecb = cb, state.writing = !0, state.sync = !0, writev ? stream._writev(chunk, state.onwrite) : stream._write(chunk, encoding, state.onwrite), state.sync = !1;
    }
    function onwriteError2(stream, state, sync, er, cb) {
      --state.pendingcb, sync ? (pna.nextTick(cb, er), pna.nextTick(finishMaybe2, stream, state), stream._writableState.errorEmitted = !0, stream.emit("error", er)) : (cb(er), stream._writableState.errorEmitted = !0, stream.emit("error", er), finishMaybe2(stream, state));
    }
    function onwriteStateUpdate2(state) {
      state.writing = !1, state.writecb = null, state.length -= state.writelen, state.writelen = 0;
    }
    function onwrite2(stream, er) {
      var state = stream._writableState, sync = state.sync, cb = state.writecb;
      if (onwriteStateUpdate2(state), er)
        onwriteError2(stream, state, sync, er, cb);
      else {
        var finished = needFinish2(state);
        !finished && !state.corked && !state.bufferProcessing && state.bufferedRequest && clearBuffer2(stream, state), sync ? asyncWrite(afterWrite2, stream, state, finished, cb) : afterWrite2(stream, state, finished, cb);
      }
    }
    function afterWrite2(stream, state, finished, cb) {
      finished || onwriteDrain2(stream, state), state.pendingcb--, cb(), finishMaybe2(stream, state);
    }
    function onwriteDrain2(stream, state) {
      state.length === 0 && state.needDrain && (state.needDrain = !1, stream.emit("drain"));
    }
    function clearBuffer2(stream, state) {
      state.bufferProcessing = !0;
      var entry2 = state.bufferedRequest;
      if (stream._writev && entry2 && entry2.next) {
        var l = state.bufferedRequestCount, buffer = new Array(l), holder = state.corkedRequestsFree;
        holder.entry = entry2;
        for (var count = 0, allBuffers = !0; entry2; )
          buffer[count] = entry2, entry2.isBuf || (allBuffers = !1), entry2 = entry2.next, count += 1;
        buffer.allBuffers = allBuffers, doWrite2(stream, state, !0, state.length, buffer, "", holder.finish), state.pendingcb++, state.lastBufferedRequest = null, holder.next ? (state.corkedRequestsFree = holder.next, holder.next = null) : state.corkedRequestsFree = new CorkedRequest2(state), state.bufferedRequestCount = 0;
      } else {
        for (; entry2; ) {
          var chunk = entry2.chunk, encoding = entry2.encoding, cb = entry2.callback, len = state.objectMode ? 1 : chunk.length;
          if (doWrite2(stream, state, !1, len, chunk, encoding, cb), entry2 = entry2.next, state.bufferedRequestCount--, state.writing)
            break;
        }
        entry2 === null && (state.lastBufferedRequest = null);
      }
      state.bufferedRequest = entry2, state.bufferProcessing = !1;
    }
    Writable2.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("_write() is not implemented"));
    };
    Writable2.prototype._writev = null;
    Writable2.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      typeof chunk == "function" ? (cb = chunk, chunk = null, encoding = null) : typeof encoding == "function" && (cb = encoding, encoding = null), chunk != null && this.write(chunk, encoding), state.corked && (state.corked = 1, this.uncork()), !state.ending && !state.finished && endWritable2(this, state, cb);
    };
    function needFinish2(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--, err && stream.emit("error", err), state.prefinished = !0, stream.emit("prefinish"), finishMaybe2(stream, state);
      });
    }
    function prefinish2(stream, state) {
      !state.prefinished && !state.finalCalled && (typeof stream._final == "function" ? (state.pendingcb++, state.finalCalled = !0, pna.nextTick(callFinal, stream, state)) : (state.prefinished = !0, stream.emit("prefinish")));
    }
    function finishMaybe2(stream, state) {
      var need = needFinish2(state);
      return need && (prefinish2(stream, state), state.pendingcb === 0 && (state.finished = !0, stream.emit("finish"))), need;
    }
    function endWritable2(stream, state, cb) {
      state.ending = !0, finishMaybe2(stream, state), cb && (state.finished ? pna.nextTick(cb) : stream.once("finish", cb)), state.ended = !0, stream.writable = !1;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry2 = corkReq.entry;
      for (corkReq.entry = null; entry2; ) {
        var cb = entry2.callback;
        state.pendingcb--, cb(err), entry2 = entry2.next;
      }
      state.corkedRequestsFree ? state.corkedRequestsFree.next = corkReq : state.corkedRequestsFree = corkReq;
    }
    Object.defineProperty(Writable2.prototype, "destroyed", {
      get: function() {
        return this._writableState === void 0 ? !1 : this._writableState.destroyed;
      },
      set: function(value) {
        !this._writableState || (this._writableState.destroyed = value);
      }
    });
    Writable2.prototype.destroy = destroyImpl.destroy;
    Writable2.prototype._undestroy = destroyImpl.undestroy;
    Writable2.prototype._destroy = function(err, cb) {
      this.end(), cb(err);
    };
  }
});

// node_modules/duplexer2/node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex2 = __commonJS({
  "node_modules/duplexer2/node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var pna = require_process_nextick_args(), objectKeys = Object.keys || function(obj) {
      var keys3 = [];
      for (var key in obj)
        keys3.push(key);
      return keys3;
    };
    module.exports = Duplex2;
    var util = Object.create(require_util());
    util.inherits = require_inherits_browser();
    var Readable2 = require_stream_readable2(), Writable2 = require_stream_writable2();
    util.inherits(Duplex2, Readable2);
    for (keys2 = objectKeys(Writable2.prototype), v = 0; v < keys2.length; v++)
      method = keys2[v], Duplex2.prototype[method] || (Duplex2.prototype[method] = Writable2.prototype[method]);
    var keys2, method, v;
    function Duplex2(options) {
      if (!(this instanceof Duplex2))
        return new Duplex2(options);
      Readable2.call(this, options), Writable2.call(this, options), options && options.readable === !1 && (this.readable = !1), options && options.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, options && options.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", onend2);
    }
    Object.defineProperty(Duplex2.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function onend2() {
      this.allowHalfOpen || this._writableState.ended || pna.nextTick(onEndNT2, this);
    }
    function onEndNT2(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex2.prototype, "destroyed", {
      get: function() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(value) {
        this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = value, this._writableState.destroyed = value);
      }
    });
    Duplex2.prototype._destroy = function(err, cb) {
      this.push(null), this.end(), pna.nextTick(cb, err);
    };
  }
});

// node_modules/duplexer2/node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder2 = __commonJS({
  "node_modules/duplexer2/node_modules/string_decoder/lib/string_decoder.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var Buffer4 = require_safe_buffer().Buffer, isEncoding3 = Buffer4.isEncoding || function(encoding) {
      switch (encoding = "" + encoding, encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return !0;
        default:
          return !1;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      for (var retried; ; )
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase(), retried = !0;
        }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc != "string" && (Buffer4.isEncoding === isEncoding3 || !isEncoding3(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports.StringDecoder = StringDecoder2;
    function StringDecoder2(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text, this.end = utf16End, nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast, nb = 4;
          break;
        case "base64":
          this.text = base64Text, this.end = base64End, nb = 3;
          break;
        default:
          this.write = simpleWrite, this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Buffer4.allocUnsafe(nb);
    }
    StringDecoder2.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r2, i;
      if (this.lastNeed) {
        if (r2 = this.fillLast(buf), r2 === void 0)
          return "";
        i = this.lastNeed, this.lastNeed = 0;
      } else
        i = 0;
      return i < buf.length ? r2 ? r2 + this.text(buf, i) : this.text(buf, i) : r2 || "";
    };
    StringDecoder2.prototype.end = utf8End;
    StringDecoder2.prototype.text = utf8Text;
    StringDecoder2.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length)
        return buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length), this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      return byte <= 127 ? 0 : byte >> 5 === 6 ? 2 : byte >> 4 === 14 ? 3 : byte >> 3 === 30 ? 4 : byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i)
        return 0;
      var nb = utf8CheckByte(buf[j]);
      return nb >= 0 ? (nb > 0 && (self2.lastNeed = nb - 1), nb) : --j < i || nb === -2 ? 0 : (nb = utf8CheckByte(buf[j]), nb >= 0 ? (nb > 0 && (self2.lastNeed = nb - 2), nb) : --j < i || nb === -2 ? 0 : (nb = utf8CheckByte(buf[j]), nb >= 0 ? (nb > 0 && (nb === 2 ? nb = 0 : self2.lastNeed = nb - 3), nb) : 0));
    }
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128)
        return self2.lastNeed = 0, "\uFFFD";
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128)
          return self2.lastNeed = 1, "\uFFFD";
        if (self2.lastNeed > 2 && buf.length > 2 && (buf[2] & 192) !== 128)
          return self2.lastNeed = 2, "\uFFFD";
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed, r2 = utf8CheckExtraBytes(this, buf, p);
      if (r2 !== void 0)
        return r2;
      if (this.lastNeed <= buf.length)
        return buf.copy(this.lastChar, p, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      buf.copy(this.lastChar, p, 0, buf.length), this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed)
        return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      return buf.copy(this.lastChar, 0, end), buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r2 = buf && buf.length ? this.write(buf) : "";
      return this.lastNeed ? r2 + "\uFFFD" : r2;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r2 = buf.toString("utf16le", i);
        if (r2) {
          var c = r2.charCodeAt(r2.length - 1);
          if (c >= 55296 && c <= 56319)
            return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = buf[buf.length - 2], this.lastChar[1] = buf[buf.length - 1], r2.slice(0, -1);
        }
        return r2;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = buf[buf.length - 1], buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r2 = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r2 + this.lastChar.toString("utf16le", 0, end);
      }
      return r2;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      return n === 0 ? buf.toString("base64", i) : (this.lastNeed = 3 - n, this.lastTotal = 3, n === 1 ? this.lastChar[0] = buf[buf.length - 1] : (this.lastChar[0] = buf[buf.length - 2], this.lastChar[1] = buf[buf.length - 1]), buf.toString("base64", i, buf.length - n));
    }
    function base64End(buf) {
      var r2 = buf && buf.length ? this.write(buf) : "";
      return this.lastNeed ? r2 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : r2;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/duplexer2/node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable2 = __commonJS({
  "node_modules/duplexer2/node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var pna = require_process_nextick_args();
    module.exports = Readable2;
    var isArray3 = require_isarray2(), Duplex2;
    Readable2.ReadableState = ReadableState2;
    var EE = require_events().EventEmitter, EElistenerCount = function(emitter, type) {
      return emitter.listeners(type).length;
    }, Stream2 = require_stream2(), Buffer4 = require_safe_buffer().Buffer, OurUint8Array = globalThis.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer4.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer4.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var util = Object.create(require_util());
    util.inherits = require_inherits_browser();
    var debugUtil = require_util2(), debug2 = void 0;
    debugUtil && debugUtil.debuglog ? debug2 = debugUtil.debuglog("stream") : debug2 = function() {
    };
    var BufferList2 = require_BufferList(), destroyImpl = require_destroy(), StringDecoder2;
    util.inherits(Readable2, Stream2);
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener3(emitter, event, fn) {
      if (typeof emitter.prependListener == "function")
        return emitter.prependListener(event, fn);
      !emitter._events || !emitter._events[event] ? emitter.on(event, fn) : isArray3(emitter._events[event]) ? emitter._events[event].unshift(fn) : emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState2(options, stream) {
      Duplex2 = Duplex2 || require_stream_duplex2(), options = options || {};
      var isDuplex = stream instanceof Duplex2;
      this.objectMode = !!options.objectMode, isDuplex && (this.objectMode = this.objectMode || !!options.readableObjectMode);
      var hwm = options.highWaterMark, readableHwm = options.readableHighWaterMark, defaultHwm = this.objectMode ? 16 : 16 * 1024;
      hwm || hwm === 0 ? this.highWaterMark = hwm : isDuplex && (readableHwm || readableHwm === 0) ? this.highWaterMark = readableHwm : this.highWaterMark = defaultHwm, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new BufferList2(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = options.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, options.encoding && (StringDecoder2 || (StringDecoder2 = require_string_decoder2().StringDecoder), this.decoder = new StringDecoder2(options.encoding), this.encoding = options.encoding);
    }
    function Readable2(options) {
      if (Duplex2 = Duplex2 || require_stream_duplex2(), !(this instanceof Readable2))
        return new Readable2(options);
      this._readableState = new ReadableState2(options, this), this.readable = !0, options && (typeof options.read == "function" && (this._read = options.read), typeof options.destroy == "function" && (this._destroy = options.destroy)), Stream2.call(this);
    }
    Object.defineProperty(Readable2.prototype, "destroyed", {
      get: function() {
        return this._readableState === void 0 ? !1 : this._readableState.destroyed;
      },
      set: function(value) {
        !this._readableState || (this._readableState.destroyed = value);
      }
    });
    Readable2.prototype.destroy = destroyImpl.destroy;
    Readable2.prototype._undestroy = destroyImpl.undestroy;
    Readable2.prototype._destroy = function(err, cb) {
      this.push(null), cb(err);
    };
    Readable2.prototype.push = function(chunk, encoding) {
      var state = this._readableState, skipChunkCheck;
      return state.objectMode ? skipChunkCheck = !0 : typeof chunk == "string" && (encoding = encoding || state.defaultEncoding, encoding !== state.encoding && (chunk = Buffer4.from(chunk, encoding), encoding = ""), skipChunkCheck = !0), readableAddChunk2(this, chunk, encoding, !1, skipChunkCheck);
    };
    Readable2.prototype.unshift = function(chunk) {
      return readableAddChunk2(this, chunk, null, !0, !1);
    };
    function readableAddChunk2(stream, chunk, encoding, addToFront, skipChunkCheck) {
      var state = stream._readableState;
      if (chunk === null)
        state.reading = !1, onEofChunk2(stream, state);
      else {
        var er;
        skipChunkCheck || (er = chunkInvalid2(state, chunk)), er ? stream.emit("error", er) : state.objectMode || chunk && chunk.length > 0 ? (typeof chunk != "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer4.prototype && (chunk = _uint8ArrayToBuffer(chunk)), addToFront ? state.endEmitted ? stream.emit("error", new Error("stream.unshift() after end event")) : addChunk(stream, state, chunk, !0) : state.ended ? stream.emit("error", new Error("stream.push() after EOF")) : (state.reading = !1, state.decoder && !encoding ? (chunk = state.decoder.write(chunk), state.objectMode || chunk.length !== 0 ? addChunk(stream, state, chunk, !1) : maybeReadMore2(stream, state)) : addChunk(stream, state, chunk, !1))) : addToFront || (state.reading = !1);
      }
      return needMoreData2(state);
    }
    function addChunk(stream, state, chunk, addToFront) {
      state.flowing && state.length === 0 && !state.sync ? (stream.emit("data", chunk), stream.read(0)) : (state.length += state.objectMode ? 1 : chunk.length, addToFront ? state.buffer.unshift(chunk) : state.buffer.push(chunk), state.needReadable && emitReadable2(stream)), maybeReadMore2(stream, state);
    }
    function chunkInvalid2(state, chunk) {
      var er;
      return !_isUint8Array(chunk) && typeof chunk != "string" && chunk !== void 0 && !state.objectMode && (er = new TypeError("Invalid non-string/buffer chunk")), er;
    }
    function needMoreData2(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable2.prototype.isPaused = function() {
      return this._readableState.flowing === !1;
    };
    Readable2.prototype.setEncoding = function(enc) {
      return StringDecoder2 || (StringDecoder2 = require_string_decoder2().StringDecoder), this._readableState.decoder = new StringDecoder2(enc), this._readableState.encoding = enc, this;
    };
    var MAX_HWM2 = 8388608;
    function computeNewHighWaterMark2(n) {
      return n >= MAX_HWM2 ? n = MAX_HWM2 : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n;
    }
    function howMuchToRead2(n, state) {
      return n <= 0 || state.length === 0 && state.ended ? 0 : state.objectMode ? 1 : n !== n ? state.flowing && state.length ? state.buffer.head.data.length : state.length : (n > state.highWaterMark && (state.highWaterMark = computeNewHighWaterMark2(n)), n <= state.length ? n : state.ended ? state.length : (state.needReadable = !0, 0));
    }
    Readable2.prototype.read = function(n) {
      debug2("read", n), n = parseInt(n, 10);
      var state = this._readableState, nOrig = n;
      if (n !== 0 && (state.emittedReadable = !1), n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended))
        return debug2("read: emitReadable", state.length, state.ended), state.length === 0 && state.ended ? endReadable2(this) : emitReadable2(this), null;
      if (n = howMuchToRead2(n, state), n === 0 && state.ended)
        return state.length === 0 && endReadable2(this), null;
      var doRead = state.needReadable;
      debug2("need readable", doRead), (state.length === 0 || state.length - n < state.highWaterMark) && (doRead = !0, debug2("length less than watermark", doRead)), state.ended || state.reading ? (doRead = !1, debug2("reading or ended", doRead)) : doRead && (debug2("do read"), state.reading = !0, state.sync = !0, state.length === 0 && (state.needReadable = !0), this._read(state.highWaterMark), state.sync = !1, state.reading || (n = howMuchToRead2(nOrig, state)));
      var ret;
      return n > 0 ? ret = fromList2(n, state) : ret = null, ret === null ? (state.needReadable = !0, n = 0) : state.length -= n, state.length === 0 && (state.ended || (state.needReadable = !0), nOrig !== n && state.ended && endReadable2(this)), ret !== null && this.emit("data", ret), ret;
    };
    function onEofChunk2(stream, state) {
      if (!state.ended) {
        if (state.decoder) {
          var chunk = state.decoder.end();
          chunk && chunk.length && (state.buffer.push(chunk), state.length += state.objectMode ? 1 : chunk.length);
        }
        state.ended = !0, emitReadable2(stream);
      }
    }
    function emitReadable2(stream) {
      var state = stream._readableState;
      state.needReadable = !1, state.emittedReadable || (debug2("emitReadable", state.flowing), state.emittedReadable = !0, state.sync ? pna.nextTick(emitReadable_2, stream) : emitReadable_2(stream));
    }
    function emitReadable_2(stream) {
      debug2("emit readable"), stream.emit("readable"), flow2(stream);
    }
    function maybeReadMore2(stream, state) {
      state.readingMore || (state.readingMore = !0, pna.nextTick(maybeReadMore_2, stream, state));
    }
    function maybeReadMore_2(stream, state) {
      for (var len = state.length; !state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark && (debug2("maybeReadMore read 0"), stream.read(0), len !== state.length); )
        len = state.length;
      state.readingMore = !1;
    }
    Readable2.prototype._read = function(n) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    Readable2.prototype.pipe = function(dest, pipeOpts) {
      var src = this, state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1, debug2("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== !1) && dest !== process.stdout && dest !== process.stderr, endFn = doEnd ? onend2 : unpipe;
      state.endEmitted ? pna.nextTick(endFn) : src.once("end", endFn), dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug2("onunpipe"), readable === src && unpipeInfo && unpipeInfo.hasUnpiped === !1 && (unpipeInfo.hasUnpiped = !0, cleanup());
      }
      function onend2() {
        debug2("onend"), dest.end();
      }
      var ondrain = pipeOnDrain2(src);
      dest.on("drain", ondrain);
      var cleanedUp = !1;
      function cleanup() {
        debug2("cleanup"), dest.removeListener("close", onclose), dest.removeListener("finish", onfinish), dest.removeListener("drain", ondrain), dest.removeListener("error", onerror), dest.removeListener("unpipe", onunpipe), src.removeListener("end", onend2), src.removeListener("end", unpipe), src.removeListener("data", ondata), cleanedUp = !0, state.awaitDrain && (!dest._writableState || dest._writableState.needDrain) && ondrain();
      }
      var increasedAwaitDrain = !1;
      src.on("data", ondata);
      function ondata(chunk) {
        debug2("ondata"), increasedAwaitDrain = !1;
        var ret = dest.write(chunk);
        ret === !1 && !increasedAwaitDrain && ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf4(state.pipes, dest) !== -1) && !cleanedUp && (debug2("false write response, pause", src._readableState.awaitDrain), src._readableState.awaitDrain++, increasedAwaitDrain = !0), src.pause());
      }
      function onerror(er) {
        debug2("onerror", er), unpipe(), dest.removeListener("error", onerror), EElistenerCount(dest, "error") === 0 && dest.emit("error", er);
      }
      prependListener3(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish), unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug2("onfinish"), dest.removeListener("close", onclose), unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug2("unpipe"), src.unpipe(dest);
      }
      return dest.emit("pipe", src), state.flowing || (debug2("pipe resume"), src.resume()), dest;
    };
    function pipeOnDrain2(src) {
      return function() {
        var state = src._readableState;
        debug2("pipeOnDrain", state.awaitDrain), state.awaitDrain && state.awaitDrain--, state.awaitDrain === 0 && EElistenerCount(src, "data") && (state.flowing = !0, flow2(src));
      };
    }
    Readable2.prototype.unpipe = function(dest) {
      var state = this._readableState, unpipeInfo = { hasUnpiped: !1 };
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1)
        return dest && dest !== state.pipes ? this : (dest || (dest = state.pipes), state.pipes = null, state.pipesCount = 0, state.flowing = !1, dest && dest.emit("unpipe", this, unpipeInfo), this);
      if (!dest) {
        var dests = state.pipes, len = state.pipesCount;
        state.pipes = null, state.pipesCount = 0, state.flowing = !1;
        for (var i = 0; i < len; i++)
          dests[i].emit("unpipe", this, unpipeInfo);
        return this;
      }
      var index = indexOf4(state.pipes, dest);
      return index === -1 ? this : (state.pipes.splice(index, 1), state.pipesCount -= 1, state.pipesCount === 1 && (state.pipes = state.pipes[0]), dest.emit("unpipe", this, unpipeInfo), this);
    };
    Readable2.prototype.on = function(ev, fn) {
      var res = Stream2.prototype.on.call(this, ev, fn);
      if (ev === "data")
        this._readableState.flowing !== !1 && this.resume();
      else if (ev === "readable") {
        var state = this._readableState;
        !state.endEmitted && !state.readableListening && (state.readableListening = state.needReadable = !0, state.emittedReadable = !1, state.reading ? state.length && emitReadable2(this) : pna.nextTick(nReadingNextTick2, this));
      }
      return res;
    };
    Readable2.prototype.addListener = Readable2.prototype.on;
    function nReadingNextTick2(self2) {
      debug2("readable nexttick read 0"), self2.read(0);
    }
    Readable2.prototype.resume = function() {
      var state = this._readableState;
      return state.flowing || (debug2("resume"), state.flowing = !0, resume2(this, state)), this;
    };
    function resume2(stream, state) {
      state.resumeScheduled || (state.resumeScheduled = !0, pna.nextTick(resume_2, stream, state));
    }
    function resume_2(stream, state) {
      state.reading || (debug2("resume read 0"), stream.read(0)), state.resumeScheduled = !1, state.awaitDrain = 0, stream.emit("resume"), flow2(stream), state.flowing && !state.reading && stream.read(0);
    }
    Readable2.prototype.pause = function() {
      return debug2("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (debug2("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
    };
    function flow2(stream) {
      var state = stream._readableState;
      for (debug2("flow", state.flowing); state.flowing && stream.read() !== null; )
        ;
    }
    Readable2.prototype.wrap = function(stream) {
      var _this = this, state = this._readableState, paused = !1;
      stream.on("end", function() {
        if (debug2("wrapped end"), state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          chunk && chunk.length && _this.push(chunk);
        }
        _this.push(null);
      }), stream.on("data", function(chunk) {
        if (debug2("wrapped data"), state.decoder && (chunk = state.decoder.write(chunk)), !(state.objectMode && chunk == null) && !(!state.objectMode && (!chunk || !chunk.length))) {
          var ret = _this.push(chunk);
          ret || (paused = !0, stream.pause());
        }
      });
      for (var i in stream)
        this[i] === void 0 && typeof stream[i] == "function" && (this[i] = function(method) {
          return function() {
            return stream[method].apply(stream, arguments);
          };
        }(i));
      for (var n = 0; n < kProxyEvents.length; n++)
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      return this._read = function(n2) {
        debug2("wrapped _read", n2), paused && (paused = !1, stream.resume());
      }, this;
    };
    Object.defineProperty(Readable2.prototype, "readableHighWaterMark", {
      enumerable: !1,
      get: function() {
        return this._readableState.highWaterMark;
      }
    });
    Readable2._fromList = fromList2;
    function fromList2(n, state) {
      if (state.length === 0)
        return null;
      var ret;
      return state.objectMode ? ret = state.buffer.shift() : !n || n >= state.length ? (state.decoder ? ret = state.buffer.join("") : state.buffer.length === 1 ? ret = state.buffer.head.data : ret = state.buffer.concat(state.length), state.buffer.clear()) : ret = fromListPartial2(n, state.buffer, state.decoder), ret;
    }
    function fromListPartial2(n, list, hasStrings) {
      var ret;
      return n < list.head.data.length ? (ret = list.head.data.slice(0, n), list.head.data = list.head.data.slice(n)) : n === list.head.data.length ? ret = list.shift() : ret = hasStrings ? copyFromBufferString2(n, list) : copyFromBuffer2(n, list), ret;
    }
    function copyFromBufferString2(n, list) {
      var p = list.head, c = 1, ret = p.data;
      for (n -= ret.length; p = p.next; ) {
        var str = p.data, nb = n > str.length ? str.length : n;
        if (nb === str.length ? ret += str : ret += str.slice(0, n), n -= nb, n === 0) {
          nb === str.length ? (++c, p.next ? list.head = p.next : list.head = list.tail = null) : (list.head = p, p.data = str.slice(nb));
          break;
        }
        ++c;
      }
      return list.length -= c, ret;
    }
    function copyFromBuffer2(n, list) {
      var ret = Buffer4.allocUnsafe(n), p = list.head, c = 1;
      for (p.data.copy(ret), n -= p.data.length; p = p.next; ) {
        var buf = p.data, nb = n > buf.length ? buf.length : n;
        if (buf.copy(ret, ret.length - n, 0, nb), n -= nb, n === 0) {
          nb === buf.length ? (++c, p.next ? list.head = p.next : list.head = list.tail = null) : (list.head = p, p.data = buf.slice(nb));
          break;
        }
        ++c;
      }
      return list.length -= c, ret;
    }
    function endReadable2(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error('"endReadable()" called on non-empty stream');
      state.endEmitted || (state.ended = !0, pna.nextTick(endReadableNT2, state, stream));
    }
    function endReadableNT2(state, stream) {
      !state.endEmitted && state.length === 0 && (state.endEmitted = !0, stream.readable = !1, stream.emit("end"));
    }
    function indexOf4(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++)
        if (xs[i] === x)
          return i;
      return -1;
    }
  }
});

// node_modules/duplexer2/node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform2 = __commonJS({
  "node_modules/duplexer2/node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = Transform2;
    var Duplex2 = require_stream_duplex2(), util = Object.create(require_util());
    util.inherits = require_inherits_browser();
    util.inherits(Transform2, Duplex2);
    function afterTransform2(er, data) {
      var ts = this._transformState;
      ts.transforming = !1;
      var cb = ts.writecb;
      if (!cb)
        return this.emit("error", new Error("write callback called multiple times"));
      ts.writechunk = null, ts.writecb = null, data != null && this.push(data), cb(er);
      var rs = this._readableState;
      rs.reading = !1, (rs.needReadable || rs.length < rs.highWaterMark) && this._read(rs.highWaterMark);
    }
    function Transform2(options) {
      if (!(this instanceof Transform2))
        return new Transform2(options);
      Duplex2.call(this, options), this._transformState = {
        afterTransform: afterTransform2.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
      }, this._readableState.needReadable = !0, this._readableState.sync = !1, options && (typeof options.transform == "function" && (this._transform = options.transform), typeof options.flush == "function" && (this._flush = options.flush)), this.on("prefinish", prefinish2);
    }
    function prefinish2() {
      var _this = this;
      typeof this._flush == "function" ? this._flush(function(er, data) {
        done2(_this, er, data);
      }) : done2(this, null, null);
    }
    Transform2.prototype.push = function(chunk, encoding) {
      return this._transformState.needTransform = !1, Duplex2.prototype.push.call(this, chunk, encoding);
    };
    Transform2.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("_transform() is not implemented");
    };
    Transform2.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      if (ts.writecb = cb, ts.writechunk = chunk, ts.writeencoding = encoding, !ts.transforming) {
        var rs = this._readableState;
        (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) && this._read(rs.highWaterMark);
      }
    };
    Transform2.prototype._read = function(n) {
      var ts = this._transformState;
      ts.writechunk !== null && ts.writecb && !ts.transforming ? (ts.transforming = !0, this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform)) : ts.needTransform = !0;
    };
    Transform2.prototype._destroy = function(err, cb) {
      var _this2 = this;
      Duplex2.prototype._destroy.call(this, err, function(err2) {
        cb(err2), _this2.emit("close");
      });
    };
    function done2(stream, er, data) {
      if (er)
        return stream.emit("error", er);
      if (data != null && stream.push(data), stream._writableState.length)
        throw new Error("Calling transform done when ws.length != 0");
      if (stream._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return stream.push(null);
    }
  }
});

// node_modules/duplexer2/node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough2 = __commonJS({
  "node_modules/duplexer2/node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = PassThrough2;
    var Transform2 = require_stream_transform2(), util = Object.create(require_util());
    util.inherits = require_inherits_browser();
    util.inherits(PassThrough2, Transform2);
    function PassThrough2(options) {
      if (!(this instanceof PassThrough2))
        return new PassThrough2(options);
      Transform2.call(this, options);
    }
    PassThrough2.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/duplexer2/node_modules/readable-stream/readable.js
var require_readable2 = __commonJS({
  "node_modules/duplexer2/node_modules/readable-stream/readable.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var Stream2 = require_stream();
    process.env.READABLE_STREAM === "disable" && Stream2 ? (module.exports = Stream2, exports = module.exports = Stream2.Readable, exports.Readable = Stream2.Readable, exports.Writable = Stream2.Writable, exports.Duplex = Stream2.Duplex, exports.Transform = Stream2.Transform, exports.PassThrough = Stream2.PassThrough, exports.Stream = Stream2) : (exports = module.exports = require_stream_readable2(), exports.Stream = Stream2 || exports, exports.Readable = exports, exports.Writable = require_stream_writable2(), exports.Duplex = require_stream_duplex2(), exports.Transform = require_stream_transform2(), exports.PassThrough = require_stream_passthrough2());
  }
});

// node_modules/duplexer2/index.js
var require_duplexer2 = __commonJS({
  "node_modules/duplexer2/index.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    var stream = require_readable2();
    function DuplexWrapper(options, writable, readable) {
      typeof readable > "u" && (readable = writable, writable = options, options = null), stream.Duplex.call(this, options), typeof readable.read != "function" && (readable = new stream.Readable(options).wrap(readable)), this._writable = writable, this._readable = readable, this._waiting = !1;
      var self2 = this;
      writable.once("finish", function() {
        self2.end();
      }), this.once("finish", function() {
        writable.end();
      }), readable.on("readable", function() {
        self2._waiting && (self2._waiting = !1, self2._read());
      }), readable.once("end", function() {
        self2.push(null);
      }), (!options || typeof options.bubbleErrors > "u" || options.bubbleErrors) && (writable.on("error", function(err) {
        self2.emit("error", err);
      }), readable.on("error", function(err) {
        self2.emit("error", err);
      }));
    }
    DuplexWrapper.prototype = Object.create(stream.Duplex.prototype, { constructor: { value: DuplexWrapper } });
    DuplexWrapper.prototype._write = function(input, encoding, done2) {
      this._writable.write(input, encoding, done2);
    };
    DuplexWrapper.prototype._read = function() {
      for (var buf, reads = 0; (buf = this._readable.read()) !== null; )
        this.push(buf), reads++;
      reads === 0 && (this._waiting = !0);
    };
    module.exports = function(options, writable, readable) {
      return new DuplexWrapper(options, writable, readable);
    };
    module.exports.DuplexWrapper = DuplexWrapper;
  }
});

// node_modules/multipipe/index.js
var require_multipipe = __commonJS({
  "node_modules/multipipe/index.js"(exports, module) {
    init_virtual_process_polyfill();
    init_buffer();
    var duplexer = require_duplexer2(), PassThrough2 = require_stream().PassThrough, Readable2 = require_stream().PassThrough, objectAssign = require_object_assign(), slice3 = [].slice, defaultOpts = {
      bubbleErrors: !1,
      objectMode: !0
    };
    module.exports = pipe;
    function pipe(streams, opts, cb) {
      Array.isArray(streams) || (streams = slice3.call(arguments), opts = null, cb = null);
      var lastArg = streams[streams.length - 1];
      typeof lastArg == "function" && (cb = streams.splice(-1)[0], lastArg = streams[streams.length - 1]), typeof lastArg == "object" && typeof lastArg.pipe != "function" && (opts = streams.splice(-1)[0]);
      var first = streams[0], last = streams[streams.length - 1], ret;
      if (opts = objectAssign({}, defaultOpts, opts), !first)
        return cb && process.nextTick(cb), new PassThrough2(opts);
      if (first.writable && last.readable ? ret = duplexer(opts, first, last) : streams.length == 1 ? ret = new Readable2(opts).wrap(streams[0]) : first.writable ? ret = first : last.readable ? ret = last : ret = new PassThrough2(opts), streams.forEach(function(stream, i) {
        var next = streams[i + 1];
        next && stream.pipe(next), stream != ret && stream.on("error", ret.emit.bind(ret, "error"));
      }), cb) {
        let end2 = function(err) {
          ended || (ended = !0, cb(err));
        };
        var end = end2, ended = !1;
        ret.on("error", end2), last.on("finish", function() {
          end2();
        }), last.on("close", function() {
          end2();
        });
      }
      return ret;
    }
  }
});

// node_modules/@emotion/server/create-instance/dist/emotion-server-create-instance.cjs.dev.js
var require_emotion_server_create_instance_cjs_dev = __commonJS({
  "node_modules/@emotion/server/create-instance/dist/emotion-server-create-instance.cjs.dev.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var through = require_through(), tokenize = require_html_tokenize(), pipe = require_multipipe();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var through__default = /* @__PURE__ */ _interopDefault(through), tokenize__default = /* @__PURE__ */ _interopDefault(tokenize), pipe__default = /* @__PURE__ */ _interopDefault(pipe), createExtractCritical = function(cache) {
      return function(html2) {
        for (var RGX = new RegExp(cache.key + "-([a-zA-Z0-9-_]+)", "gm"), o = {
          html: html2,
          ids: [],
          css: ""
        }, match, ids = {}; (match = RGX.exec(html2)) !== null; )
          ids[match[1]] === void 0 && (ids[match[1]] = !0);
        return o.ids = Object.keys(cache.inserted).filter(function(id) {
          if ((ids[id] !== void 0 || cache.registered[cache.key + "-" + id] === void 0) && cache.inserted[id] !== !0)
            return o.css += cache.inserted[id], !0;
        }), o;
      };
    }, createExtractCriticalToChunks = function(cache) {
      return function(html2) {
        for (var RGX = new RegExp(cache.key + "-([a-zA-Z0-9-_]+)", "gm"), o = {
          html: html2,
          styles: []
        }, match, ids = {}; (match = RGX.exec(html2)) !== null; )
          ids[match[1]] === void 0 && (ids[match[1]] = !0);
        var regularCssIds = [], regularCss = "";
        return Object.keys(cache.inserted).forEach(function(id) {
          (ids[id] !== void 0 || cache.registered[cache.key + "-" + id] === void 0) && cache.inserted[id] !== !0 && (cache.registered[cache.key + "-" + id] ? (regularCssIds.push(id), regularCss += cache.inserted[id]) : o.styles.push({
            key: cache.key + "-global",
            ids: [id],
            css: cache.inserted[id]
          }));
        }), o.styles.push({
          key: cache.key,
          ids: regularCssIds,
          css: regularCss
        }), o;
      };
    };
    function generateStyleTag(cssKey, ids, styles2, nonceString) {
      return '<style data-emotion="' + cssKey + " " + ids + '"' + nonceString + ">" + styles2 + "</style>";
    }
    var createRenderStylesToString = function(cache, nonceString) {
      return function(html2) {
        var inserted = cache.inserted, cssKey = cache.key, registered = cache.registered, regex = new RegExp("<|" + cssKey + "-([a-zA-Z0-9-_]+)", "gm"), seen = {}, result = "", globalIds = "", globalStyles = "";
        for (var id in inserted)
          if (inserted.hasOwnProperty(id)) {
            var style3 = inserted[id], key = cssKey + "-" + id;
            style3 !== !0 && registered[key] === void 0 && (globalStyles += style3, globalIds += " " + id);
          }
        globalStyles !== "" && (result = generateStyleTag(cssKey, globalIds.substring(1), globalStyles, nonceString));
        for (var ids = "", styles2 = "", lastInsertionPoint = 0, match; (match = regex.exec(html2)) !== null; ) {
          if (match[0] === "<") {
            ids !== "" && (result += generateStyleTag(cssKey, ids.substring(1), styles2, nonceString), ids = "", styles2 = ""), result += html2.substring(lastInsertionPoint, match.index), lastInsertionPoint = match.index;
            continue;
          }
          var _id = match[1], _style = inserted[_id];
          _style === !0 || _style === void 0 || seen[_id] || (seen[_id] = !0, styles2 += _style, ids += " " + _id);
        }
        return result += html2.substring(lastInsertionPoint), result;
      };
    }, createRenderStylesToNodeStream = function(cache, nonceString) {
      return function() {
        var insed = {}, tokenStream = tokenize__default.default(), inlineStream = through__default.default(function(thing) {
          var type = thing[0], data = thing[1];
          if (type === "open") {
            for (var css2 = "", ids = {}, match, fragment = data.toString(), regex = new RegExp(cache.key + "-([a-zA-Z0-9-_]+)", "gm"); (match = regex.exec(fragment)) !== null; )
              match !== null && insed[match[1]] === void 0 && (ids[match[1]] = !0);
            Object.keys(cache.inserted).forEach(function(id) {
              cache.inserted[id] !== !0 && insed[id] === void 0 && (ids[id] === !0 || cache.registered[cache.key + "-" + id] === void 0 && (ids[id] = !0)) && (insed[id] = !0, css2 += cache.inserted[id]);
            }), css2 !== "" && this.queue('<style data-emotion="' + cache.key + " " + Object.keys(ids).join(" ") + '"' + nonceString + ">" + css2 + "</style>");
          }
          this.queue(data);
        }, function() {
          this.queue(null);
        });
        return pipe__default.default(tokenStream, inlineStream);
      };
    }, createConstructStyleTagsFromChunks = function(cache, nonceString) {
      return function(criticalData) {
        var styleTagsString = "";
        return criticalData.styles.forEach(function(item) {
          styleTagsString += generateStyleTag(item.key, item.ids.join(" "), item.css, nonceString);
        }), styleTagsString;
      };
    };
    function createEmotionServer2(cache) {
      cache.compat !== !0 && (cache.compat = !0);
      var nonceString = cache.nonce !== void 0 ? ' nonce="' + cache.nonce + '"' : "";
      return {
        extractCritical: createExtractCritical(cache),
        extractCriticalToChunks: createExtractCriticalToChunks(cache),
        renderStylesToString: createRenderStylesToString(cache, nonceString),
        renderStylesToNodeStream: createRenderStylesToNodeStream(cache, nonceString),
        constructStyleTagsFromChunks: createConstructStyleTagsFromChunks(cache, nonceString)
      };
    }
    exports.default = createEmotionServer2;
  }
});

// node_modules/@emotion/server/create-instance/dist/emotion-server-create-instance.cjs.js
var require_emotion_server_create_instance_cjs = __commonJS({
  "node_modules/@emotion/server/create-instance/dist/emotion-server-create-instance.cjs.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_emotion_server_create_instance_cjs_dev();
  }
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-dev-runtime.development.js"(exports) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    (function() {
      "use strict";
      var React23 = require_react(), _assign = require_object_assign(), REACT_ELEMENT_TYPE = 60103, REACT_PORTAL_TYPE = 60106;
      exports.Fragment = 60107;
      var REACT_STRICT_MODE_TYPE = 60108, REACT_PROFILER_TYPE = 60114, REACT_PROVIDER_TYPE = 60109, REACT_CONTEXT_TYPE = 60110, REACT_FORWARD_REF_TYPE = 60112, REACT_SUSPENSE_TYPE = 60113, REACT_SUSPENSE_LIST_TYPE = 60120, REACT_MEMO_TYPE = 60115, REACT_LAZY_TYPE = 60116, REACT_BLOCK_TYPE = 60121, REACT_SERVER_BLOCK_TYPE = 60122, REACT_FUNDAMENTAL_TYPE = 60117, REACT_SCOPE_TYPE = 60119, REACT_OPAQUE_ID_TYPE = 60128, REACT_DEBUG_TRACING_MODE_TYPE = 60129, REACT_OFFSCREEN_TYPE = 60130, REACT_LEGACY_HIDDEN_TYPE = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element"), REACT_PORTAL_TYPE = symbolFor("react.portal"), exports.Fragment = symbolFor("react.fragment"), REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode"), REACT_PROFILER_TYPE = symbolFor("react.profiler"), REACT_PROVIDER_TYPE = symbolFor("react.provider"), REACT_CONTEXT_TYPE = symbolFor("react.context"), REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref"), REACT_SUSPENSE_TYPE = symbolFor("react.suspense"), REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list"), REACT_MEMO_TYPE = symbolFor("react.memo"), REACT_LAZY_TYPE = symbolFor("react.lazy"), REACT_BLOCK_TYPE = symbolFor("react.block"), REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block"), REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental"), REACT_SCOPE_TYPE = symbolFor("react.scope"), REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id"), REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode"), REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen"), REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
      }
      var MAYBE_ITERATOR_SYMBOL = typeof Symbol == "function" && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable != "object")
          return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        return typeof maybeIterator == "function" ? maybeIterator : null;
      }
      var ReactSharedInternals = React23.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format2) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
            args[_key2 - 1] = arguments[_key2];
          printWarning("error", format2, args);
        }
      }
      function printWarning(level, format2, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame, stack = ReactDebugCurrentFrame2.getStackAddendum();
          stack !== "" && (format2 += "%s", args = args.concat([stack]));
          var argsWithFormat = args.map(function(item) {
            return "" + item;
          });
          argsWithFormat.unshift("Warning: " + format2), Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = !1;
      function isValidElementType(type) {
        return !!(typeof type == "string" || typeof type == "function" || type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE));
      }
      function getWrappedName2(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || "";
        return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentName(type) {
        if (type == null)
          return null;
        if (typeof type.tag == "number" && error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof type == "function")
          return type.displayName || type.name || null;
        if (typeof type == "string")
          return type;
        switch (type) {
          case exports.Fragment:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName2(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
              return getComponentName(type._render);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init3 = lazyComponent._init;
              try {
                return getComponentName(init3(payload));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = !0;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log, prevInfo = console.info, prevWarn = console.warn, prevError = console.error, prevGroup = console.group, prevGroupCollapsed = console.groupCollapsed, prevGroupEnd = console.groupEnd;
            var props = {
              configurable: !0,
              enumerable: !0,
              value: disabledLog,
              writable: !0
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          if (disabledDepth--, disabledDepth === 0) {
            var props = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: _assign({}, props, {
                value: prevLog
              }),
              info: _assign({}, props, {
                value: prevInfo
              }),
              warn: _assign({}, props, {
                value: prevWarn
              }),
              error: _assign({}, props, {
                value: prevError
              }),
              group: _assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: _assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: _assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          disabledDepth < 0 && error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher, prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0)
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          return `
` + prefix + name;
        }
      }
      var reentry = !1, componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap == "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry)
          return "";
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0)
            return frame;
        }
        var control;
        reentry = !0;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current, ReactCurrentDispatcher.current = null, disableLogs();
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            if (Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack == "string") {
            for (var sampleLines = sample.stack.split(`
`), controlLines = control.stack.split(`
`), s = sampleLines.length - 1, c = controlLines.length - 1; s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]; )
              c--;
            for (; s >= 1 && c >= 0; s--, c--)
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1)
                  do
                    if (s--, c--, c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = `
` + sampleLines[s].replace(" at new ", " at ");
                      return typeof fn == "function" && componentFrameCache.set(fn, _frame), _frame;
                    }
                  while (s >= 1 && c >= 0);
                break;
              }
          }
        } finally {
          reentry = !1, ReactCurrentDispatcher.current = previousDispatcher, reenableLogs(), Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "", syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        return typeof fn == "function" && componentFrameCache.set(fn, syntheticFrame), syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, !1);
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null)
          return "";
        if (typeof type == "function")
          return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type == "string")
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type == "object")
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_BLOCK_TYPE:
              return describeFunctionComponentFrame(type._render);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type, payload = lazyComponent._payload, init3 = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init3(payload), source, ownerFn);
              } catch {
              }
            }
          }
        return "";
      }
      var loggedTypeFailures = {}, ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame.setExtraStackFrame(null);
      }
      function checkPropTypes(typeSpecs, values2, location, componentName, element) {
        {
          var has = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var typeSpecName in typeSpecs)
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] != "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw err.name = "Invariant Violation", err;
                }
                error$1 = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              error$1 && !(error$1 instanceof Error) && (setCurrentlyValidatingElement(element), error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1), setCurrentlyValidatingElement(null)), error$1 instanceof Error && !(error$1.message in loggedTypeFailures) && (loggedTypeFailures[error$1.message] = !0, setCurrentlyValidatingElement(element), error("Failed %s type: %s", location, error$1.message), setCurrentlyValidatingElement(null));
            }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner, hasOwnProperty2 = Object.prototype.hasOwnProperty, RESERVED_PROPS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
      didWarnAboutStringRefs = {};
      function hasValidRef(config3) {
        if (hasOwnProperty2.call(config3, "ref")) {
          var getter = Object.getOwnPropertyDescriptor(config3, "ref").get;
          if (getter && getter.isReactWarning)
            return !1;
        }
        return config3.ref !== void 0;
      }
      function hasValidKey(config3) {
        if (hasOwnProperty2.call(config3, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config3, "key").get;
          if (getter && getter.isReactWarning)
            return !1;
        }
        return config3.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config3, self2) {
        if (typeof config3.ref == "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);
          didWarnAboutStringRefs[componentName] || (error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config3.ref), didWarnAboutStringRefs[componentName] = !0);
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName));
          };
          warnAboutAccessingKey.isReactWarning = !0, Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            specialPropRefWarningShown || (specialPropRefWarningShown = !0, error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName));
          };
          warnAboutAccessingRef.isReactWarning = !0, Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: !0
          });
        }
      }
      var ReactElement = function(type, key, ref, self2, source, owner, props) {
        var element = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: owner
        };
        return element._store = {}, Object.defineProperty(element._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(element, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: self2
        }), Object.defineProperty(element, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: source
        }), Object.freeze && (Object.freeze(element.props), Object.freeze(element)), element;
      };
      function jsxDEV6(type, config3, maybeKey, source, self2) {
        {
          var propName, props = {}, key = null, ref = null;
          maybeKey !== void 0 && (key = "" + maybeKey), hasValidKey(config3) && (key = "" + config3.key), hasValidRef(config3) && (ref = config3.ref, warnIfStringRefCannotBeAutoConverted(config3, self2));
          for (propName in config3)
            hasOwnProperty2.call(config3, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (props[propName] = config3[propName]);
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps)
              props[propName] === void 0 && (props[propName] = defaultProps[propName]);
          }
          if (key || ref) {
            var displayName = typeof type == "function" ? type.displayName || type.name || "Unknown" : type;
            key && defineKeyPropWarningGetter(props, displayName), ref && defineRefPropWarningGetter(props, displayName);
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner, ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        if (element) {
          var owner = element._owner, stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
      }
      var propTypesMisspellWarningShown;
      propTypesMisspellWarningShown = !1;
      function isValidElement2(object) {
        return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentName(ReactCurrentOwner$1.current.type);
            if (name)
              return `

Check the render method of \`` + name + "`.";
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, ""), lineNumber = source.lineNumber;
            return `

Check your code at ` + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType == "string" ? parentType : parentType.displayName || parentType.name;
            parentName && (info = `

Check the top-level render call using <` + parentName + ">.");
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null)
            return;
          element._store.validated = !0;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo])
            return;
          ownerHasKeyUseWarning[currentComponentErrorInfo] = !0;
          var childOwner = "";
          element && element._owner && element._owner !== ReactCurrentOwner$1.current && (childOwner = " It was passed a child from " + getComponentName(element._owner.type) + "."), setCurrentlyValidatingElement$1(element), error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner), setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node != "object")
            return;
          if (Array.isArray(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement2(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement2(node))
            node._store && (node._store.validated = !0);
          else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn == "function" && iteratorFn !== node.entries)
              for (var iterator = iteratorFn.call(node), step; !(step = iterator.next()).done; )
                isValidElement2(step.value) && validateExplicitKey(step.value, parentType);
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type == null || typeof type == "string")
            return;
          var propTypes;
          if (typeof type == "function")
            propTypes = type.propTypes;
          else if (typeof type == "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE))
            propTypes = type.propTypes;
          else
            return;
          if (propTypes) {
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = !0;
            var _name = getComponentName(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          typeof type.getDefaultProps == "function" && !type.getDefaultProps.isReactClassApproved && error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function validateFragmentProps(fragment) {
        {
          for (var keys2 = Object.keys(fragment.props), i = 0; i < keys2.length; i++) {
            var key = keys2[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment), error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key), setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          fragment.ref !== null && (setCurrentlyValidatingElement$1(fragment), error("Invalid attribute `ref` supplied to `React.Fragment`."), setCurrentlyValidatingElement$1(null));
        }
      }
      function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            (type === void 0 || typeof type == "object" && type !== null && Object.keys(type).length === 0) && (info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var sourceInfo = getSourceInfoErrorAddendum(source);
            sourceInfo ? info += sourceInfo : info += getDeclarationErrorAddendum();
            var typeString;
            type === null ? typeString = "null" : Array.isArray(type) ? typeString = "array" : type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentName(type.type) || "Unknown") + " />", info = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type, error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV6(type, props, key, source, self2);
          if (element == null)
            return element;
          if (validType) {
            var children = props.children;
            if (children !== void 0)
              if (isStaticChildren)
                if (Array.isArray(children)) {
                  for (var i = 0; i < children.length; i++)
                    validateChildKeys(children[i], type);
                  Object.freeze && Object.freeze(children);
                } else
                  error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                validateChildKeys(children, type);
          }
          return type === exports.Fragment ? validateFragmentProps(element) : validatePropTypes(element), element;
        }
      }
      var jsxDEV$1 = jsxWithValidation;
      exports.jsxDEV = jsxDEV$1;
    })();
  }
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS({
  "node_modules/react/jsx-dev-runtime.js"(exports, module) {
    "use strict";
    init_virtual_process_polyfill();
    init_buffer();
    module.exports = require_react_jsx_dev_runtime_development();
  }
});

// server.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@remix-run/cloudflare-pages/dist/esm/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@remix-run/cloudflare-pages/dist/esm/worker.js
init_virtual_process_polyfill();
init_buffer();
var import_cloudflare = __toESM(require_dist());
function createRequestHandler2({
  build,
  getLoadContext,
  mode
}) {
  let handleRequest3 = (0, import_cloudflare.createRequestHandler)(build, mode);
  return (context) => {
    let loadContext = getLoadContext == null ? void 0 : getLoadContext(context);
    return handleRequest3(context.request, loadContext);
  };
}
function createPagesFunctionHandler({
  build,
  getLoadContext,
  mode
}) {
  let handleRequest3 = createRequestHandler2({
    build,
    getLoadContext,
    mode
  }), handleFetch = async (context) => {
    let response;
    context.request.headers.delete("if-none-match");
    try {
      response = await context.env.ASSETS.fetch(context.request.url, context.request.clone()), response = response && response.status >= 200 && response.status < 400 ? new Response(response.body, response) : void 0;
    } catch {
    }
    return response || (response = await handleRequest3(context)), response;
  };
  return async (context) => {
    try {
      return await handleFetch(context);
    } catch (e) {
      return e instanceof Error ? (console.error(e), new Response(e.message || e.toString(), {
        status: 500
      })) : new Response("Internal Error", {
        status: 500
      });
    }
  };
}

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
init_virtual_process_polyfill();
init_buffer();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_virtual_process_polyfill();
init_buffer();
var React15 = __toESM(require_react()), import_server3 = __toESM(require_server());

// node_modules/@remix-run/react/dist/esm/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@remix-run/react/dist/esm/components.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js
init_virtual_process_polyfill();
init_buffer();
function _extends3() {
  return _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends3.apply(this, arguments);
}

// node_modules/@remix-run/react/dist/esm/components.js
var React2 = __toESM(require_react());
init_react_router_dom();
init_history();

// node_modules/@remix-run/react/dist/esm/errorBoundaries.js
init_virtual_process_polyfill();
init_buffer();
var import_react3 = __toESM(require_react());
var RemixErrorBoundary = class extends import_react3.default.Component {
  constructor(props) {
    super(props), this.state = {
      error: props.error || null,
      location: props.location
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    return state.location !== props.location ? {
      error: props.error || null,
      location: props.location
    } : {
      error: props.error || state.error,
      location: state.location
    };
  }
  render() {
    return this.state.error ? /* @__PURE__ */ import_react3.default.createElement(this.props.component, {
      error: this.state.error
    }) : this.props.children;
  }
};
function RemixRootDefaultErrorBoundary({
  error
}) {
  return console.error(error), /* @__PURE__ */ import_react3.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react3.default.createElement("head", null, /* @__PURE__ */ import_react3.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react3.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react3.default.createElement("title", null, "Application Error!")), /* @__PURE__ */ import_react3.default.createElement("body", null, /* @__PURE__ */ import_react3.default.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, /* @__PURE__ */ import_react3.default.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), /* @__PURE__ */ import_react3.default.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, error.stack)), /* @__PURE__ */ import_react3.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `
    }
  })));
}
var RemixCatchContext = /* @__PURE__ */ import_react3.default.createContext(void 0);
function useCatch() {
  return (0, import_react3.useContext)(RemixCatchContext);
}
function RemixCatchBoundary({
  catch: catchVal,
  component: Component,
  children
}) {
  return catchVal ? /* @__PURE__ */ import_react3.default.createElement(RemixCatchContext.Provider, {
    value: catchVal
  }, /* @__PURE__ */ import_react3.default.createElement(Component, null)) : /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children);
}
function RemixRootDefaultCatchBoundary() {
  let caught = useCatch();
  return /* @__PURE__ */ import_react3.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react3.default.createElement("head", null, /* @__PURE__ */ import_react3.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react3.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react3.default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ import_react3.default.createElement("body", null, /* @__PURE__ */ import_react3.default.createElement("h1", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, caught.status, " ", caught.statusText), /* @__PURE__ */ import_react3.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `
    }
  })));
}

// node_modules/@remix-run/react/dist/esm/invariant.js
init_virtual_process_polyfill();
init_buffer();
function invariant2(value, message) {
  if (value === !1 || value === null || typeof value > "u")
    throw new Error(message);
}

// node_modules/@remix-run/react/dist/esm/links.js
init_virtual_process_polyfill();
init_buffer();
init_history();

// node_modules/@remix-run/react/dist/esm/routeModules.js
init_virtual_process_polyfill();
init_buffer();
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache)
    return routeModulesCache[route.id];
  try {
    let routeModule = await import(
      /* webpackIgnore: true */
      route.module
    );
    return routeModulesCache[route.id] = routeModule, routeModule;
  } catch {
    return window.location.reload(), new Promise(() => {
    });
  }
}

// node_modules/@remix-run/react/dist/esm/links.js
function getLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    var _module$links;
    let module = routeModules[match.route.id];
    return ((_module$links = module.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module)) || [];
  }).flat(1), preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupe(descriptors, preloads);
}
async function prefetchStyleLinks(routeModule) {
  if (!routeModule.links)
    return;
  let descriptors = routeModule.links();
  if (!descriptors)
    return;
  let styleLinks = [];
  for (let descriptor of descriptors)
    !isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet" && styleLinks.push({
      ...descriptor,
      rel: "preload",
      as: "style"
    });
  let matchingLinks = styleLinks.filter((link) => !link.media || window.matchMedia(link.media).matches);
  await Promise.all(matchingLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      document.head.contains(link) && document.head.removeChild(link);
    }
    link.onload = () => {
      removeLink(), resolve();
    }, link.onerror = () => {
      removeLink(), resolve();
    }, document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page == "string";
}
function isHtmlLinkDescriptor(object) {
  return object == null ? !1 : object.href == null ? object.rel === "preload" && (typeof object.imageSrcSet == "string" || typeof object.imagesrcset == "string") && (typeof object.imageSizes == "string" || typeof object.imagesizes == "string") : typeof object.rel == "string" && typeof object.href == "string";
}
async function getStylesheetPrefetchLinks(matches, routeModules) {
  return (await Promise.all(matches.map(async (match) => {
    let mod = await loadRouteModule(match.route, routeModules);
    return mod.links ? mod.links() : [];
  }))).flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "preload" ? {
    ...link,
    rel: "prefetch"
  } : {
    ...link,
    rel: "prefetch",
    as: "style"
  });
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, location, mode) {
  let path = parsePathPatch(page), isNew = (match, index) => currentMatches[index] ? match.route.id !== currentMatches[index].route.id : !0, matchPathChanged = (match, index) => {
    var _currentMatches$index;
    return currentMatches[index].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"];
  };
  return mode === "data" && location.search !== path.search ? nextMatches.filter((match, index) => match.route.hasLoader ? isNew(match, index) || matchPathChanged(match, index) ? !0 : match.route.shouldReload ? match.route.shouldReload({
    params: match.params,
    prevUrl: new URL(location.pathname + location.search + location.hash, window.origin),
    url: new URL(page, window.origin)
  }) : !0 : !1) : nextMatches.filter((match, index) => (mode === "assets" || match.route.hasLoader) && (isNew(match, index) || matchPathChanged(match, index)));
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page);
  return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
    let {
      pathname,
      search
    } = path, searchParams = new URLSearchParams(search);
    return searchParams.set("_data", match.route.id), `${pathname}?${searchParams}`;
  }));
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifestPatch.routes[match.route.id], hrefs = [route.module];
    return route.imports && (hrefs = hrefs.concat(route.imports)), hrefs;
  }).flat(1));
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id], hrefs = [route.module];
    return route.imports && (hrefs = hrefs.concat(route.imports)), hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function dedupe(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set(), preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    if (!isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href))
      return deduped;
    let str = JSON.stringify(descriptor);
    return set.has(str) || (set.add(str), deduped.push(descriptor)), deduped;
  }, []);
}
function parsePathPatch(href) {
  let path = parsePath(href);
  return path.search === void 0 && (path.search = ""), path;
}

// node_modules/@remix-run/react/dist/esm/markup.js
init_virtual_process_polyfill();
init_buffer();
function createHtml(html2) {
  return {
    __html: html2
  };
}

// node_modules/@remix-run/react/dist/esm/routes.js
init_virtual_process_polyfill();
init_buffer();
var React = __toESM(require_react());

// node_modules/@remix-run/react/dist/esm/data.js
init_virtual_process_polyfill();
init_buffer();
function isCatchResponse2(response) {
  return response instanceof Response && response.headers.get("X-Remix-Catch") != null;
}
function isErrorResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Error") != null;
}
function isRedirectResponse2(response) {
  return response instanceof Response && response.headers.get("X-Remix-Redirect") != null;
}
async function fetchData(url, routeId, signal, submission) {
  url.searchParams.set("_data", routeId);
  let init3 = submission ? getActionInit(submission, signal) : {
    credentials: "same-origin",
    signal
  }, response = await fetch(url.href, init3);
  if (isErrorResponse(response)) {
    let data = await response.json(), error = new Error(data.message);
    return error.stack = data.stack, error;
  }
  return response;
}
async function extractData2(response) {
  let contentType = response.headers.get("Content-Type");
  return contentType && /\bapplication\/json\b/.test(contentType) ? response.json() : response.text();
}
function getActionInit(submission, signal) {
  let {
    encType,
    method,
    formData
  } = submission, headers, body2 = formData;
  if (encType === "application/x-www-form-urlencoded") {
    body2 = new URLSearchParams();
    for (let [key, value] of formData)
      invariant2(typeof value == "string", 'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'), body2.append(key, value);
    headers = {
      "Content-Type": encType
    };
  }
  return {
    method,
    body: body2,
    signal,
    credentials: "same-origin",
    headers
  };
}

// node_modules/@remix-run/react/dist/esm/transition.js
init_virtual_process_polyfill();
init_buffer();
init_history();

// node_modules/@remix-run/react/dist/esm/routeMatching.js
init_virtual_process_polyfill();
init_buffer();
init_react_router_dom();
function matchClientRoutes(routes2, location) {
  let matches = matchRoutes(routes2, location);
  return matches ? matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  })) : null;
}

// node_modules/@remix-run/react/dist/esm/transition.js
var CatchValue = class {
  constructor(status, statusText, data) {
    this.status = status, this.statusText = statusText, this.data = data;
  }
};
function isActionSubmission(submission) {
  return ["POST", "PUT", "PATCH", "DELETE"].includes(submission.method);
}
function isLoaderSubmission(submission) {
  return submission.method === "GET";
}
function isRedirectLocation(location) {
  return Boolean(location.state) && location.state.isRedirect;
}
function isLoaderRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "loader";
}
function isActionRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "action";
}
function isFetchActionRedirect(location) {
  return isRedirectLocation(location) && location.state.type === "fetchAction";
}
function isLoaderSubmissionRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "loaderSubmission";
}
var TransitionRedirect = class {
  constructor(location, setCookie) {
    this.setCookie = setCookie, this.location = typeof location == "string" ? location : location.pathname + location.search;
  }
}, IDLE_TRANSITION = {
  state: "idle",
  submission: void 0,
  location: void 0,
  type: "idle"
}, IDLE_FETCHER = {
  state: "idle",
  type: "init",
  data: void 0,
  submission: void 0
};
function createTransitionManager(init3) {
  let {
    routes: routes2
  } = init3, pendingNavigationController, fetchControllers = /* @__PURE__ */ new Map(), incrementingLoadId = 0, navigationLoadId = -1, fetchReloadIds = /* @__PURE__ */ new Map(), fetchRedirectIds = /* @__PURE__ */ new Set(), subscribers = /* @__PURE__ */ new Set(), matches = matchClientRoutes(routes2, init3.location);
  matches || (matches = [{
    params: {},
    pathname: "",
    route: routes2[0]
  }]);
  let state = {
    location: init3.location,
    loaderData: init3.loaderData || {},
    actionData: init3.actionData,
    catch: init3.catch,
    error: init3.error,
    catchBoundaryId: init3.catchBoundaryId || null,
    errorBoundaryId: init3.errorBoundaryId || null,
    matches,
    nextMatches: void 0,
    transition: IDLE_TRANSITION,
    fetchers: /* @__PURE__ */ new Map()
  };
  function update(updates) {
    updates.transition && updates.transition === IDLE_TRANSITION && (pendingNavigationController = void 0), state = Object.assign({}, state, updates);
    for (let subscriber of subscribers.values())
      subscriber(state);
  }
  function getState() {
    return state;
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function setFetcher(key, fetcher) {
    state.fetchers.set(key, fetcher);
  }
  function deleteFetcher(key) {
    fetchControllers.has(key) && abortFetcher(key), fetchReloadIds.delete(key), fetchRedirectIds.delete(key), state.fetchers.delete(key);
  }
  async function send(event) {
    switch (event.type) {
      case "navigation": {
        let {
          action,
          location,
          submission
        } = event, matches2 = matchClientRoutes(routes2, location);
        matches2 ? !submission && isHashChangeOnly(location) ? await handleHashChange(location, matches2) : action === Action.Pop ? await handleLoad(location, matches2) : submission && isActionSubmission(submission) ? await handleActionSubmissionNavigation(location, submission, matches2) : submission && isLoaderSubmission(submission) ? await handleLoaderSubmissionNavigation(location, submission, matches2) : isActionRedirectLocation(location) ? await handleActionRedirect(location, matches2) : isLoaderSubmissionRedirectLocation(location) ? await handleLoaderSubmissionRedirect(location, matches2) : isLoaderRedirectLocation(location) ? await handleLoaderRedirect(location, matches2) : isFetchActionRedirect(location) ? await handleFetchActionRedirect(location, matches2) : await handleLoad(location, matches2) : (matches2 = [{
          params: {},
          pathname: "",
          route: routes2[0]
        }], await handleNotFoundNavigation(location, matches2)), navigationLoadId = -1;
        break;
      }
      case "fetcher": {
        let {
          key,
          submission,
          href
        } = event, matches2 = matchClientRoutes(routes2, href);
        invariant2(matches2, "No matches found"), fetchControllers.has(key) && abortFetcher(key);
        let match = getFetcherRequestMatch(new URL(href, window.location.href), matches2);
        submission && isActionSubmission(submission) ? await handleActionFetchSubmission(key, submission, match) : submission && isLoaderSubmission(submission) ? await handleLoaderFetchSubmission(href, key, submission, match) : await handleLoaderFetch(href, key, match);
        break;
      }
      default:
        throw new Error(`Unknown data event type: ${event.type}`);
    }
  }
  function dispose() {
    abortNormalNavigation();
    for (let [, controller] of fetchControllers)
      controller.abort();
  }
  function isIndexRequestUrl2(url) {
    for (let param of url.searchParams.getAll("index"))
      if (param === "")
        return !0;
    return !1;
  }
  function getFetcherRequestMatch(url, matches2) {
    let match = matches2.slice(-1)[0];
    return !isIndexRequestUrl2(url) && match.route.index ? matches2.slice(-2)[0] : match;
  }
  async function handleActionFetchSubmission(key, submission, match) {
    let currentFetcher = state.fetchers.get(key), fetcher = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      data: (currentFetcher == null ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher), update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callAction(submission, match, controller.signal);
    if (controller.signal.aborted)
      return;
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: !0,
        type: "fetchAction",
        setCookie: result.value.setCookie
      };
      fetchRedirectIds.add(key), init3.onRedirect(result.value.location, locationState), setFetcher(key, {
        state: "loading",
        type: "actionRedirect",
        submission,
        data: void 0
      }), update({
        fetchers: new Map(state.fetchers)
      });
      return;
    }
    if (maybeBailOnError(match, key, result) || await maybeBailOnCatch(match, key, result))
      return;
    let loadFetcher = {
      state: "loading",
      type: "actionReload",
      data: result.value,
      submission
    };
    setFetcher(key, loadFetcher), update({
      fetchers: new Map(state.fetchers)
    });
    let maybeActionErrorResult = isErrorResult(result) ? result : void 0, maybeActionCatchResult = isCatchResult(result) ? result : void 0, loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let matchesToLoad = state.nextMatches || state.matches, results = await callLoaders(state, state.transition.location || state.location, matchesToLoad, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, match.route.id, loadFetcher);
    if (controller.signal.aborted)
      return;
    fetchReloadIds.delete(key), fetchControllers.delete(key);
    let redirect2 = findRedirect(results);
    if (redirect2) {
      let locationState = {
        isRedirect: !0,
        type: "loader",
        setCookie: redirect2.setCookie
      };
      init3.onRedirect(redirect2.location, locationState);
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, state.matches, maybeActionErrorResult), [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, state.matches, maybeActionCatchResult) || [], doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    let abortedKeys = abortStaleFetchLoads(loadId);
    if (abortedKeys && markFetchersDone(abortedKeys), yeetStaleNavigationLoad(loadId)) {
      let {
        transition
      } = state;
      invariant2(transition.state === "loading", "Expected loading transition"), update({
        location: transition.location,
        matches: state.nextMatches,
        error,
        errorBoundaryId,
        catch: catchVal,
        catchBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad),
        actionData: transition.type === "actionReload" ? state.actionData : void 0,
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers)
      });
    } else
      update({
        fetchers: new Map(state.fetchers),
        error,
        errorBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad)
      });
  }
  function yeetStaleNavigationLoad(landedId) {
    return state.transition.state === "loading" && navigationLoadId < landedId ? (abortNormalNavigation(), !0) : !1;
  }
  function markFetchersDone(keys2) {
    for (let key of keys2) {
      let fetcher = getFetcher(key), doneFetcher = {
        state: "idle",
        type: "done",
        data: fetcher.data,
        submission: void 0
      };
      setFetcher(key, doneFetcher);
    }
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds)
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant2(fetcher, `Expected fetcher: ${key}`), fetcher.state === "loading" && (abortFetcher(key), fetchReloadIds.delete(key), yeetedKeys.push(key));
      }
    return yeetedKeys.length ? yeetedKeys : !1;
  }
  async function handleLoaderFetchSubmission(href, key, submission, match) {
    let currentFetcher = state.fetchers.get(key), fetcher = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      data: (currentFetcher == null ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher), update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    if (fetchControllers.delete(key), controller.signal.aborted)
      return;
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: !0,
        type: "loader",
        setCookie: result.value.setCookie
      };
      init3.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result) || await maybeBailOnCatch(match, key, result))
      return;
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher), update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function handleLoaderFetch(href, key, match) {
    if (typeof AbortController > "u")
      throw new Error("handleLoaderFetch was called during the server render, but it shouldn't be. You are likely calling useFetcher.load() in the body of your component. Try moving it to a useEffect or a callback.");
    let currentFetcher = state.fetchers.get(key), fetcher = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      data: (currentFetcher == null ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher), update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    if (controller.signal.aborted)
      return;
    if (fetchControllers.delete(key), isRedirectResult(result)) {
      let locationState = {
        isRedirect: !0,
        type: "loader",
        setCookie: result.value.setCookie
      };
      init3.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result) || await maybeBailOnCatch(match, key, result))
      return;
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher), update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function maybeBailOnCatch(match, key, result) {
    if (isCatchResult(result)) {
      let catchBoundaryId = findNearestCatchBoundary(match, state.matches);
      return state.fetchers.delete(key), update({
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers),
        catch: {
          data: result.value.data,
          status: result.value.status,
          statusText: result.value.statusText
        },
        catchBoundaryId
      }), !0;
    }
    return !1;
  }
  function maybeBailOnError(match, key, result) {
    if (isErrorResult(result)) {
      let errorBoundaryId = findNearestBoundary(match, state.matches);
      return state.fetchers.delete(key), update({
        fetchers: new Map(state.fetchers),
        error: result.value,
        errorBoundaryId
      }), !0;
    }
    return !1;
  }
  async function handleNotFoundNavigation(location, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "loading",
        type: "normalLoad",
        submission: void 0,
        location
      },
      nextMatches: matches2
    }), await Promise.resolve();
    let catchBoundaryId = findNearestCatchBoundary(matches2[0], matches2);
    update({
      location,
      matches: matches2,
      catch: {
        data: null,
        status: 404,
        statusText: "Not Found"
      },
      catchBoundaryId,
      transition: IDLE_TRANSITION
    });
  }
  async function handleActionSubmissionNavigation(location, submission, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "submitting",
        type: "actionSubmission",
        submission,
        location
      },
      nextMatches: matches2
    });
    let controller = new AbortController();
    pendingNavigationController = controller;
    let actionMatches = matches2;
    !isIndexRequestUrl2(createUrl(submission.action)) && actionMatches[matches2.length - 1].route.index && (actionMatches = actionMatches.slice(0, -1));
    let leafMatch = actionMatches.slice(-1)[0], result = await callAction(submission, leafMatch, controller.signal);
    if (controller.signal.aborted)
      return;
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: !0,
        type: "action",
        setCookie: result.value.setCookie
      };
      init3.onRedirect(result.value.location, locationState);
      return;
    }
    let catchVal, catchBoundaryId;
    isCatchResult(result) && ([catchVal, catchBoundaryId] = await findCatchAndBoundaryId([result], actionMatches, result) || []), update({
      transition: {
        state: "loading",
        type: "actionReload",
        submission,
        location
      },
      actionData: {
        [leafMatch.route.id]: result.value
      }
    }), await loadPageData(location, matches2, submission, leafMatch.route.id, result, catchVal, catchBoundaryId);
  }
  async function handleLoaderSubmissionNavigation(location, submission, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "submitting",
        type: "loaderSubmission",
        submission,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2, submission);
  }
  async function handleHashChange(location, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "loading",
        type: "normalLoad",
        submission: void 0,
        location
      },
      nextMatches: matches2
    }), await Promise.resolve(), update({
      location,
      matches: matches2,
      transition: IDLE_TRANSITION
    });
  }
  async function handleLoad(location, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "loading",
        type: "normalLoad",
        submission: void 0,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2);
  }
  async function handleLoaderRedirect(location, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "loading",
        type: "normalRedirect",
        submission: void 0,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2);
  }
  async function handleLoaderSubmissionRedirect(location, matches2) {
    abortNormalNavigation(), invariant2(state.transition.type === "loaderSubmission", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    update({
      transition: {
        state: "loading",
        type: "loaderSubmissionRedirect",
        submission,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2, submission);
  }
  async function handleFetchActionRedirect(location, matches2) {
    abortNormalNavigation(), update({
      transition: {
        state: "loading",
        type: "fetchActionRedirect",
        submission: void 0,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2);
  }
  async function handleActionRedirect(location, matches2) {
    abortNormalNavigation(), invariant2(state.transition.type === "actionSubmission" || state.transition.type === "actionReload" || state.transition.type === "actionRedirect", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    update({
      transition: {
        state: "loading",
        type: "actionRedirect",
        submission,
        location
      },
      nextMatches: matches2
    }), await loadPageData(location, matches2, submission);
  }
  function isHashChangeOnly(location) {
    return createHref(state.location) === createHref(location) && state.location.hash !== location.hash;
  }
  async function loadPageData(location, matches2, submission, submissionRouteId, actionResult, catchVal, catchBoundaryId) {
    let maybeActionErrorResult = actionResult && isErrorResult(actionResult) ? actionResult : void 0, maybeActionCatchResult = actionResult && isCatchResult(actionResult) ? actionResult : void 0, controller = new AbortController();
    pendingNavigationController = controller, navigationLoadId = ++incrementingLoadId;
    let results = await callLoaders(state, location, matches2, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, submissionRouteId, void 0, catchBoundaryId);
    if (controller.signal.aborted)
      return;
    let redirect2 = findRedirect(results);
    if (redirect2) {
      if (state.transition.type === "actionReload" || isActionRedirectLocation(location)) {
        let locationState = {
          isRedirect: !0,
          type: "action",
          setCookie: redirect2.setCookie
        };
        init3.onRedirect(redirect2.location, locationState);
      } else if (state.transition.type === "loaderSubmission") {
        let locationState = {
          isRedirect: !0,
          type: "loaderSubmission",
          setCookie: redirect2.setCookie
        };
        init3.onRedirect(redirect2.location, locationState);
      } else {
        var _location$state;
        let locationState = {
          isRedirect: !0,
          type: "loader",
          setCookie: redirect2.setCookie || ((_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.setCookie) === !0
        };
        init3.onRedirect(redirect2.location, locationState);
      }
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, matches2, maybeActionErrorResult);
    [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, matches2, maybeActionErrorResult) || [catchVal, catchBoundaryId], markFetchRedirectsDone();
    let abortedIds = abortStaleFetchLoads(navigationLoadId);
    abortedIds && markFetchersDone(abortedIds), update({
      location,
      matches: matches2,
      error,
      errorBoundaryId,
      catch: catchVal,
      catchBoundaryId,
      loaderData: makeLoaderData(state, results, matches2),
      actionData: state.transition.type === "actionReload" ? state.actionData : void 0,
      transition: IDLE_TRANSITION,
      fetchers: abortedIds ? new Map(state.fetchers) : state.fetchers
    });
  }
  function abortNormalNavigation() {
    pendingNavigationController && pendingNavigationController.abort();
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant2(controller, `Expected fetch controller: ${key}`), controller.abort(), fetchControllers.delete(key);
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant2(fetcher, `Expected fetcher: ${key}`), fetcher.type === "actionRedirect" && (fetchRedirectIds.delete(key), doneKeys.push(key));
    }
    markFetchersDone(doneKeys);
  }
  function subscribe(subscriber) {
    return subscribers.add(subscriber), () => {
      subscribers.delete(subscriber);
    };
  }
  return {
    subscribe,
    send,
    getState,
    getFetcher,
    deleteFetcher,
    dispose,
    get _internalFetchControllers() {
      return fetchControllers;
    }
  };
}
async function callLoaders(state, location, matches, signal, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
  let url = createUrl(createHref(location)), matchesToLoad = filterMatchesToLoad(state, location, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId);
  return Promise.all(matchesToLoad.map((match) => callLoader(match, url, signal)));
}
async function callLoader(match, url, signal) {
  invariant2(match.route.loader, `Expected loader for ${match.route.id}`);
  try {
    let {
      params
    } = match, value = await match.route.loader({
      params,
      url,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
async function callAction(submission, match, signal) {
  try {
    let value = await match.route.action({
      url: createUrl(submission.action),
      params: match.params,
      submission,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
function filterMatchesToLoad(state, location, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
  var _location$state2;
  if (catchBoundaryId || submissionRouteId && (actionCatchResult || actionErrorResult)) {
    let foundProblematicRoute = !1;
    matches = matches.filter((match) => foundProblematicRoute ? !1 : match.route.id === submissionRouteId || match.route.id === catchBoundaryId ? (foundProblematicRoute = !0, !1) : !0);
  }
  let isNew = (match, index) => state.matches[index] ? match.route.id !== state.matches[index].route.id : !0, matchPathChanged = (match, index) => {
    var _state$matches$index$;
    return state.matches[index].pathname !== match.pathname || ((_state$matches$index$ = state.matches[index].route.path) === null || _state$matches$index$ === void 0 ? void 0 : _state$matches$index$.endsWith("*")) && state.matches[index].params["*"] !== match.params["*"];
  }, url = createUrl(createHref(location)), filterByRouteProps = (match, index) => {
    if (!match.route.loader)
      return !1;
    if (isNew(match, index) || matchPathChanged(match, index))
      return !0;
    if (match.route.shouldReload) {
      let prevUrl = createUrl(createHref(state.location));
      return match.route.shouldReload({
        prevUrl,
        url,
        submission,
        params: match.params
      });
    }
    return !0;
  };
  return state.matches.length === 1 ? matches.filter((match) => !!match.route.loader) : (fetcher == null ? void 0 : fetcher.type) === "actionReload" || state.transition.type === "actionReload" || state.transition.type === "actionRedirect" || state.transition.type === "fetchActionRedirect" || createHref(url) === createHref(state.location) || url.searchParams.toString() !== state.location.search.substring(1) || (_location$state2 = location.state) !== null && _location$state2 !== void 0 && _location$state2.setCookie ? matches.filter(filterByRouteProps) : matches.filter((match, index, arr) => {
    var _location$state3;
    return (actionErrorResult || actionCatchResult) && arr.length - 1 === index ? !1 : match.route.loader && (isNew(match, index) || matchPathChanged(match, index) || ((_location$state3 = location.state) === null || _location$state3 === void 0 ? void 0 : _location$state3.setCookie));
  });
}
function isRedirectResult(result) {
  return result.value instanceof TransitionRedirect;
}
function createHref(location) {
  return location.pathname + location.search;
}
function findRedirect(results) {
  for (let result of results)
    if (isRedirectResult(result))
      return result.value;
  return null;
}
async function findCatchAndBoundaryId(results, matches, actionCatchResult) {
  let loaderCatchResult;
  for (let result of results)
    if (isCatchResult(result)) {
      loaderCatchResult = result;
      break;
    }
  let extractCatchData = async (res) => ({
    status: res.status,
    statusText: res.statusText,
    data: res.data
  });
  if (actionCatchResult && loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(actionCatchResult.value), boundaryId];
  }
  if (loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(loaderCatchResult.value), boundaryId];
  }
  return null;
}
function findErrorAndBoundaryId(results, matches, actionErrorResult) {
  let loaderErrorResult;
  for (let result of results)
    if (isErrorResult(result)) {
      loaderErrorResult = result;
      break;
    }
  if (actionErrorResult && loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (actionErrorResult) {
    let boundaryId = findNearestBoundary(actionErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [loaderErrorResult.value, boundaryId];
  }
  return [void 0, void 0];
}
function findNearestCatchBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches)
    if (match.route.CatchBoundary && (nearestBoundaryId = match.route.id), match === matchWithError)
      break;
  return nearestBoundaryId;
}
function findNearestBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches)
    if (match.route.ErrorBoundary && (nearestBoundaryId = match.route.id), match === matchWithError)
      break;
  return nearestBoundaryId;
}
function makeLoaderData(state, results, matches) {
  let newData = {};
  for (let {
    match,
    value
  } of results)
    newData[match.route.id] = value;
  let loaderData = {};
  for (let {
    route
  } of matches) {
    let value = newData[route.id] !== void 0 ? newData[route.id] : state.loaderData[route.id];
    value !== void 0 && (loaderData[route.id] = value);
  }
  return loaderData;
}
function isCatchResult(result) {
  return result.value instanceof CatchValue;
}
function isErrorResult(result) {
  return result.value instanceof Error;
}
function createUrl(href) {
  return new URL(href, window.location.origin);
}

// node_modules/@remix-run/react/dist/esm/routes.js
function createClientRoute(entryRoute, routeModulesCache, Component) {
  return {
    caseSensitive: !!entryRoute.caseSensitive,
    element: /* @__PURE__ */ React.createElement(Component, {
      id: entryRoute.id
    }),
    id: entryRoute.id,
    path: entryRoute.path,
    index: entryRoute.index,
    module: entryRoute.module,
    loader: createLoader(entryRoute, routeModulesCache),
    action: createAction(entryRoute, routeModulesCache),
    shouldReload: createShouldReload(entryRoute, routeModulesCache),
    ErrorBoundary: entryRoute.hasErrorBoundary,
    CatchBoundary: entryRoute.hasCatchBoundary,
    hasLoader: entryRoute.hasLoader
  };
}
function createClientRoutes(routeManifest, routeModulesCache, Component, parentId) {
  return Object.keys(routeManifest).filter((key) => routeManifest[key].parentId === parentId).map((key) => {
    let route = createClientRoute(routeManifest[key], routeModulesCache, Component), children = createClientRoutes(routeManifest, routeModulesCache, Component, route.id);
    return children.length > 0 && (route.children = children), route;
  });
}
function createShouldReload(route, routeModules) {
  return (arg) => {
    let module = routeModules[route.id];
    return invariant2(module, `Expected route module to be loaded for ${route.id}`), module.unstable_shouldReload ? module.unstable_shouldReload(arg) : !0;
  };
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModule = await loadRouteModule(route, routeModules);
  return await prefetchStyleLinks(routeModule), routeModule;
}
function createLoader(route, routeModules) {
  return async ({
    url,
    signal,
    submission
  }) => {
    if (route.hasLoader) {
      let [result] = await Promise.all([fetchData(url, route.id, signal, submission), loadRouteModuleWithBlockingLinks(route, routeModules)]);
      if (result instanceof Error)
        throw result;
      let redirect2 = await checkRedirect(result);
      if (redirect2)
        return redirect2;
      if (isCatchResponse2(result))
        throw new CatchValue(result.status, result.statusText, await extractData2(result));
      return extractData2(result);
    } else
      await loadRouteModuleWithBlockingLinks(route, routeModules);
  };
}
function createAction(route, routeModules) {
  return async ({
    url,
    signal,
    submission
  }) => {
    route.hasAction || console.error(`Route "${route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);
    let result = await fetchData(url, route.id, signal, submission);
    if (result instanceof Error)
      throw result;
    let redirect2 = await checkRedirect(result);
    if (redirect2)
      return redirect2;
    if (await loadRouteModuleWithBlockingLinks(route, routeModules), isCatchResponse2(result))
      throw new CatchValue(result.status, result.statusText, await extractData2(result));
    return extractData2(result);
  };
}
async function checkRedirect(response) {
  if (isRedirectResponse2(response)) {
    let url = new URL(response.headers.get("X-Remix-Redirect"), window.location.origin);
    if (url.origin !== window.location.origin)
      await new Promise(() => {
        window.location.replace(url.href);
      });
    else
      return new TransitionRedirect(url.pathname + url.search + url.hash, response.headers.get("X-Remix-Revalidate") !== null);
  }
  return null;
}

// node_modules/@remix-run/react/dist/esm/components.js
var RemixEntryContext = /* @__PURE__ */ React2.createContext(void 0);
function useRemixEntryContext() {
  let context = React2.useContext(RemixEntryContext);
  return invariant2(context, "You must render this element inside a <Remix> element"), context;
}
function RemixEntry({
  context: entryContext,
  action,
  location: historyLocation,
  navigator: _navigator,
  static: staticProp = !1
}) {
  let {
    manifest,
    routeData: documentLoaderData,
    actionData: documentActionData,
    routeModules,
    serverHandoffString,
    appState: entryComponentDidCatchEmulator
  } = entryContext, clientRoutes = React2.useMemo(() => createClientRoutes(manifest.routes, routeModules, RemixRoute), [manifest, routeModules]), [clientState, setClientState] = React2.useState(entryComponentDidCatchEmulator), [transitionManager] = React2.useState(() => createTransitionManager({
    routes: clientRoutes,
    actionData: documentActionData,
    loaderData: documentLoaderData,
    location: historyLocation,
    catch: entryComponentDidCatchEmulator.catch,
    catchBoundaryId: entryComponentDidCatchEmulator.catchBoundaryRouteId,
    onRedirect: _navigator.replace
  }));
  React2.useEffect(() => {
    let subscriber = (state) => {
      setClientState({
        catch: state.catch,
        error: state.error,
        catchBoundaryRouteId: state.catchBoundaryId,
        loaderBoundaryRouteId: state.errorBoundaryId,
        renderBoundaryRouteId: null,
        trackBoundaries: !1,
        trackCatchBoundaries: !1
      });
    };
    return transitionManager.subscribe(subscriber);
  }, [transitionManager]);
  let navigator = React2.useMemo(() => ({
    ..._navigator,
    push: (to, state) => transitionManager.getState().transition.state !== "idle" ? _navigator.replace(to, state) : _navigator.push(to, state)
  }), [_navigator, transitionManager]), {
    location,
    matches,
    loaderData,
    actionData
  } = transitionManager.getState();
  React2.useEffect(() => {
    let {
      location: location2
    } = transitionManager.getState();
    historyLocation !== location2 && transitionManager.send({
      type: "navigation",
      location: historyLocation,
      submission: consumeNextNavigationSubmission(),
      action
    });
  }, [transitionManager, historyLocation, action]);
  let ssrErrorBeforeRoutesRendered = clientState.error && clientState.renderBoundaryRouteId === null && clientState.loaderBoundaryRouteId === null ? deserializeError(clientState.error) : void 0, ssrCatchBeforeRoutesRendered = clientState.catch && clientState.catchBoundaryRouteId === null ? clientState.catch : void 0;
  return /* @__PURE__ */ React2.createElement(RemixEntryContext.Provider, {
    value: {
      matches,
      manifest,
      appState: clientState,
      routeModules,
      serverHandoffString,
      clientRoutes,
      routeData: loaderData,
      actionData,
      transitionManager
    }
  }, /* @__PURE__ */ React2.createElement(RemixErrorBoundary, {
    location,
    component: RemixRootDefaultErrorBoundary,
    error: ssrErrorBeforeRoutesRendered
  }, /* @__PURE__ */ React2.createElement(RemixCatchBoundary, {
    location,
    component: RemixRootDefaultCatchBoundary,
    catch: ssrCatchBeforeRoutesRendered
  }, /* @__PURE__ */ React2.createElement(Router, {
    navigationType: action,
    location,
    navigator,
    static: staticProp
  }, /* @__PURE__ */ React2.createElement(Routes2, null)))));
}
function deserializeError(data) {
  let error = new Error(data.message);
  return error.stack = data.stack, error;
}
function Routes2() {
  let {
    clientRoutes
  } = useRemixEntryContext();
  return useRoutes(clientRoutes) || clientRoutes[0].element;
}
var RemixRouteContext = /* @__PURE__ */ React2.createContext(void 0);
function useRemixRouteContext() {
  let context = React2.useContext(RemixRouteContext);
  return invariant2(context, "You must render this element in a remix route element"), context;
}
function DefaultRouteComponent({
  id
}) {
  throw new Error(`Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
}
function RemixRoute({
  id
}) {
  let location = useLocation(), {
    routeData,
    routeModules,
    appState
  } = useRemixEntryContext();
  invariant2(routeData, `Cannot initialize 'routeData'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`), invariant2(routeModules, `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);
  let data = routeData[id], {
    default: Component,
    CatchBoundary,
    ErrorBoundary: ErrorBoundary2
  } = routeModules[id], element = Component ? /* @__PURE__ */ React2.createElement(Component, null) : /* @__PURE__ */ React2.createElement(DefaultRouteComponent, {
    id
  }), context = {
    data,
    id
  };
  if (CatchBoundary) {
    let maybeServerCaught = appState.catch && appState.catchBoundaryRouteId === id ? appState.catch : void 0;
    appState.trackCatchBoundaries && (appState.catchBoundaryRouteId = id), context = maybeServerCaught ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in a catch boundary.");
      }
    } : {
      id,
      data
    }, element = /* @__PURE__ */ React2.createElement(RemixCatchBoundary, {
      location,
      component: CatchBoundary,
      catch: maybeServerCaught
    }, element);
  }
  if (ErrorBoundary2) {
    let maybeServerRenderError = appState.error && (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id) ? deserializeError(appState.error) : void 0;
    appState.trackBoundaries && (appState.renderBoundaryRouteId = id), context = maybeServerRenderError ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in an error boundary.");
      }
    } : {
      id,
      data
    }, element = /* @__PURE__ */ React2.createElement(RemixErrorBoundary, {
      location,
      component: ErrorBoundary2,
      error: maybeServerRenderError
    }, element);
  }
  return /* @__PURE__ */ React2.createElement(RemixRouteContext.Provider, {
    value: context
  }, element);
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = React2.useState(!1), [shouldPrefetch, setShouldPrefetch] = React2.useState(!1), {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps;
  React2.useEffect(() => {
    prefetch === "render" && setShouldPrefetch(!0);
  }, [prefetch]);
  let setIntent = () => {
    prefetch === "intent" && setMaybePrefetch(!0);
  }, cancelIntent = () => {
    prefetch === "intent" && (setMaybePrefetch(!1), setShouldPrefetch(!1));
  };
  return React2.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(!0);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]), [shouldPrefetch, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
var NavLink2 = /* @__PURE__ */ React2.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let href = useHref(to), [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(NavLink, _extends3({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React2.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
NavLink2.displayName = "NavLink";
var Link2 = /* @__PURE__ */ React2.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let href = useHref(to), [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Link, _extends3({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React2.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
Link2.displayName = "Link";
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event), event.defaultPrevented || ourHandler(event);
  };
}
function Links() {
  let {
    matches,
    routeModules,
    manifest
  } = useRemixEntryContext(), links = React2.useMemo(() => getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, links.map((link) => {
    if (isPageLinkDescriptor(link))
      return /* @__PURE__ */ React2.createElement(PrefetchPageLinks, _extends3({
        key: link.page
      }, link));
    let imageSrcSet = null;
    return "useId" in React2 ? (link.imagesrcset && (link.imageSrcSet = imageSrcSet = link.imagesrcset, delete link.imagesrcset), link.imagesizes && (link.imageSizes = link.imagesizes, delete link.imagesizes)) : (link.imageSrcSet && (link.imagesrcset = imageSrcSet = link.imageSrcSet, delete link.imageSrcSet), link.imageSizes && (link.imagesizes = link.imageSizes, delete link.imageSizes)), /* @__PURE__ */ React2.createElement("link", _extends3({
      key: link.rel + (link.href || "") + (imageSrcSet || "")
    }, link));
  }));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let {
    clientRoutes
  } = useRemixEntryContext(), matches = React2.useMemo(() => matchClientRoutes(clientRoutes, page), [clientRoutes, page]);
  return matches ? /* @__PURE__ */ React2.createElement(PrefetchPageLinksImpl, _extends3({
    page,
    matches
  }, dataLinkProps)) : (console.warn(`Tried to prefetch ${page} but no routes matched.`), null);
}
function usePrefetchedStylesheets(matches) {
  let {
    routeModules
  } = useRemixEntryContext(), [styleLinks, setStyleLinks] = React2.useState([]);
  return React2.useEffect(() => {
    let interrupted = !1;
    return getStylesheetPrefetchLinks(matches, routeModules).then((links) => {
      interrupted || setStyleLinks(links);
    }), () => {
      interrupted = !0;
    };
  }, [matches, routeModules]), styleLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation(), {
    matches,
    manifest
  } = useRemixEntryContext(), newMatchesForData = React2.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location, "data"), [page, nextMatches, matches, location]), newMatchesForAssets = React2.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location, "assets"), [page, nextMatches, matches, location]), dataHrefs = React2.useMemo(() => getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]), moduleHrefs = React2.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]), styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React2.createElement("link", _extends3({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href
  }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React2.createElement("link", _extends3({
    key: href,
    rel: "modulepreload",
    href
  }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ React2.createElement("link", _extends3({
    key: link.href
  }, link))));
}
function Meta() {
  let {
    matches,
    routeData,
    routeModules
  } = useRemixEntryContext(), location = useLocation(), meta2 = {}, parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id, data = routeData[routeId], params = match.params, routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta == "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location
      }) : routeModule.meta;
      Object.assign(meta2, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, Object.entries(meta2).map(([name, value]) => {
    if (!value)
      return null;
    if (["charset", "charSet"].includes(name))
      return /* @__PURE__ */ React2.createElement("meta", {
        key: "charset",
        charSet: value
      });
    if (name === "title")
      return /* @__PURE__ */ React2.createElement("title", {
        key: "title"
      }, String(value));
    let isOpenGraphTag = name.startsWith("og:");
    return [value].flat().map((content) => isOpenGraphTag ? /* @__PURE__ */ React2.createElement("meta", {
      property: name,
      content,
      key: name + content
    }) : typeof content == "string" ? /* @__PURE__ */ React2.createElement("meta", {
      name,
      content,
      key: name + content
    }) : /* @__PURE__ */ React2.createElement("meta", _extends3({
      key: name + JSON.stringify(content)
    }, content)));
  }));
}
var isHydrated = !1;
function Scripts(props) {
  let {
    manifest,
    matches,
    pendingLocation,
    clientRoutes,
    serverHandoffString
  } = useRemixEntryContext();
  React2.useEffect(() => {
    isHydrated = !0;
  }, []);
  let initialScripts = React2.useMemo(() => {
    let contextScript = serverHandoffString ? `window.__remixContext = ${serverHandoffString};` : "", routeModulesScript = `${matches.map((match, index) => `import ${JSON.stringify(manifest.url)};
import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("script", _extends3({}, props, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: createHtml(contextScript),
      type: void 0
    })), /* @__PURE__ */ React2.createElement("script", _extends3({}, props, {
      dangerouslySetInnerHTML: createHtml(routeModulesScript),
      type: "module",
      async: !0
    })));
  }, []), nextMatches = React2.useMemo(() => {
    if (pendingLocation) {
      let matches2 = matchClientRoutes(clientRoutes, pendingLocation);
      return invariant2(matches2, `No routes match path "${pendingLocation.pathname}"`), matches2;
    }
    return [];
  }, [pendingLocation, clientRoutes]), routePreloads = matches.concat(nextMatches).map((match) => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1), preloads = manifest.entry.imports.concat(routePreloads);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("link", {
    rel: "modulepreload",
    href: manifest.entry.module,
    crossOrigin: props.crossOrigin
  }), dedupe2(preloads).map((path) => /* @__PURE__ */ React2.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), isHydrated ? null : initialScripts);
}
function dedupe2(array) {
  return [...new Set(array)];
}
var Form = /* @__PURE__ */ React2.forwardRef((props, ref) => /* @__PURE__ */ React2.createElement(FormImpl, _extends3({}, props, {
  ref
})));
Form.displayName = "Form";
var FormImpl = /* @__PURE__ */ React2.forwardRef(({
  reloadDocument = !1,
  replace = !1,
  method = "get",
  action,
  encType = "application/x-www-form-urlencoded",
  fetchKey,
  onSubmit,
  ...props
}, forwardedRef) => {
  let submit = useSubmitImpl(fetchKey), formMethod = method.toLowerCase() === "get" ? "get" : "post", formAction = useFormAction(action);
  return /* @__PURE__ */ React2.createElement("form", _extends3({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    encType,
    onSubmit: reloadDocument ? void 0 : (event) => {
      if (onSubmit && onSubmit(event), event.defaultPrevented)
        return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      submit(submitter || event.currentTarget, {
        method,
        replace
      });
    }
  }, props));
});
FormImpl.displayName = "FormImpl";
function useFormAction(action, method = "get") {
  let {
    id
  } = useRemixRouteContext(), resolvedPath = useResolvedPath(action ?? "."), location = useLocation(), {
    search,
    hash
  } = resolvedPath, isIndexRoute = id.endsWith("/index");
  if (action == null && (search = location.search, hash = location.hash, isIndexRoute)) {
    let params = new URLSearchParams(search);
    params.delete("index"), search = params.toString() ? `?${params.toString()}` : "";
  }
  return (action == null || action === ".") && isIndexRoute && (search = search ? search.replace(/^\?/, "?index&") : "?index"), createPath({
    pathname: resolvedPath.pathname,
    search,
    hash
  });
}
var defaultMethod = "get", defaultEncType = "application/x-www-form-urlencoded";
function useSubmitImpl(key) {
  let navigate = useNavigate(), defaultAction = useFormAction(), {
    transitionManager
  } = useRemixEntryContext();
  return React2.useCallback((target, options = {}) => {
    let method, action, encType, formData;
    if (isFormElement(target)) {
      let submissionTrigger = options.submissionTrigger;
      method = options.method || target.getAttribute("method") || defaultMethod, action = options.action || target.getAttribute("action") || defaultAction, encType = options.encType || target.getAttribute("enctype") || defaultEncType, formData = new FormData(target), submissionTrigger && submissionTrigger.name && formData.append(submissionTrigger.name, submissionTrigger.value);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null)
        throw new Error("Cannot submit a <button> without a <form>");
      method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod, action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction, encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType, formData = new FormData(form), target.name && formData.append(target.name, target.value);
    } else {
      if (isHtmlElement(target))
        throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      if (method = options.method || "get", action = options.action || defaultAction, encType = options.encType || "application/x-www-form-urlencoded", target instanceof FormData)
        formData = target;
      else if (formData = new FormData(), target instanceof URLSearchParams)
        for (let [name, value] of target)
          formData.append(name, value);
      else if (target != null)
        for (let name of Object.keys(target))
          formData.append(name, target[name]);
    }
    if (typeof document > "u")
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    let {
      protocol,
      host
    } = window.location, url = new URL(action, `${protocol}//${host}`);
    if (method.toLowerCase() === "get") {
      let params = new URLSearchParams(), hasParams = !1;
      for (let [name, value] of formData)
        if (typeof value == "string")
          hasParams = !0, params.append(name, value);
        else
          throw new Error("Cannot submit binary form data using GET");
      let isIndexAction = new URLSearchParams(url.search).getAll("index").some((v) => v === "");
      key != null && isIndexAction && (hasParams = !0, params.append("index", "")), url.search = hasParams ? `?${params.toString()}` : "";
    }
    let submission = {
      formData,
      action: url.pathname + url.search,
      method: method.toUpperCase(),
      encType,
      key: Math.random().toString(36).substr(2, 8)
    };
    key ? transitionManager.send({
      type: "fetcher",
      href: submission.action,
      submission,
      key
    }) : (setNextNavigationSubmission(submission), navigate(url.pathname + url.search, {
      replace: options.replace
    }));
  }, [defaultAction, key, navigate, transitionManager]);
}
var nextNavigationSubmission;
function setNextNavigationSubmission(submission) {
  nextNavigationSubmission = submission;
}
function consumeNextNavigationSubmission() {
  let submission = nextNavigationSubmission;
  return nextNavigationSubmission = void 0, submission;
}
function isHtmlElement(object) {
  return object != null && typeof object.tagName == "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function useBeforeUnload(callback) {
  React2.useEffect(() => (window.addEventListener("beforeunload", callback), () => {
    window.removeEventListener("beforeunload", callback);
  }), [callback]);
}
function useTransition() {
  let {
    transitionManager
  } = useRemixEntryContext();
  return transitionManager.getState().transition;
}
var LiveReload = function({
  port = Number(8002),
  nonce = void 0
}) {
  let js = String.raw;
  return /* @__PURE__ */ React2.createElement("script", {
    nonce,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: js`
                function remixLiveReloadConnect(config) {
                  let protocol = location.protocol === "https:" ? "wss:" : "ws:";
                  let host = location.hostname;
                  let socketPath = protocol + "//" + host + ":" + ${String(port)} + "/socket";

                  let ws = new WebSocket(socketPath);
                  ws.onmessage = (message) => {
                    let event = JSON.parse(message.data);
                    if (event.type === "LOG") {
                      console.log(event.message);
                    }
                    if (event.type === "RELOAD") {
                      console.log("💿 Reloading window ...");
                      window.location.reload();
                    }
                  };
                  ws.onopen = () => {
                    if (config && typeof config.onOpen === "function") {
                      config.onOpen();
                    }
                  };
                  ws.onclose = (error) => {
                    console.log("Remix dev asset server web socket closed. Reconnecting...");
                    setTimeout(
                      () =>
                        remixLiveReloadConnect({
                          onOpen: () => window.location.reload(),
                        }),
                      1000
                    );
                  };
                  ws.onerror = (error) => {
                    console.log("Remix dev asset server web socket error:");
                    console.error(error);
                  };
                }
                remixLiveReloadConnect();
              `
    }
  });
};

// node_modules/@remix-run/react/dist/esm/index.js
init_react_router_dom();

// node_modules/@remix-run/react/dist/esm/scroll-restoration.js
init_virtual_process_polyfill();
init_buffer();
var React3 = __toESM(require_react());
init_react_router_dom();
var STORAGE_KEY = "positions", positions = {};
if (typeof document < "u") {
  let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
  sessionPositions && (positions = JSON.parse(sessionPositions));
}
function ScrollRestoration({
  nonce = void 0
}) {
  useScrollRestoration(), React3.useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []), useBeforeUnload(React3.useCallback(() => {
    window.history.scrollRestoration = "auto";
  }, []));
  let restoreScroll = ((STORAGE_KEY2) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key
      }, "");
    }
    try {
      let storedY = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}")[window.history.state.key];
      typeof storedY == "number" && window.scrollTo(0, storedY);
    } catch (error) {
      console.error(error), sessionStorage.removeItem(STORAGE_KEY2);
    }
  }).toString();
  return /* @__PURE__ */ React3.createElement("script", {
    nonce,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)})`
    }
  });
}
var hydrated = !1;
function useScrollRestoration() {
  let location = useLocation(), transition = useTransition(), wasSubmissionRef = React3.useRef(!1);
  React3.useEffect(() => {
    transition.submission && (wasSubmissionRef.current = !0);
  }, [transition]), React3.useEffect(() => {
    transition.location && (positions[location.key] = window.scrollY);
  }, [transition, location]), useBeforeUnload(React3.useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  }, [])), typeof document < "u" && React3.useLayoutEffect(() => {
    if (!hydrated) {
      hydrated = !0;
      return;
    }
    let y = positions[location.key];
    if (y != null) {
      window.scrollTo(0, y);
      return;
    }
    if (location.hash) {
      let el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    if (wasSubmissionRef.current === !0) {
      wasSubmissionRef.current = !1;
      return;
    }
    window.scrollTo(0, 0);
  }, [location]), React3.useEffect(() => {
    transition.submission && (wasSubmissionRef.current = !0);
  }, [transition]);
}

// node_modules/@remix-run/react/dist/esm/server.js
init_virtual_process_polyfill();
init_buffer();
init_history();
var React4 = __toESM(require_react());
function RemixServer({
  context,
  url
}) {
  typeof url == "string" && (url = new URL(url));
  let location = {
    pathname: url.pathname,
    search: url.search,
    hash: "",
    state: null,
    key: "default"
  }, staticNavigator = {
    createHref(to) {
      return typeof to == "string" ? to : createPath(to);
    },
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
    },
    forward() {
      throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
    },
    block() {
      throw new Error("You cannot use navigator.block() on the server because it is a stateless environment.");
    }
  };
  return /* @__PURE__ */ React4.createElement(RemixEntry, {
    context,
    action: Action.Pop,
    location,
    navigator: staticNavigator,
    static: !0
  });
}

// app/src/createEmotionCache.jsx
init_virtual_process_polyfill();
init_buffer();
var import_cache = __toESM(require_emotion_cache_cjs());
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/src/theme.jsx
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/styles/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
init_virtual_process_polyfill();
init_buffer();
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}

// node_modules/@mui/system/esm/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/styled-engine/index.js
init_virtual_process_polyfill();
init_buffer();
var import_styled = __toESM(require_emotion_styled_cjs()), import_react5 = __toESM(require_emotion_react_cjs());

// node_modules/@mui/styled-engine/GlobalStyles/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js
init_virtual_process_polyfill();
init_buffer();
var React5 = __toESM(require_react()), import_prop_types = __toESM(require_prop_types()), import_react4 = __toESM(require_emotion_react_cjs()), import_jsx_runtime = __toESM(require_jsx_runtime());
function isEmpty(obj) {
  return obj == null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  let {
    styles: styles2,
    defaultTheme: defaultTheme2 = {}
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react4.Global, {
    styles: typeof styles2 == "function" ? (themeInput) => styles2(isEmpty(themeInput) ? defaultTheme2 : themeInput) : styles2
  });
}
GlobalStyles.propTypes = {
  defaultTheme: import_prop_types.default.object,
  styles: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.object, import_prop_types.default.func])
};

// node_modules/@mui/styled-engine/index.js
function styled(tag, options) {
  let stylesFactory = (0, import_styled.default)(tag, options);
  return (...styles2) => {
    let component = typeof tag == "string" ? `"${tag}"` : "component";
    return styles2.length === 0 ? console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : styles2.some((style3) => style3 === void 0) && console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`), stylesFactory(...styles2);
  };
}
var internal_processStyles = (tag, processor) => {
  Array.isArray(tag.__emotion_styles) && (tag.__emotion_styles = processor(tag.__emotion_styles));
};

// node_modules/@mui/system/esm/borders.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/system/esm/responsivePropType.js
init_virtual_process_polyfill();
init_buffer();
var import_prop_types2 = __toESM(require_prop_types()), responsivePropType = import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string, import_prop_types2.default.object, import_prop_types2.default.array]), responsivePropType_default = responsivePropType;

// node_modules/@mui/system/esm/style.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/utils/esm/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/utils/esm/chainPropTypes.js
init_virtual_process_polyfill();
init_buffer();
function chainPropTypes(propType1, propType2) {
  return function(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// node_modules/@mui/utils/esm/deepmerge.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
function isPlainObject(item) {
  return item !== null && typeof item == "object" && item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: !0
}) {
  let output = options.clone ? _extends({}, target) : target;
  return isPlainObject(target) && isPlainObject(source) && Object.keys(source).forEach((key) => {
    key !== "__proto__" && (isPlainObject(source[key]) && key in target && isPlainObject(target[key]) ? output[key] = deepmerge(target[key], source[key], options) : output[key] = source[key]);
  }), output;
}

// node_modules/@mui/utils/esm/exactProp.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  return _extends({}, propTypes, {
    [specialProperty]: (props) => {
      let unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      return unsupportedProps.length > 0 ? new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}

// node_modules/@mui/utils/esm/getDisplayName.js
init_virtual_process_polyfill();
init_buffer();
var import_react_is = __toESM(require_react_is3()), fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  let match = `${fn}`.match(fnNameMatchRegex);
  return match && match[1] || "";
}
function getFunctionComponentName(Component, fallback = "") {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  let functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
  if (Component != null) {
    if (typeof Component == "string")
      return Component;
    if (typeof Component == "function")
      return getFunctionComponentName(Component, "Component");
    if (typeof Component == "object")
      switch (Component.$$typeof) {
        case import_react_is.ForwardRef:
          return getWrappedName(Component, Component.render, "ForwardRef");
        case import_react_is.Memo:
          return getWrappedName(Component, Component.type, "memo");
        default:
          return;
      }
  }
}

// node_modules/@mui/utils/esm/capitalize.js
init_virtual_process_polyfill();
init_buffer();
function capitalize(string) {
  if (typeof string != "string")
    throw new Error("MUI: `capitalize(string)` expects a string argument.");
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// node_modules/@mui/utils/esm/useEnhancedEffect.js
init_virtual_process_polyfill();
init_buffer();
var React6 = __toESM(require_react()), useEnhancedEffect = typeof window < "u" ? React6.useLayoutEffect : React6.useEffect, useEnhancedEffect_default = useEnhancedEffect;

// node_modules/@mui/utils/esm/integerPropType.js
init_virtual_process_polyfill();
init_buffer();
function getTypeByValue(value) {
  let valueType = typeof value;
  switch (valueType) {
    case "number":
      return Number.isNaN(value) ? "NaN" : Number.isFinite(value) ? value !== Math.floor(value) ? "float" : "number" : "Infinity";
    case "object":
      return value === null ? "null" : value.constructor.name;
    default:
      return valueType;
  }
}
function ponyfillIsInteger(x) {
  return typeof x == "number" && isFinite(x) && Math.floor(x) === x;
}
var isInteger = Number.isInteger || ponyfillIsInteger;
function requiredInteger(props, propName, componentName, location) {
  let propValue = props[propName];
  if (propValue == null || !isInteger(propValue)) {
    let propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, ...other) {
  return props[propName] === void 0 ? null : requiredInteger(props, propName, ...other);
}
function validatorNoop() {
  return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
var integerPropType_default = validator;

// node_modules/@mui/utils/esm/resolveProps.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
function resolveProps(defaultProps, props) {
  let output = _extends({}, props);
  return Object.keys(defaultProps).forEach((propName) => {
    output[propName] === void 0 && (output[propName] = defaultProps[propName]);
  }), output;
}

// node_modules/@mui/utils/esm/composeClasses/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/utils/esm/composeClasses/composeClasses.js
init_virtual_process_polyfill();
init_buffer();
function composeClasses(slots, getUtilityClass, classes) {
  let output = {};
  return Object.keys(slots).forEach(
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => (key && (acc.push(getUtilityClass(key)), classes && classes[key] && acc.push(classes[key])), acc), []).join(" ");
    }
  ), output;
}

// node_modules/@mui/utils/esm/generateUtilityClass/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/utils/esm/ClassNameGenerator/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
init_virtual_process_polyfill();
init_buffer();
var defaultGenerator = (componentName) => componentName, createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
}, ClassNameGenerator = createClassNameGenerator(), ClassNameGenerator_default = ClassNameGenerator;

// node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var globalStateClassesMapping = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  let globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
}

// node_modules/@mui/utils/esm/generateUtilityClasses/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
init_virtual_process_polyfill();
init_buffer();
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  let result = {};
  return slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  }), result;
}

// node_modules/@mui/system/esm/breakpoints.js
init_virtual_process_polyfill();
init_buffer();
init_extends();

// node_modules/@mui/system/esm/merge.js
init_virtual_process_polyfill();
init_buffer();
function merge(acc, item) {
  return item ? deepmerge(acc, item, {
    clone: !1
  }) : acc;
}
var merge_default = merge;

// node_modules/@mui/system/esm/breakpoints.js
var values = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}, defaultBreakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  let theme2 = props.theme || {};
  if (Array.isArray(propValue)) {
    let themeBreakpoints = theme2.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => (acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]), acc), {});
  }
  if (typeof propValue == "object") {
    let themeBreakpoints = theme2.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        let mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        let cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  return styleFromPropValue(propValue);
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  return ((_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    let breakpointStyleKey = breakpointsInput.up(key);
    return acc[breakpointStyleKey] = {}, acc;
  }, {})) || {};
}
function removeUnusedBreakpoints(breakpointKeys, style3) {
  return breakpointKeys.reduce((acc, key) => {
    let breakpointOutput = acc[key];
    return (!breakpointOutput || Object.keys(breakpointOutput).length === 0) && delete acc[key], acc;
  }, style3);
}

// node_modules/@mui/system/esm/style.js
function getPath(obj, path, checkVars = !0) {
  if (!path || typeof path != "string")
    return null;
  if (obj && obj.vars && checkVars) {
    let val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null)
      return val;
  }
  return path.split(".").reduce((acc, item) => acc && acc[item] != null ? acc[item] : null, obj);
}
function getValue(themeMapping, transform2, propValueFinal, userValue = propValueFinal) {
  let value;
  return typeof themeMapping == "function" ? value = themeMapping(propValueFinal) : Array.isArray(themeMapping) ? value = themeMapping[propValueFinal] || userValue : value = getPath(themeMapping, propValueFinal) || userValue, transform2 && (value = transform2(value)), value;
}
function style(options) {
  let {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform: transform2
  } = options, fn = (props) => {
    if (props[prop] == null)
      return null;
    let propValue = props[prop], theme2 = props.theme, themeMapping = getPath(theme2, themeKey) || {};
    return handleBreakpoints(props, propValue, (propValueFinal) => {
      let value = getValue(themeMapping, transform2, propValueFinal);
      return propValueFinal === value && typeof propValueFinal == "string" && (value = getValue(themeMapping, transform2, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal)), cssProperty === !1 ? value : {
        [cssProperty]: value
      };
    });
  };
  return fn.propTypes = {
    [prop]: responsivePropType_default
  }, fn.filterProps = [prop], fn;
}
var style_default = style;

// node_modules/@mui/system/esm/compose.js
init_virtual_process_polyfill();
init_buffer();
function compose(...styles2) {
  let handlers = styles2.reduce((acc, style3) => (style3.filterProps.forEach((prop) => {
    acc[prop] = style3;
  }), acc), {}), fn = (props) => Object.keys(props).reduce((acc, prop) => handlers[prop] ? merge_default(acc, handlers[prop](props)) : acc, {});
  return fn.propTypes = styles2.reduce((acc, style3) => Object.assign(acc, style3.propTypes), {}), fn.filterProps = styles2.reduce((acc, style3) => acc.concat(style3.filterProps), []), fn;
}
var compose_default = compose;

// node_modules/@mui/system/esm/spacing.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/system/esm/memoize.js
init_virtual_process_polyfill();
init_buffer();
function memoize(fn) {
  let cache = {};
  return (arg) => (cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg]);
}

// node_modules/@mui/system/esm/spacing.js
var properties = {
  m: "margin",
  p: "padding"
}, directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, getCssProperties = memoize((prop) => {
  if (prop.length > 2)
    if (aliases[prop])
      prop = aliases[prop];
    else
      return [prop];
  let [a, b] = prop.split(""), property = properties[a], direction = directions[b] || "";
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
}), marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme2, themeKey, defaultValue, propName) {
  var _getPath;
  let themeSpacing = (_getPath = getPath(theme2, themeKey, !1)) != null ? _getPath : defaultValue;
  return typeof themeSpacing == "number" ? (abs) => typeof abs == "string" ? abs : (typeof abs != "number" && console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`), themeSpacing * abs) : Array.isArray(themeSpacing) ? (abs) => typeof abs == "string" ? abs : (Number.isInteger(abs) ? abs > themeSpacing.length - 1 && console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join(`
`)), themeSpacing[abs]) : typeof themeSpacing == "function" ? themeSpacing : (console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function createUnarySpacing(theme2) {
  return createUnaryUnit(theme2, "spacing", 8, "spacing");
}
function getValue2(transformer, propValue) {
  if (typeof propValue == "string" || propValue == null)
    return propValue;
  let abs = Math.abs(propValue), transformed = transformer(abs);
  return propValue >= 0 ? transformed : typeof transformed == "number" ? -transformed : `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => (acc[cssProperty] = getValue2(transformer, propValue), acc), {});
}
function resolveCssProperty(props, keys2, prop, transformer) {
  if (keys2.indexOf(prop) === -1)
    return null;
  let cssProperties = getCssProperties(prop), styleFromPropValue = getStyleFromPropValue(cssProperties, transformer), propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style2(props, keys2) {
  let transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys2, prop, transformer)).reduce(merge_default, {});
}
function margin(props) {
  return style2(props, marginKeys);
}
margin.propTypes = marginKeys.reduce((obj, key) => (obj[key] = responsivePropType_default, obj), {});
margin.filterProps = marginKeys;
function padding(props) {
  return style2(props, paddingKeys);
}
padding.propTypes = paddingKeys.reduce((obj, key) => (obj[key] = responsivePropType_default, obj), {});
padding.filterProps = paddingKeys;
function spacing(props) {
  return style2(props, spacingKeys);
}
spacing.propTypes = spacingKeys.reduce((obj, key) => (obj[key] = responsivePropType_default, obj), {});
spacing.filterProps = spacingKeys;
var spacing_default = spacing;

// node_modules/@mui/system/esm/borders.js
function getBorder(value) {
  return typeof value != "number" ? value : `${value}px solid`;
}
var border = style_default({
  prop: "border",
  themeKey: "borders",
  transform: getBorder
}), borderTop = style_default({
  prop: "borderTop",
  themeKey: "borders",
  transform: getBorder
}), borderRight = style_default({
  prop: "borderRight",
  themeKey: "borders",
  transform: getBorder
}), borderBottom = style_default({
  prop: "borderBottom",
  themeKey: "borders",
  transform: getBorder
}), borderLeft = style_default({
  prop: "borderLeft",
  themeKey: "borders",
  transform: getBorder
}), borderColor = style_default({
  prop: "borderColor",
  themeKey: "palette"
}), borderTopColor = style_default({
  prop: "borderTopColor",
  themeKey: "palette"
}), borderRightColor = style_default({
  prop: "borderRightColor",
  themeKey: "palette"
}), borderBottomColor = style_default({
  prop: "borderBottomColor",
  themeKey: "palette"
}), borderLeftColor = style_default({
  prop: "borderLeftColor",
  themeKey: "palette"
}), borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    let transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius"), styleFromPropValue = (propValue) => ({
      borderRadius: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = {
  borderRadius: responsivePropType_default
};
borderRadius.filterProps = ["borderRadius"];
var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius), borders_default = borders;

// node_modules/@mui/system/esm/display.js
init_virtual_process_polyfill();
init_buffer();
var displayPrint = style_default({
  prop: "displayPrint",
  cssProperty: !1,
  transform: (value) => ({
    "@media print": {
      display: value
    }
  })
}), displayRaw = style_default({
  prop: "display"
}), overflow = style_default({
  prop: "overflow"
}), textOverflow = style_default({
  prop: "textOverflow"
}), visibility = style_default({
  prop: "visibility"
}), whiteSpace = style_default({
  prop: "whiteSpace"
}), display_default = compose_default(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

// node_modules/@mui/system/esm/flexbox.js
init_virtual_process_polyfill();
init_buffer();
var flexBasis = style_default({
  prop: "flexBasis"
}), flexDirection = style_default({
  prop: "flexDirection"
}), flexWrap = style_default({
  prop: "flexWrap"
}), justifyContent = style_default({
  prop: "justifyContent"
}), alignItems = style_default({
  prop: "alignItems"
}), alignContent = style_default({
  prop: "alignContent"
}), order = style_default({
  prop: "order"
}), flex = style_default({
  prop: "flex"
}), flexGrow = style_default({
  prop: "flexGrow"
}), flexShrink = style_default({
  prop: "flexShrink"
}), alignSelf = style_default({
  prop: "alignSelf"
}), justifyItems = style_default({
  prop: "justifyItems"
}), justifySelf = style_default({
  prop: "justifySelf"
}), flexbox = compose_default(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf), flexbox_default = flexbox;

// node_modules/@mui/system/esm/cssGrid.js
init_virtual_process_polyfill();
init_buffer();
var gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    let transformer = createUnaryUnit(props.theme, "spacing", 8, "gap"), styleFromPropValue = (propValue) => ({
      gap: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = {
  gap: responsivePropType_default
};
gap.filterProps = ["gap"];
var columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    let transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap"), styleFromPropValue = (propValue) => ({
      columnGap: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = {
  columnGap: responsivePropType_default
};
columnGap.filterProps = ["columnGap"];
var rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    let transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap"), styleFromPropValue = (propValue) => ({
      rowGap: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = {
  rowGap: responsivePropType_default
};
rowGap.filterProps = ["rowGap"];
var gridColumn = style_default({
  prop: "gridColumn"
}), gridRow = style_default({
  prop: "gridRow"
}), gridAutoFlow = style_default({
  prop: "gridAutoFlow"
}), gridAutoColumns = style_default({
  prop: "gridAutoColumns"
}), gridAutoRows = style_default({
  prop: "gridAutoRows"
}), gridTemplateColumns = style_default({
  prop: "gridTemplateColumns"
}), gridTemplateRows = style_default({
  prop: "gridTemplateRows"
}), gridTemplateAreas = style_default({
  prop: "gridTemplateAreas"
}), gridArea = style_default({
  prop: "gridArea"
}), grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea), cssGrid_default = grid;

// node_modules/@mui/system/esm/palette.js
init_virtual_process_polyfill();
init_buffer();
var color = style_default({
  prop: "color",
  themeKey: "palette"
}), bgcolor = style_default({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette"
}), backgroundColor = style_default({
  prop: "backgroundColor",
  themeKey: "palette"
}), palette = compose_default(color, bgcolor, backgroundColor), palette_default = palette;

// node_modules/@mui/system/esm/positions.js
init_virtual_process_polyfill();
init_buffer();
var position = style_default({
  prop: "position"
}), zIndex = style_default({
  prop: "zIndex",
  themeKey: "zIndex"
}), top = style_default({
  prop: "top"
}), right = style_default({
  prop: "right"
}), bottom = style_default({
  prop: "bottom"
}), left = style_default({
  prop: "left"
}), positions_default = compose_default(position, zIndex, top, right, bottom, left);

// node_modules/@mui/system/esm/shadows.js
init_virtual_process_polyfill();
init_buffer();
var boxShadow = style_default({
  prop: "boxShadow",
  themeKey: "shadows"
}), shadows_default = boxShadow;

// node_modules/@mui/system/esm/sizing.js
init_virtual_process_polyfill();
init_buffer();
function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
var width = style_default({
  prop: "width",
  transform
}), maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    let styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
      return {
        maxWidth: ((_props$theme = props.theme) == null || (_props$theme$breakpoi = _props$theme.breakpoints) == null || (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values[propValue] || transform(propValue)
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
var minWidth = style_default({
  prop: "minWidth",
  transform
}), height = style_default({
  prop: "height",
  transform
}), maxHeight = style_default({
  prop: "maxHeight",
  transform
}), minHeight = style_default({
  prop: "minHeight",
  transform
}), sizeWidth = style_default({
  prop: "size",
  cssProperty: "width",
  transform
}), sizeHeight = style_default({
  prop: "size",
  cssProperty: "height",
  transform
}), boxSizing = style_default({
  prop: "boxSizing"
}), sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing), sizing_default = sizing;

// node_modules/@mui/system/esm/typography.js
init_virtual_process_polyfill();
init_buffer();
var fontFamily = style_default({
  prop: "fontFamily",
  themeKey: "typography"
}), fontSize = style_default({
  prop: "fontSize",
  themeKey: "typography"
}), fontStyle = style_default({
  prop: "fontStyle",
  themeKey: "typography"
}), fontWeight = style_default({
  prop: "fontWeight",
  themeKey: "typography"
}), letterSpacing = style_default({
  prop: "letterSpacing"
}), textTransform = style_default({
  prop: "textTransform"
}), lineHeight = style_default({
  prop: "lineHeight"
}), textAlign = style_default({
  prop: "textAlign"
}), typographyVariant = style_default({
  prop: "typography",
  cssProperty: !1,
  themeKey: "typography"
}), typography = compose_default(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform), typography_default = typography;

// node_modules/@mui/system/esm/styleFunctionSx/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/system/esm/getThemeValue.js
init_virtual_process_polyfill();
init_buffer();
var filterPropsMapping = {
  borders: borders_default.filterProps,
  display: display_default.filterProps,
  flexbox: flexbox_default.filterProps,
  grid: cssGrid_default.filterProps,
  positions: positions_default.filterProps,
  palette: palette_default.filterProps,
  shadows: shadows_default.filterProps,
  sizing: sizing_default.filterProps,
  spacing: spacing_default.filterProps,
  typography: typography_default.filterProps
}, styleFunctionMapping = {
  borders: borders_default,
  display: display_default,
  flexbox: flexbox_default,
  grid: cssGrid_default,
  positions: positions_default,
  palette: palette_default,
  shadows: shadows_default,
  sizing: sizing_default,
  spacing: spacing_default,
  typography: typography_default
}, propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => (filterPropsMapping[styleFnName].forEach((propName) => {
  acc[propName] = styleFunctionMapping[styleFnName];
}), acc), {});

// node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
function objectsHaveSameKeys(...objects) {
  let allKeys = objects.reduce((keys2, object) => keys2.concat(Object.keys(object)), []), union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn == "function" ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx(styleFunctionMapping2 = styleFunctionMapping) {
  let propToStyleFunction2 = Object.keys(styleFunctionMapping2).reduce((acc, styleFnName) => (styleFunctionMapping2[styleFnName].filterProps.forEach((propName) => {
    acc[propName] = styleFunctionMapping2[styleFnName];
  }), acc), {});
  function getThemeValue(prop, value, theme2) {
    let inputProps = {
      [prop]: value,
      theme: theme2
    }, styleFunction = propToStyleFunction2[prop];
    return styleFunction ? styleFunction(inputProps) : {
      [prop]: value
    };
  }
  function styleFunctionSx2(props) {
    let {
      sx,
      theme: theme2 = {}
    } = props || {};
    if (!sx)
      return null;
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput == "function")
        sxObject = sxInput(theme2);
      else if (typeof sxInput != "object")
        return sxInput;
      if (!sxObject)
        return null;
      let emptyBreakpoints = createEmptyBreakpointObject(theme2.breakpoints), breakpointsKeys = Object.keys(emptyBreakpoints), css2 = emptyBreakpoints;
      return Object.keys(sxObject).forEach((styleKey) => {
        let value = callIfFn(sxObject[styleKey], theme2);
        if (value != null)
          if (typeof value == "object")
            if (propToStyleFunction2[styleKey])
              css2 = merge_default(css2, getThemeValue(styleKey, value, theme2));
            else {
              let breakpointsValues = handleBreakpoints({
                theme: theme2
              }, value, (x) => ({
                [styleKey]: x
              }));
              objectsHaveSameKeys(breakpointsValues, value) ? css2[styleKey] = styleFunctionSx2({
                sx: value,
                theme: theme2
              }) : css2 = merge_default(css2, breakpointsValues);
            }
          else
            css2 = merge_default(css2, getThemeValue(styleKey, value, theme2));
      }), removeUnusedBreakpoints(breakpointsKeys, css2);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx2;
}
var styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ["sx"];
var styleFunctionSx_default = styleFunctionSx;

// node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var _excluded3 = ["sx"], splitProps = (props) => {
  let result = {
    systemProps: {},
    otherProps: {}
  };
  return Object.keys(props).forEach((prop) => {
    propToStyleFunction[prop] ? result.systemProps[prop] = props[prop] : result.otherProps[prop] = props[prop];
  }), result;
};
function extendSxProp(props) {
  let {
    sx: inSx
  } = props, other = _objectWithoutPropertiesLoose2(props, _excluded3), {
    systemProps,
    otherProps
  } = splitProps(other), finalSx;
  return Array.isArray(inSx) ? finalSx = [systemProps, ...inSx] : typeof inSx == "function" ? finalSx = (...args) => {
    let result = inSx(...args);
    return isPlainObject(result) ? _extends({}, systemProps, result) : systemProps;
  } : finalSx = _extends({}, systemProps, inSx), _extends({}, otherProps, {
    sx: finalSx
  });
}

// node_modules/clsx/dist/clsx.m.js
init_virtual_process_polyfill();
init_buffer();
function r(e) {
  var t, f, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// node_modules/@mui/system/esm/useTheme.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/system/esm/createTheme/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/system/esm/createTheme/createTheme.js
init_virtual_process_polyfill();
init_buffer();
init_extends();

// node_modules/@mui/system/esm/createTheme/createBreakpoints.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var _excluded4 = ["values", "unit", "step"];
var sortBreakpointsValues = (values2) => {
  let breakpointsAsArray = Object.keys(values2).map((key) => ({
    key,
    val: values2[key]
  })) || [];
  return breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val), breakpointsAsArray.reduce((acc, obj) => _extends({}, acc, {
    [obj.key]: obj.val
  }), {});
};
function createBreakpoints(breakpoints) {
  let {
    values: values2 = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose2(breakpoints, _excluded4), sortedValues = sortBreakpointsValues(values2), keys2 = Object.keys(sortedValues);
  function up(key) {
    return `@media (min-width:${typeof values2[key] == "number" ? values2[key] : key}${unit})`;
  }
  function down(key) {
    return `@media (max-width:${(typeof values2[key] == "number" ? values2[key] : key) - step / 100}${unit})`;
  }
  function between(start, end) {
    let endIndex = keys2.indexOf(end);
    return `@media (min-width:${typeof values2[start] == "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys2[endIndex]] == "number" ? values2[keys2[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    return keys2.indexOf(key) + 1 < keys2.length ? between(key, keys2[keys2.indexOf(key) + 1]) : up(key);
  }
  function not(key) {
    let keyIndex = keys2.indexOf(key);
    return keyIndex === 0 ? up(keys2[1]) : keyIndex === keys2.length - 1 ? down(keys2[keyIndex]) : between(key, keys2[keys2.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys: keys2,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}

// node_modules/@mui/system/esm/createTheme/shape.js
init_virtual_process_polyfill();
init_buffer();
var shape = {
  borderRadius: 4
}, shape_default = shape;

// node_modules/@mui/system/esm/createTheme/createSpacing.js
init_virtual_process_polyfill();
init_buffer();
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui)
    return spacingInput;
  let transform2 = createUnarySpacing({
    spacing: spacingInput
  }), spacing2 = (...argsInput) => (argsInput.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`), (argsInput.length === 0 ? [1] : argsInput).map((argument) => {
    let output = transform2(argument);
    return typeof output == "number" ? `${output}px` : output;
  }).join(" "));
  return spacing2.mui = !0, spacing2;
}

// node_modules/@mui/system/esm/createTheme/createTheme.js
var _excluded5 = ["breakpoints", "palette", "spacing", "shape"];
function createTheme(options = {}, ...args) {
  let {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose2(options, _excluded5), breakpoints = createBreakpoints(breakpointsInput), spacing2 = createSpacing(spacingInput), muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing: spacing2,
    shape: _extends({}, shape_default, shapeInput)
  }, other);
  return muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme), muiTheme;
}
var createTheme_default = createTheme;

// node_modules/@mui/system/esm/useThemeWithoutDefault.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/private-theming/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/private-theming/ThemeProvider/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var React9 = __toESM(require_react()), import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/private-theming/useTheme/ThemeContext.js
init_virtual_process_polyfill();
init_buffer();
var React7 = __toESM(require_react()), ThemeContext2 = /* @__PURE__ */ React7.createContext(null);
ThemeContext2.displayName = "ThemeContext";
var ThemeContext_default = ThemeContext2;

// node_modules/@mui/private-theming/useTheme/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/private-theming/useTheme/useTheme.js
init_virtual_process_polyfill();
init_buffer();
var React8 = __toESM(require_react());
function useTheme() {
  let theme2 = React8.useContext(ThemeContext_default);
  return React8.useDebugValue(theme2), theme2;
}

// node_modules/@mui/private-theming/ThemeProvider/nested.js
init_virtual_process_polyfill();
init_buffer();
var hasSymbol = typeof Symbol == "function" && Symbol.for, nested_default = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";

// node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme == "function") {
    let mergedTheme = localTheme(outerTheme);
    return mergedTheme || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`)), mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}
function ThemeProvider(props) {
  let {
    children,
    theme: localTheme
  } = props, outerTheme = useTheme();
  outerTheme === null && typeof localTheme == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  let theme2 = React9.useMemo(() => {
    let output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    return output != null && (output[nested_default] = outerTheme !== null), output;
  }, [localTheme, outerTheme]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ThemeContext_default.Provider, {
    value: theme2,
    children
  });
}
ThemeProvider.propTypes = {
  children: import_prop_types3.default.node,
  theme: import_prop_types3.default.oneOfType([import_prop_types3.default.object, import_prop_types3.default.func]).isRequired
};
ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes);
var ThemeProvider_default = ThemeProvider;

// node_modules/@mui/system/esm/useThemeWithoutDefault.js
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme2(defaultTheme2 = null) {
  let contextTheme = useTheme();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme2 : contextTheme;
}
var useThemeWithoutDefault_default = useTheme2;

// node_modules/@mui/system/esm/useTheme.js
var systemDefaultTheme = createTheme_default();
function useTheme3(defaultTheme2 = systemDefaultTheme) {
  return useThemeWithoutDefault_default(defaultTheme2);
}
var useTheme_default = useTheme3;

// node_modules/@mui/system/esm/createStyled.js
init_virtual_process_polyfill();
init_buffer();
init_extends();

// node_modules/@mui/system/esm/propsToClassKey.js
init_virtual_process_polyfill();
init_buffer();
var _excluded6 = ["variant"];
function isEmpty2(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  let {
    variant
  } = props, other = _objectWithoutPropertiesLoose2(props, _excluded6), classKey = variant || "";
  return Object.keys(other).sort().forEach((key) => {
    key === "color" ? classKey += isEmpty2(classKey) ? props[key] : capitalize(props[key]) : classKey += `${isEmpty2(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
  }), classKey;
}

// node_modules/@mui/system/esm/createStyled.js
var _excluded7 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], _excluded22 = ["theme"], _excluded32 = ["theme"];
function isEmpty3(obj) {
  return Object.keys(obj).length === 0;
}
function isStringTag(tag) {
  return typeof tag == "string" && tag.charCodeAt(0) > 96;
}
var getStyleOverrides = (name, theme2) => theme2.components && theme2.components[name] && theme2.components[name].styleOverrides ? theme2.components[name].styleOverrides : null, getVariantStyles = (name, theme2) => {
  let variants = [];
  theme2 && theme2.components && theme2.components[name] && theme2.components[name].variants && (variants = theme2.components[name].variants);
  let variantsStyles = {};
  return variants.forEach((definition) => {
    let key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  }), variantsStyles;
}, variantsResolver = (props, styles2, theme2, name) => {
  var _theme$components, _theme$components$nam;
  let {
    ownerState = {}
  } = props, variantsStyles = [], themeVariants = theme2 == null || (_theme$components = theme2.components) == null || (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;
  return themeVariants && themeVariants.forEach((themeVariant) => {
    let isMatch = !0;
    Object.keys(themeVariant.props).forEach((key) => {
      ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key] && (isMatch = !1);
    }), isMatch && variantsStyles.push(styles2[propsToClassKey(themeVariant.props)]);
  }), variantsStyles;
};
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
var systemDefaultTheme2 = createTheme_default(), lowercaseFirstLetter = (string) => string.charAt(0).toLowerCase() + string.slice(1);
function createStyled(input = {}) {
  let {
    defaultTheme: defaultTheme2 = systemDefaultTheme2,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp,
    styleFunctionSx: styleFunctionSx2 = styleFunctionSx_default
  } = input, systemSx = (props) => {
    let theme2 = isEmpty3(props.theme) ? defaultTheme2 : props.theme;
    return styleFunctionSx2(_extends({}, props, {
      theme: theme2
    }));
  };
  return systemSx.__mui_systemSx = !0, (tag, inputOptions = {}) => {
    internal_processStyles(tag, (styles2) => styles2.filter((style3) => !(style3 != null && style3.__mui_systemSx)));
    let {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      overridesResolver
    } = inputOptions, options = _objectWithoutPropertiesLoose2(inputOptions, _excluded7), skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : componentSlot && componentSlot !== "Root" || !1, skipSx = inputSkipSx || !1, label;
    componentName && (label = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`);
    let shouldForwardPropOption = shouldForwardProp;
    componentSlot === "Root" ? shouldForwardPropOption = rootShouldForwardProp2 : componentSlot ? shouldForwardPropOption = slotShouldForwardProp : isStringTag(tag) && (shouldForwardPropOption = void 0);
    let defaultStyledResolver = styled(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options)), muiStyledResolver = (styleArg, ...expressions) => {
      let expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg) => typeof stylesArg == "function" && stylesArg.__emotion_real !== stylesArg ? (_ref) => {
        let {
          theme: themeInput
        } = _ref, other = _objectWithoutPropertiesLoose2(_ref, _excluded22);
        return stylesArg(_extends({
          theme: isEmpty3(themeInput) ? defaultTheme2 : themeInput
        }, other));
      } : stylesArg) : [], transformedStyleArg = styleArg;
      componentName && overridesResolver && expressionsWithDefaultTheme.push((props) => {
        let theme2 = isEmpty3(props.theme) ? defaultTheme2 : props.theme, styleOverrides = getStyleOverrides(componentName, theme2);
        if (styleOverrides) {
          let resolvedStyleOverrides = {};
          return Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
            resolvedStyleOverrides[slotKey] = typeof slotStyle == "function" ? slotStyle(_extends({}, props, {
              theme: theme2
            })) : slotStyle;
          }), overridesResolver(props, resolvedStyleOverrides);
        }
        return null;
      }), componentName && !skipVariantsResolver && expressionsWithDefaultTheme.push((props) => {
        let theme2 = isEmpty3(props.theme) ? defaultTheme2 : props.theme;
        return variantsResolver(props, getVariantStyles(componentName, theme2), theme2, componentName);
      }), skipSx || expressionsWithDefaultTheme.push(systemSx);
      let numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        let placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders], transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else
        typeof styleArg == "function" && styleArg.__emotion_real !== styleArg && (transformedStyleArg = (_ref2) => {
          let {
            theme: themeInput
          } = _ref2, other = _objectWithoutPropertiesLoose2(_ref2, _excluded32);
          return styleArg(_extends({
            theme: isEmpty3(themeInput) ? defaultTheme2 : themeInput
          }, other));
        });
      let Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      {
        let displayName;
        componentName && (displayName = `${componentName}${componentSlot || ""}`), displayName === void 0 && (displayName = `Styled(${getDisplayName(tag)})`), Component.displayName = displayName;
      }
      return Component;
    };
    return defaultStyledResolver.withConfig && (muiStyledResolver.withConfig = defaultStyledResolver.withConfig), muiStyledResolver;
  };
}

// node_modules/@mui/system/esm/useThemeProps/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
init_virtual_process_polyfill();
init_buffer();
function getThemeProps(params) {
  let {
    theme: theme2,
    name,
    props
  } = params;
  return !theme2 || !theme2.components || !theme2.components[name] || !theme2.components[name].defaultProps ? props : resolveProps(theme2.components[name].defaultProps, props);
}

// node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
function useThemeProps({
  props,
  name,
  defaultTheme: defaultTheme2
}) {
  let theme2 = useTheme_default(defaultTheme2);
  return getThemeProps({
    theme: theme2,
    name,
    props
  });
}

// node_modules/@mui/system/esm/colorManipulator.js
init_virtual_process_polyfill();
init_buffer();
function clamp(value, min = 0, max = 1) {
  return (value < min || value > max) && console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`), Math.min(Math.max(min, value), max);
}
function hexToRgb(color2) {
  color2 = color2.slice(1);
  let re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g"), colors = color2.match(re);
  return colors && colors[0].length === 1 && (colors = colors.map((n) => n + n)), colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function decomposeColor(color2) {
  if (color2.type)
    return color2;
  if (color2.charAt(0) === "#")
    return decomposeColor(hexToRgb(color2));
  let marker = color2.indexOf("("), type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1)
    throw new Error(`MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`);
  let values2 = color2.substring(marker + 1, color2.length - 1), colorSpace;
  if (type === "color") {
    if (values2 = values2.split(" "), colorSpace = values2.shift(), values2.length === 4 && values2[3].charAt(0) === "/" && (values2[3] = values2[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1)
      throw new Error(`MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`);
  } else
    values2 = values2.split(",");
  return values2 = values2.map((value) => parseFloat(value)), {
    type,
    values: values2,
    colorSpace
  };
}
function recomposeColor(color2) {
  let {
    type,
    colorSpace
  } = color2, {
    values: values2
  } = color2;
  return type.indexOf("rgb") !== -1 ? values2 = values2.map((n, i) => i < 3 ? parseInt(n, 10) : n) : type.indexOf("hsl") !== -1 && (values2[1] = `${values2[1]}%`, values2[2] = `${values2[2]}%`), type.indexOf("color") !== -1 ? values2 = `${colorSpace} ${values2.join(" ")}` : values2 = `${values2.join(", ")}`, `${type}(${values2})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  let {
    values: values2
  } = color2, h = values2[0], s = values2[1] / 100, l = values2[2] / 100, a = s * Math.min(l, 1 - l), f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1), type = "rgb", rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  return color2.type === "hsla" && (type += "a", rgb.push(values2[3])), recomposeColor({
    type,
    values: rgb
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  return rgb = rgb.map((val) => (color2.type !== "color" && (val /= 255), val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4)), Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
  let lumA = getLuminance(foreground), lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color2, value) {
  return color2 = decomposeColor(color2), value = clamp(value), (color2.type === "rgb" || color2.type === "hsl") && (color2.type += "a"), color2.type === "color" ? color2.values[3] = `/${value}` : color2.values[3] = value, recomposeColor(color2);
}
function darken(color2, coefficient) {
  if (color2 = decomposeColor(color2), coefficient = clamp(coefficient), color2.type.indexOf("hsl") !== -1)
    color2.values[2] *= 1 - coefficient;
  else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1)
    for (let i = 0; i < 3; i += 1)
      color2.values[i] *= 1 - coefficient;
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  if (color2 = decomposeColor(color2), coefficient = clamp(coefficient), color2.type.indexOf("hsl") !== -1)
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  else if (color2.type.indexOf("rgb") !== -1)
    for (let i = 0; i < 3; i += 1)
      color2.values[i] += (255 - color2.values[i]) * coefficient;
  else if (color2.type.indexOf("color") !== -1)
    for (let i = 0; i < 3; i += 1)
      color2.values[i] += (1 - color2.values[i]) * coefficient;
  return recomposeColor(color2);
}

// node_modules/@mui/system/esm/ThemeProvider/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
init_virtual_process_polyfill();
init_buffer();
var React10 = __toESM(require_react()), import_prop_types4 = __toESM(require_prop_types());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function InnerThemeProvider(props) {
  let theme2 = useTheme_default();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.ThemeContext.Provider, {
    value: typeof theme2 == "object" ? theme2 : {},
    children: props.children
  });
}
InnerThemeProvider.propTypes = {
  children: import_prop_types4.default.node
};
function ThemeProvider2(props) {
  let {
    children,
    theme: localTheme
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ThemeProvider_default, {
    theme: localTheme,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InnerThemeProvider, {
      children
    })
  });
}
ThemeProvider2.propTypes = {
  children: import_prop_types4.default.node,
  theme: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object]).isRequired
};
ThemeProvider2.propTypes = exactProp(ThemeProvider2.propTypes);
var ThemeProvider_default2 = ThemeProvider2;

// node_modules/@mui/material/esm/styles/createTheme.js
init_virtual_process_polyfill();
init_buffer();
init_extends();

// node_modules/@mui/base/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/base/composeClasses/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/base/generateUtilityClasses/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/base/generateUtilityClass/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/styles/createMixins.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
function createMixins(breakpoints, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}

// node_modules/@mui/material/esm/styles/createPalette.js
init_virtual_process_polyfill();
init_buffer();
init_extends();

// node_modules/@mui/material/esm/colors/common.js
init_virtual_process_polyfill();
init_buffer();
var common = {
  black: "#000",
  white: "#fff"
}, common_default = common;

// node_modules/@mui/material/esm/colors/grey.js
init_virtual_process_polyfill();
init_buffer();
var grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, grey_default = grey;

// node_modules/@mui/material/esm/colors/purple.js
init_virtual_process_polyfill();
init_buffer();
var purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, purple_default = purple;

// node_modules/@mui/material/esm/colors/red.js
init_virtual_process_polyfill();
init_buffer();
var red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, red_default = red;

// node_modules/@mui/material/esm/colors/orange.js
init_virtual_process_polyfill();
init_buffer();
var orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, orange_default = orange;

// node_modules/@mui/material/esm/colors/blue.js
init_virtual_process_polyfill();
init_buffer();
var blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, blue_default = blue;

// node_modules/@mui/material/esm/colors/lightBlue.js
init_virtual_process_polyfill();
init_buffer();
var lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, lightBlue_default = lightBlue;

// node_modules/@mui/material/esm/colors/green.js
init_virtual_process_polyfill();
init_buffer();
var green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, green_default = green;

// node_modules/@mui/material/esm/styles/createPalette.js
var _excluded8 = ["mode", "contrastThreshold", "tonalOffset"], light = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common_default.white,
    default: common_default.white
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, dark = {
  text: {
    primary: common_default.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: common_default.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  let tonalOffsetLight = tonalOffset.light || tonalOffset, tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  intent[direction] || (intent.hasOwnProperty(shade) ? intent[direction] = intent[shade] : direction === "light" ? intent.light = lighten(intent.main, tonalOffsetLight) : direction === "dark" && (intent.dark = darken(intent.main, tonalOffsetDark)));
}
function getDefaultPrimary(mode = "light") {
  return mode === "dark" ? {
    main: blue_default[200],
    light: blue_default[50],
    dark: blue_default[400]
  } : {
    main: blue_default[700],
    light: blue_default[400],
    dark: blue_default[800]
  };
}
function getDefaultSecondary(mode = "light") {
  return mode === "dark" ? {
    main: purple_default[200],
    light: purple_default[50],
    dark: purple_default[400]
  } : {
    main: purple_default[500],
    light: purple_default[300],
    dark: purple_default[700]
  };
}
function getDefaultError(mode = "light") {
  return mode === "dark" ? {
    main: red_default[500],
    light: red_default[300],
    dark: red_default[700]
  } : {
    main: red_default[700],
    light: red_default[400],
    dark: red_default[800]
  };
}
function getDefaultInfo(mode = "light") {
  return mode === "dark" ? {
    main: lightBlue_default[400],
    light: lightBlue_default[300],
    dark: lightBlue_default[700]
  } : {
    main: lightBlue_default[700],
    light: lightBlue_default[500],
    dark: lightBlue_default[900]
  };
}
function getDefaultSuccess(mode = "light") {
  return mode === "dark" ? {
    main: green_default[400],
    light: green_default[300],
    dark: green_default[700]
  } : {
    main: green_default[800],
    light: green_default[500],
    dark: green_default[900]
  };
}
function getDefaultWarning(mode = "light") {
  return mode === "dark" ? {
    main: orange_default[400],
    light: orange_default[300],
    dark: orange_default[700]
  } : {
    main: "#ed6c02",
    light: orange_default[500],
    dark: orange_default[900]
  };
}
function createPalette(palette2) {
  let {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette2, other = _objectWithoutPropertiesLoose2(palette2, _excluded8), primary = palette2.primary || getDefaultPrimary(mode), secondary = palette2.secondary || getDefaultSecondary(mode), error = palette2.error || getDefaultError(mode), info = palette2.info || getDefaultInfo(mode), success = palette2.success || getDefaultSuccess(mode), warning2 = palette2.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    let contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    {
      let contrast = getContrastRatio(background, contrastText);
      contrast < 3 && console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return contrastText;
  }
  let augmentColor = ({
    color: color2,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    if (color2 = _extends({}, color2), !color2.main && color2[mainShade] && (color2.main = color2[mainShade]), !color2.hasOwnProperty("main"))
      throw new Error(`MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.`);
    if (typeof color2.main != "string")
      throw new Error(`MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color2.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`);
    return addLightOrDark(color2, "light", lightShade, tonalOffset), addLightOrDark(color2, "dark", darkShade, tonalOffset), color2.contrastText || (color2.contrastText = getContrastText(color2.main)), color2;
  }, modes = {
    dark,
    light
  };
  return modes[mode] || console.error(`MUI: The palette mode \`${mode}\` is not supported.`), deepmerge(_extends({
    common: _extends({}, common_default),
    mode,
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: augmentColor({
      color: error,
      name: "error"
    }),
    warning: augmentColor({
      color: warning2,
      name: "warning"
    }),
    info: augmentColor({
      color: info,
      name: "info"
    }),
    success: augmentColor({
      color: success,
      name: "success"
    }),
    grey: grey_default,
    contrastThreshold,
    getContrastText,
    augmentColor,
    tonalOffset
  }, modes[mode]), other);
}

// node_modules/@mui/material/esm/styles/createTypography.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var _excluded9 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var caseAllCaps = {
  textTransform: "uppercase"
}, defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette2, typography2) {
  let _ref = typeof typography2 == "function" ? typography2(palette2) : typography2, {
    fontFamily: fontFamily2 = defaultFontFamily,
    fontSize: fontSize2 = 14,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    htmlFontSize = 16,
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose2(_ref, _excluded9);
  typeof fontSize2 != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof htmlFontSize != "number" && console.error("MUI: `htmlFontSize` is required to be a number.");
  let coef = fontSize2 / 14, pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`), buildVariant = (fontWeight2, size, lineHeight2, letterSpacing2, casing) => _extends({
    fontFamily: fontFamily2,
    fontWeight: fontWeight2,
    fontSize: pxToRem(size),
    lineHeight: lineHeight2
  }, fontFamily2 === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing2 / size)}em`
  } : {}, casing, allVariants), variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily: fontFamily2,
    fontSize: fontSize2,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: !1
  });
}

// node_modules/@mui/material/esm/styles/shadows.js
init_virtual_process_polyfill();
init_buffer();
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${0.2})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${0.14})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${0.12})`].join(",");
}
var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], shadows_default2 = shadows;

// node_modules/@mui/material/esm/styles/createTransitions.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var _excluded10 = ["duration", "easing", "delay"], easing = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2)
    return 0;
  let constant = height2 / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  let mergedEasing = _extends({}, easing, inputTransitions.easing), mergedDuration = _extends({}, duration, inputTransitions.duration);
  return _extends({
    getAutoHeightDuration,
    create: (props = ["all"], options = {}) => {
      let {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options, other = _objectWithoutPropertiesLoose2(options, _excluded10);
      {
        let isString2 = (value) => typeof value == "string", isNumber2 = (value) => !isNaN(parseFloat(value));
        !isString2(props) && !Array.isArray(props) && console.error('MUI: Argument "props" must be a string or Array.'), !isNumber2(durationOption) && !isString2(durationOption) && console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`), isString2(easingOption) || console.error('MUI: Argument "easing" must be a string.'), !isNumber2(delay) && !isString2(delay) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(other).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
      }
      return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption == "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay == "string" ? delay : formatMs(delay)}`).join(",");
    }
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// node_modules/@mui/material/esm/styles/zIndex.js
init_virtual_process_polyfill();
init_buffer();
var zIndex2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, zIndex_default = zIndex2;

// node_modules/@mui/material/esm/styles/createTheme.js
var _excluded11 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme2(options = {}, ...args) {
  let {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose2(options, _excluded11);
  if (options.vars)
    throw new Error("MUI: `vars` is a private field used for CSS variables support.\nPlease use another name.");
  let palette2 = createPalette(paletteInput), systemTheme = createTheme_default(options), muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette: palette2,
    shadows: shadows_default2.slice(),
    typography: createTypography(palette2, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex_default)
  });
  muiTheme = deepmerge(muiTheme, other), muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  {
    let stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], traverse = (node, component) => {
      let key;
      for (key in node) {
        let child = node[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          {
            let stateClass = generateUtilityClass("", key);
            console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach((component) => {
      let styleOverrides = muiTheme.components[component].styleOverrides;
      styleOverrides && component.indexOf("Mui") === 0 && traverse(styleOverrides, component);
    });
  }
  return muiTheme;
}
var createTheme_default2 = createTheme2;

// node_modules/@mui/material/esm/styles/useTheme.js
init_virtual_process_polyfill();
init_buffer();
var React11 = __toESM(require_react());

// node_modules/@mui/material/esm/styles/defaultTheme.js
init_virtual_process_polyfill();
init_buffer();
var defaultTheme = createTheme_default2(), defaultTheme_default = defaultTheme;

// node_modules/@mui/material/esm/styles/useTheme.js
function useTheme4() {
  let theme2 = useTheme_default(defaultTheme_default);
  return React11.useDebugValue(theme2), theme2;
}

// node_modules/@mui/material/esm/styles/useThemeProps.js
init_virtual_process_polyfill();
init_buffer();
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme_default
  });
}

// node_modules/@mui/material/esm/styles/styled.js
init_virtual_process_polyfill();
init_buffer();
var rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
var styled2 = createStyled({
  defaultTheme: defaultTheme_default,
  rootShouldForwardProp
}), styled_default = styled2;

// node_modules/@mui/material/esm/styles/ThemeProvider.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/Paper/Paper.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var React12 = __toESM(require_react()), import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/material/esm/Paper/paperClasses.js
init_virtual_process_polyfill();
init_buffer();
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
var paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);

// node_modules/@mui/material/esm/Paper/Paper.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime()), _excluded12 = ["className", "component", "elevation", "square", "variant"], getOverlayAlpha = (elevation) => {
  let alphaValue;
  return elevation < 1 ? alphaValue = 5.11916 * elevation ** 2 : alphaValue = 4.5 * Math.log(elevation + 1) + 2, (alphaValue / 100).toFixed(2);
}, useUtilityClasses = (ownerState) => {
  let {
    square,
    elevation,
    variant,
    classes
  } = ownerState, slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
}, PaperRoot = styled_default("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2[`elevation${ownerState.elevation}`]];
  }
})(({
  theme: theme2,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends({
    backgroundColor: (theme2.vars || theme2).palette.background.paper,
    color: (theme2.vars || theme2).palette.text.primary,
    transition: theme2.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme2.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme2.vars || theme2).palette.divider}`
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: (theme2.vars || theme2).shadows[ownerState.elevation]
  }, !theme2.vars && theme2.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha(ownerState.elevation))})`
  }, theme2.vars && {
    backgroundImage: (_theme$vars$overlays = theme2.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
}), Paper = /* @__PURE__ */ React12.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiPaper"
  }), {
    className,
    component = "div",
    elevation = 1,
    square = !1,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose2(props, _excluded12), ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  }), classes = useUtilityClasses(ownerState);
  return useTheme4().shadows[elevation] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join(`
`)), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx_m_default(classes.root, className),
    ref
  }, other));
});
Paper.propTypes = {
  children: import_prop_types5.default.node,
  classes: import_prop_types5.default.object,
  className: import_prop_types5.default.string,
  component: import_prop_types5.default.elementType,
  elevation: chainPropTypes(integerPropType_default, (props) => {
    let {
      elevation,
      variant
    } = props;
    return elevation > 0 && variant === "outlined" ? new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  square: import_prop_types5.default.bool,
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  variant: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["elevation", "outlined"]), import_prop_types5.default.string])
};
var Paper_default = Paper;

// node_modules/@mui/material/esm/colors/index.js
init_virtual_process_polyfill();
init_buffer();

// app/src/theme.jsx
var theme = createTheme_default2({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red_default.A400
    }
  }
}), theme_default = theme;

// node_modules/@mui/material/esm/CssBaseline/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/CssBaseline/CssBaseline.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var React14 = __toESM(require_react()), import_prop_types7 = __toESM(require_prop_types());

// node_modules/@mui/material/esm/GlobalStyles/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/GlobalStyles/GlobalStyles.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var React13 = __toESM(require_react()), import_prop_types6 = __toESM(require_prop_types());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function GlobalStyles2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(GlobalStyles, _extends({}, props, {
    defaultTheme: defaultTheme_default
  }));
}
GlobalStyles2.propTypes = {
  styles: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.number, import_prop_types6.default.object, import_prop_types6.default.shape({
    __emotion_styles: import_prop_types6.default.any.isRequired
  }), import_prop_types6.default.string, import_prop_types6.default.bool])
};
var GlobalStyles_default = GlobalStyles2;

// node_modules/@mui/material/esm/CssBaseline/CssBaseline.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime()), import_jsx_runtime7 = __toESM(require_jsx_runtime()), html = (theme2, enableColorScheme) => _extends({
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  boxSizing: "border-box",
  WebkitTextSizeAdjust: "100%"
}, enableColorScheme && {
  colorScheme: theme2.palette.mode
}), body = (theme2) => _extends({
  color: (theme2.vars || theme2).palette.text.primary
}, theme2.typography.body1, {
  backgroundColor: (theme2.vars || theme2).palette.background.default,
  "@media print": {
    backgroundColor: (theme2.vars || theme2).palette.common.white
  }
}), styles = (theme2, enableColorScheme = !1) => {
  var _theme$components, _theme$components$Mui;
  let defaultStyles = {
    html: html(theme2, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme2.typography.fontWeightBold
    },
    body: _extends({
      margin: 0
    }, body(theme2), {
      "&::backdrop": {
        backgroundColor: (theme2.vars || theme2).palette.background.default
      }
    })
  }, themeOverrides = (_theme$components = theme2.components) == null || (_theme$components$Mui = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components$Mui.styleOverrides;
  return themeOverrides && (defaultStyles = [defaultStyles, themeOverrides]), defaultStyles;
};
function CssBaseline(inProps) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiCssBaseline"
  }), {
    children,
    enableColorScheme = !1
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(React14.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime6.jsx)(GlobalStyles_default, {
      styles: (theme2) => styles(theme2, enableColorScheme)
    }), children]
  });
}
CssBaseline.propTypes = {
  children: import_prop_types7.default.node,
  enableColorScheme: import_prop_types7.default.bool
};
var CssBaseline_default = CssBaseline;

// app/entry.server.jsx
var import_react7 = __toESM(require_emotion_react_cjs()), import_create_instance = __toESM(require_emotion_server_create_instance_cjs()), import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html2 = (0, import_server3.renderToString)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(() => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.CacheProvider, {
    value: cache,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider_default2, {
      theme: theme_default,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CssBaseline_default, {}, void 0, !1, {
          fileName: "app/entry.server.jsx",
          lineNumber: 24,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.jsx",
          lineNumber: 25,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/entry.server.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/entry.server.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this), {}, void 0, !1, {
    fileName: "app/entry.server.jsx",
    lineNumber: 31,
    columnNumber: 31
  }, this)), { styles: styles2 } = extractCriticalToChunks(html2), stylesHTML = "";
  styles2.forEach(({ key, ids, css: css2 }) => {
    let newStyleTag = `<style data-emotion="${`${key} ${ids.join(" ")}`}">${css2}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  let markup = html2.replace(
    /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
    `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  App: () => App,
  ErrorBoundary: () => ErrorBoundary,
  default: () => root_default,
  meta: () => meta
});
init_virtual_process_polyfill();
init_buffer();
var import_react10 = __toESM(require_react());
var import_react12 = __toESM(require_emotion_react_cjs());

// node_modules/@mui/material/esm/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/utils/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/utils/capitalize.js
init_virtual_process_polyfill();
init_buffer();
var capitalize_default = capitalize;

// node_modules/@mui/material/esm/utils/createSvgIcon.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var React17 = __toESM(require_react());

// node_modules/@mui/material/esm/SvgIcon/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/SvgIcon/SvgIcon.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var React16 = __toESM(require_react()), import_prop_types8 = __toESM(require_prop_types());

// node_modules/@mui/material/esm/SvgIcon/svgIconClasses.js
init_virtual_process_polyfill();
init_buffer();
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/esm/SvgIcon/SvgIcon.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime()), import_jsx_runtime9 = __toESM(require_jsx_runtime()), _excluded13 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], useUtilityClasses2 = (ownerState) => {
  let {
    color: color2,
    fontSize: fontSize2,
    classes
  } = ownerState, slots = {
    root: ["root", color2 !== "inherit" && `color${capitalize_default(color2)}`, `fontSize${capitalize_default(fontSize2)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
}, SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize_default(ownerState.color)}`], styles2[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(({
  theme: theme2,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette$ownerState$c2, _palette2, _palette2$action, _palette3, _palette3$action;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme2.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme2.transitions) == null || (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme2.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme2.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme2.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
    }[ownerState.fontSize],
    color: (_palette$ownerState$c = (_palette = (theme2.vars || theme2).palette) == null || (_palette$ownerState$c2 = _palette[ownerState.color]) == null ? void 0 : _palette$ownerState$c2.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme2.vars || theme2).palette) == null || (_palette2$action = _palette2.action) == null ? void 0 : _palette2$action.active,
      disabled: (_palette3 = (theme2.vars || theme2).palette) == null || (_palette3$action = _palette3.action) == null ? void 0 : _palette3$action.disabled,
      inherit: void 0
    }[ownerState.color]
  };
}), SvgIcon = /* @__PURE__ */ React16.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiSvgIcon"
  }), {
    children,
    className,
    color: color2 = "inherit",
    component = "svg",
    fontSize: fontSize2 = "medium",
    htmlColor,
    inheritViewBox = !1,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose2(props, _excluded13), ownerState = _extends({}, props, {
    color: color2,
    component,
    fontSize: fontSize2,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox
  }), more = {};
  inheritViewBox || (more.viewBox = viewBox);
  let classes = useUtilityClasses2(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(SvgIconRoot, _extends({
    as: component,
    className: clsx_m_default(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : !0,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, {
    ownerState,
    children: [children, titleAccess ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
SvgIcon.propTypes = {
  children: import_prop_types8.default.node,
  classes: import_prop_types8.default.object,
  className: import_prop_types8.default.string,
  color: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types8.default.string]),
  component: import_prop_types8.default.elementType,
  fontSize: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types8.default.string]),
  htmlColor: import_prop_types8.default.string,
  inheritViewBox: import_prop_types8.default.bool,
  shapeRendering: import_prop_types8.default.string,
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
  titleAccess: import_prop_types8.default.string,
  viewBox: import_prop_types8.default.string
};
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/esm/utils/createSvgIcon.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
function createSvgIcon(path, displayName) {
  let Component = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SvgIcon_default, _extends({
    "data-testid": `${displayName}Icon`,
    ref
  }, props, {
    children: path
  }));
  return Component.displayName = `${displayName}Icon`, Component.muiName = SvgIcon_default.muiName, /* @__PURE__ */ React17.memo(/* @__PURE__ */ React17.forwardRef(Component));
}

// node_modules/@mui/material/esm/utils/useEnhancedEffect.js
init_virtual_process_polyfill();
init_buffer();
var useEnhancedEffect_default2 = useEnhancedEffect_default;

// node_modules/@mui/material/esm/Paper/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/Typography/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/Typography/Typography.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var React18 = __toESM(require_react()), import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/material/esm/Typography/typographyClasses.js
init_virtual_process_polyfill();
init_buffer();
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
var typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);

// node_modules/@mui/material/esm/Typography/Typography.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime()), _excluded14 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], useUtilityClasses3 = (ownerState) => {
  let {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState, slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize_default(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
}, TypographyRoot = styled_default("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.root, ownerState.variant && styles2[ownerState.variant], ownerState.align !== "inherit" && styles2[`align${capitalize_default(ownerState.align)}`], ownerState.noWrap && styles2.noWrap, ownerState.gutterBottom && styles2.gutterBottom, ownerState.paragraph && styles2.paragraph];
  }
})(({
  theme: theme2,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant && theme2.typography[ownerState.variant], ownerState.align !== "inherit" && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, ownerState.gutterBottom && {
  marginBottom: "0.35em"
}, ownerState.paragraph && {
  marginBottom: 16
})), defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, transformDeprecatedColors = (color2) => colorTransformations[color2] || color2, Typography = /* @__PURE__ */ React18.forwardRef(function(inProps, ref) {
  let themeProps = useThemeProps2({
    props: inProps,
    name: "MuiTypography"
  }), color2 = transformDeprecatedColors(themeProps.color), props = extendSxProp(_extends({}, themeProps, {
    color: color2
  })), {
    align = "inherit",
    className,
    component,
    gutterBottom = !1,
    noWrap = !1,
    paragraph = !1,
    variant = "body1",
    variantMapping = defaultVariantMapping
  } = props, other = _objectWithoutPropertiesLoose2(props, _excluded14), ownerState = _extends({}, props, {
    align,
    color: color2,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  }), Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span", classes = useUtilityClasses3(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TypographyRoot, _extends({
    as: Component,
    ref,
    ownerState,
    className: clsx_m_default(classes.root, className)
  }, other));
});
Typography.propTypes = {
  align: import_prop_types9.default.oneOf(["center", "inherit", "justify", "left", "right"]),
  children: import_prop_types9.default.node,
  classes: import_prop_types9.default.object,
  className: import_prop_types9.default.string,
  component: import_prop_types9.default.elementType,
  gutterBottom: import_prop_types9.default.bool,
  noWrap: import_prop_types9.default.bool,
  paragraph: import_prop_types9.default.bool,
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
  variant: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), import_prop_types9.default.string]),
  variantMapping: import_prop_types9.default.object
};
var Typography_default = Typography;

// node_modules/@mui/material/esm/AppBar/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/AppBar/AppBar.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var React19 = __toESM(require_react()), import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/material/esm/AppBar/appBarClasses.js
init_virtual_process_polyfill();
init_buffer();
function getAppBarUtilityClass(slot) {
  return generateUtilityClass("MuiAppBar", slot);
}
var appBarClasses = generateUtilityClasses("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent"]);

// node_modules/@mui/material/esm/AppBar/AppBar.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime()), _excluded15 = ["className", "color", "enableColorOnDark", "position"], useUtilityClasses4 = (ownerState) => {
  let {
    color: color2,
    position: position2,
    classes
  } = ownerState, slots = {
    root: ["root", `color${capitalize_default(color2)}`, `position${capitalize_default(position2)}`]
  };
  return composeClasses(slots, getAppBarUtilityClass, classes);
}, joinVars = (var1, var2) => `${var1 == null ? void 0 : var1.replace(")", "")}, ${var2})`, AppBarRoot = styled_default(Paper_default, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.root, styles2[`position${capitalize_default(ownerState.position)}`], styles2[`color${capitalize_default(ownerState.color)}`]];
  }
})(({
  theme: theme2,
  ownerState
}) => {
  let backgroundColorDefault = theme2.palette.mode === "light" ? theme2.palette.grey[100] : theme2.palette.grey[900];
  return _extends({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    flexShrink: 0
  }, ownerState.position === "fixed" && {
    position: "fixed",
    zIndex: (theme2.vars || theme2).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0,
    "@media print": {
      position: "absolute"
    }
  }, ownerState.position === "absolute" && {
    position: "absolute",
    zIndex: (theme2.vars || theme2).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, ownerState.position === "sticky" && {
    position: "sticky",
    zIndex: (theme2.vars || theme2).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, ownerState.position === "static" && {
    position: "static"
  }, ownerState.position === "relative" && {
    position: "relative"
  }, !theme2.vars && _extends({}, ownerState.color === "default" && {
    backgroundColor: backgroundColorDefault,
    color: theme2.palette.getContrastText(backgroundColorDefault)
  }, ownerState.color && ownerState.color !== "default" && ownerState.color !== "inherit" && ownerState.color !== "transparent" && {
    backgroundColor: theme2.palette[ownerState.color].main,
    color: theme2.palette[ownerState.color].contrastText
  }, ownerState.color === "inherit" && {
    color: "inherit"
  }, theme2.palette.mode === "dark" && !ownerState.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, ownerState.color === "transparent" && _extends({
    backgroundColor: "transparent",
    color: "inherit"
  }, theme2.palette.mode === "dark" && {
    backgroundImage: "none"
  })), theme2.vars && _extends({}, ownerState.color === "default" && {
    "--AppBar-background": ownerState.enableColorOnDark ? theme2.vars.palette.AppBar.defaultBg : joinVars(theme2.vars.palette.AppBar.darkBg, theme2.vars.palette.AppBar.defaultBg),
    "--AppBar-color": ownerState.enableColorOnDark ? theme2.vars.palette.text.primary : joinVars(theme2.vars.palette.AppBar.darkColor, theme2.vars.palette.text.primary)
  }, ownerState.color && !ownerState.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": ownerState.enableColorOnDark ? theme2.vars.palette[ownerState.color].main : joinVars(theme2.vars.palette.AppBar.darkBg, theme2.vars.palette[ownerState.color].main),
    "--AppBar-color": ownerState.enableColorOnDark ? theme2.vars.palette[ownerState.color].contrastText : joinVars(theme2.vars.palette.AppBar.darkColor, theme2.vars.palette[ownerState.color].contrastText)
  }, {
    backgroundColor: "var(--AppBar-background)",
    color: ownerState.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, ownerState.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
}), AppBar = /* @__PURE__ */ React19.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiAppBar"
  }), {
    className,
    color: color2 = "primary",
    enableColorOnDark = !1,
    position: position2 = "fixed"
  } = props, other = _objectWithoutPropertiesLoose2(props, _excluded15), ownerState = _extends({}, props, {
    color: color2,
    position: position2,
    enableColorOnDark
  }), classes = useUtilityClasses4(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AppBarRoot, _extends({
    square: !0,
    component: "header",
    ownerState,
    elevation: 4,
    className: clsx_m_default(classes.root, className, position2 === "fixed" && "mui-fixed"),
    ref
  }, other));
});
AppBar.propTypes = {
  children: import_prop_types10.default.node,
  classes: import_prop_types10.default.object,
  className: import_prop_types10.default.string,
  color: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["default", "inherit", "primary", "secondary", "transparent"]), import_prop_types10.default.string]),
  enableColorOnDark: import_prop_types10.default.bool,
  position: import_prop_types10.default.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object])
};
var AppBar_default = AppBar;

// node_modules/@mui/material/esm/CircularProgress/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
init_virtual_process_polyfill();
init_buffer();
init_extends();
var React20 = __toESM(require_react()), import_prop_types11 = __toESM(require_prop_types());

// node_modules/@mui/material/esm/CircularProgress/circularProgressClasses.js
init_virtual_process_polyfill();
init_buffer();
function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass("MuiCircularProgress", slot);
}
var circularProgressClasses = generateUtilityClasses("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);

// node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime()), _excluded16 = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"], _ = (t) => t, _t, _t2, _t3, _t4, SIZE = 44, circularRotateKeyframe = (0, import_react5.keyframes)(_t || (_t = _`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), circularDashKeyframe = (0, import_react5.keyframes)(_t2 || (_t2 = _`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), useUtilityClasses5 = (ownerState) => {
  let {
    classes,
    variant,
    color: color2,
    disableShrink
  } = ownerState, slots = {
    root: ["root", variant, `color${capitalize_default(color2)}`],
    svg: ["svg"],
    circle: ["circle", `circle${capitalize_default(variant)}`, disableShrink && "circleDisableShrink"]
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
}, CircularProgressRoot = styled_default("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`color${capitalize_default(ownerState.color)}`]];
  }
})(({
  ownerState,
  theme: theme2
}) => _extends({
  display: "inline-block"
}, ownerState.variant === "determinate" && {
  transition: theme2.transitions.create("transform")
}, ownerState.color !== "inherit" && {
  color: (theme2.vars || theme2).palette[ownerState.color].main
}), ({
  ownerState
}) => ownerState.variant === "indeterminate" && (0, import_react5.css)(_t3 || (_t3 = _`
      animation: ${0} 1.4s linear infinite;
    `), circularRotateKeyframe)), CircularProgressSVG = styled_default("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (props, styles2) => styles2.svg
})({
  display: "block"
}), CircularProgressCircle = styled_default("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.circle, styles2[`circle${capitalize_default(ownerState.variant)}`], ownerState.disableShrink && styles2.circleDisableShrink];
  }
})(({
  ownerState,
  theme: theme2
}) => _extends({
  stroke: "currentColor"
}, ownerState.variant === "determinate" && {
  transition: theme2.transitions.create("stroke-dashoffset")
}, ownerState.variant === "indeterminate" && {
  strokeDasharray: "80px, 200px",
  strokeDashoffset: 0
}), ({
  ownerState
}) => ownerState.variant === "indeterminate" && !ownerState.disableShrink && (0, import_react5.css)(_t4 || (_t4 = _`
      animation: ${0} 1.4s ease-in-out infinite;
    `), circularDashKeyframe)), CircularProgress = /* @__PURE__ */ React20.forwardRef(function(inProps, ref) {
  let props = useThemeProps2({
    props: inProps,
    name: "MuiCircularProgress"
  }), {
    className,
    color: color2 = "primary",
    disableShrink = !1,
    size = 40,
    style: style3,
    thickness = 3.6,
    value = 0,
    variant = "indeterminate"
  } = props, other = _objectWithoutPropertiesLoose2(props, _excluded16), ownerState = _extends({}, props, {
    color: color2,
    disableShrink,
    size,
    thickness,
    value,
    variant
  }), classes = useUtilityClasses5(ownerState), circleStyle = {}, rootStyle = {}, rootProps = {};
  if (variant === "determinate") {
    let circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3), rootProps["aria-valuenow"] = Math.round(value), circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`, rootStyle.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CircularProgressRoot, _extends({
    className: clsx_m_default(classes.root, className),
    style: _extends({
      width: size,
      height: size
    }, rootStyle, style3),
    ownerState,
    ref,
    role: "progressbar"
  }, rootProps, other, {
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CircularProgressSVG, {
      className: classes.svg,
      ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  }));
});
CircularProgress.propTypes = {
  classes: import_prop_types11.default.object,
  className: import_prop_types11.default.string,
  color: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types11.default.string]),
  disableShrink: chainPropTypes(import_prop_types11.default.bool, (props) => props.disableShrink && props.variant && props.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  size: import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string]),
  style: import_prop_types11.default.object,
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
  thickness: import_prop_types11.default.number,
  value: import_prop_types11.default.number,
  variant: import_prop_types11.default.oneOf(["determinate", "indeterminate"])
};
var CircularProgress_default = CircularProgress;

// app/src/ClientStyleContext.jsx
init_virtual_process_polyfill();
init_buffer();
var import_react8 = __toESM(require_react()), ClientStyleContext_default = (0, import_react8.createContext)({
  reset: () => {
  }
});

// app/components/Navbar.jsx
init_virtual_process_polyfill();
init_buffer();
var import_react9 = __toESM(require_react());

// node_modules/mui-image/es/index.js
init_virtual_process_polyfill();
init_buffer();

// node_modules/mui-image/es/Image.js
init_virtual_process_polyfill();
init_buffer();
var React21 = __toESM(require_react()), import_prop_types12 = __toESM(require_prop_types());
var _excluded17 = ["src", "alt", "height", "width", "position", "fit", "style", "className", "showLoading", "errorIcon", "shift", "distance", "shiftDuration", "bgColor", "wrapperStyle", "iconWrapperStyle", "wrapperClassName", "iconWrapperClassName", "duration", "easing", "onLoad", "onError"];
function _extends4() {
  return _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends4.apply(this, arguments);
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i;
  for (i = 0; i < sourceKeys.length; i++)
    key = sourceKeys[i], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
var BrokenImageIcon = createSvgIcon(/* @__PURE__ */ React21.createElement("path", {
  d: "M21 5v6.59l-2.29-2.3c-.39-.39-1.03-.39-1.42 0L14 12.59 10.71 9.3a.9959.9959 0 0 0-1.41 0L6 12.59 3 9.58V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l2.29 2.29c.39.39 1.02.39 1.41 0l3.3-3.3 3.29 3.29c.39.39 1.02.39 1.41 0l3.3-3.28z"
}), "BrokenImageIcon"), Img = styled_default("img")({
  "@keyframes materialize": {
    "0%": {
      filter: "saturate(20%) contrast(50%) brightness(120%)"
    },
    "75%": {
      filter: "saturate(60%) contrast(100%) brightness(100%)"
    },
    "100%": {
      filter: "saturate(100%) contrast(100%) brightness(100%)"
    }
  }
});
function Image(props) {
  var _shiftStyles, src = props.src, alt = props.alt, height2 = props.height, width2 = props.width, position2 = props.position, fit = props.fit, style3 = props.style, className = props.className, showLoading = props.showLoading, errorIcon = props.errorIcon, shift = props.shift, distance = props.distance, shiftDuration = props.shiftDuration, bgColor = props.bgColor, wrapperStyle = props.wrapperStyle, iconWrapperStyle = props.iconWrapperStyle, wrapperClassName = props.wrapperClassName, iconWrapperClassName = props.iconWrapperClassName, duration2 = props.duration, easing2 = props.easing, onLoadProp = props.onLoad, onErrorProp = props.onError, rest = _objectWithoutPropertiesLoose3(props, _excluded17), _React$useState = React21.useState(!1), loaded = _React$useState[0], setLoaded = _React$useState[1], _React$useState2 = React21.useState(!1), error = _React$useState2[0], setError = _React$useState2[1];
  function handleLoad() {
    setLoaded(!0), setError(!1), Boolean(onLoadProp) && onLoadProp();
  }
  function handleError() {
    setError(!0), setLoaded(!1), Boolean(onErrorProp) && onErrorProp();
  }
  var shiftStyles = (_shiftStyles = {}, _shiftStyles[shift] = loaded ? 0 : distance, _shiftStyles), styles2 = {
    root: _extends4({
      width: width2,
      height: height2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: bgColor
    }, wrapperStyle),
    image: _extends4({
      position: position2,
      width: "100%",
      height: "100%",
      objectFit: fit,
      transitionProperty: (Boolean(shift) ? shift + ", " : "") + "opacity",
      transitionDuration: (Boolean(shift) ? (shiftDuration || duration2 * 0.3) + "ms, " : "") + duration2 / 2 + "ms",
      transitionTimingFunction: easing2,
      opacity: loaded ? 1 : 0,
      animation: loaded ? "materialize " + duration2 + "ms 1 " + easing2 : ""
    }, Boolean(shift) && shiftStyles, style3),
    icons: _extends4({
      width: "100%",
      marginLeft: "-100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      opacity: loaded ? 0 : 1
    }, iconWrapperStyle)
  }, showErrorIcon = typeof errorIcon != "boolean" && errorIcon || /* @__PURE__ */ React21.createElement(BrokenImageIcon, {
    style: {
      fontSize: 56,
      color: "#bdbdbd"
    }
  }), loadingIndicator = typeof showLoading != "boolean" && showLoading || /* @__PURE__ */ React21.createElement(CircularProgress_default, {
    size: 56,
    thickness: 6
  });
  return /* @__PURE__ */ React21.createElement("div", {
    style: styles2.root,
    className: "mui-image-wrapper " + wrapperClassName
  }, /* @__PURE__ */ React21.createElement(Img, _extends4({
    src,
    alt,
    style: styles2.image,
    className: "mui-image-img " + className,
    onLoad: handleLoad,
    onError: handleError
  }, rest)), (Boolean(showLoading) || Boolean(errorIcon)) && /* @__PURE__ */ React21.createElement("div", {
    style: styles2.icons,
    className: "mui-image-iconWrapper " + iconWrapperClassName
  }, Boolean(errorIcon) && error && showErrorIcon, Boolean(showLoading) && !error && !loaded && loadingIndicator));
}
Image.defaultProps = {
  alt: "",
  height: "100%",
  width: "100%",
  position: "relative",
  fit: "cover",
  showLoading: !1,
  errorIcon: !0,
  shift: !1,
  distance: 100,
  shiftDuration: null,
  bgColor: "inherit",
  duration: 3e3,
  easing: "cubic-bezier(0.7, 0, 0.6, 1)",
  className: "",
  wrapperClassName: "",
  iconWrapperClassName: ""
};
Image.propTypes = {
  src: import_prop_types12.default.string.isRequired,
  alt: import_prop_types12.default.string,
  height: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
  width: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
  style: import_prop_types12.default.object,
  className: import_prop_types12.default.string,
  showLoading: import_prop_types12.default.oneOfType([import_prop_types12.default.bool, import_prop_types12.default.node]),
  errorIcon: import_prop_types12.default.oneOfType([import_prop_types12.default.bool, import_prop_types12.default.node]),
  shift: import_prop_types12.default.oneOf([!1, null, "top", "bottom", "left", "right"]),
  distance: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
  shiftDuration: import_prop_types12.default.number,
  bgColor: import_prop_types12.default.string,
  wrapperStyle: import_prop_types12.default.object,
  iconWrapperStyle: import_prop_types12.default.object,
  wrapperClassName: import_prop_types12.default.string,
  iconWrapperClassName: import_prop_types12.default.string,
  duration: import_prop_types12.default.number,
  easing: import_prop_types12.default.string,
  onLoad: import_prop_types12.default.func,
  onError: import_prop_types12.default.func,
  position: import_prop_types12.default.oneOf(["static", "relative", "absolute", "fixed", "sticky", "inherit", "initial", "revert", "unset"]),
  fit: import_prop_types12.default.oneOf(["contain", "cover", "fill", "none", "scale-down", "inherit", "initial", "revert", "unset"])
};

// public/logos/Logo-Sideways-Large.svg
var Logo_Sideways_Large_default = "/build/_assets/Logo-Sideways-Large-RKZ6NYFC.svg";

// app/components/Navbar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), StyledDivContent = styled_default("div")(({ theme: theme2 }) => ({
  display: "flex",
  alignItems: "center",
  ...theme2.mixins.toolbar
})), Navbar = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppBar_default, {
      position: "static",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: Logo_Sideways_Large_default,
        style: { height: "auto", width: "5em" }
      }, void 0, !1, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDivContent, {
      children
    }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/Navbar.jsx",
  lineNumber: 19,
  columnNumber: 5
}, this);

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime()), meta = () => ({
  charset: "utf-8",
  title: "MouseioLogic",
  viewport: "width=device-width,initial-scale=1"
}), App = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/root.jsx",
  lineNumber: 26,
  columnNumber: 5
}, this), Document = (0, import_react12.withEmotionCache)(({ children, title: title3 }, emotionCache) => {
  let clientStyleData = (0, import_react10.useContext)(ClientStyleContext_default);
  return useEnhancedEffect_default2(() => {
    emotionCache.sheet.container = document.head;
    let tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush(), tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    }), clientStyleData.reset();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 57,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 55,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 59,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
});
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    title: "Error!",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: "There was an error"
        }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 77,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: error.message
        }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 78,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 79,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: "Hey, developer, you should replace this with what you want your users to see."
        }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
var root_default = App;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_virtual_process_polyfill();
init_buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, {
      variant: "h3",
      children: "Mouseio Logic Landing Page"
    }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
init_virtual_process_polyfill();
init_buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, {
      variant: "h3",
      children: "Mouseio Logic Home Page"
    }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/home.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_virtual_process_polyfill();
init_buffer();
var assets_manifest_default = { version: "a7cfa28b", entry: { module: "/build/entry.client-5IQLTUQB.js", imports: ["/build/_shared/chunk-TAERPY7F.js", "/build/_shared/chunk-G5M72AIL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DFDBSU4B.js", imports: ["/build/_shared/chunk-CJGPBC7D.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-E5OIIBNE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VYOM3QZU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-A7CFA28B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};

// server.js
var handleRequest2 = createPagesFunctionHandler({
  build: server_build_exports,
  mode: "development",
  getLoadContext: (context) => context.env
});
function onRequest(context) {
  return handleRequest2(context);
}
export {
  onRequest
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @remix-run/cloudflare v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/cloudflare-pages v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/** @license MUI v5.0.0-alpha.100
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license MUI v5.10.6
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom-server.node.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/[[path]].js.map
