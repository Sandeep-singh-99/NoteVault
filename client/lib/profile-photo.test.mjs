import assert from "node:assert/strict";
import { validateProfilePhoto } from "./profile-photo.ts";

for (const type of ["image/jpeg", "image/png", "image/webp"]) {
  assert.equal(validateProfilePhoto({ type, size: 5 * 1024 * 1024 }), "");
}
for (const file of [
  { type: "image/svg+xml", size: 100 },
  { type: "text/plain", size: 100 },
  { type: "image/png", size: 5 * 1024 * 1024 + 1 },
  { type: "image/png", size: 0 },
]) {
  assert.notEqual(validateProfilePhoto(file), "");
}
