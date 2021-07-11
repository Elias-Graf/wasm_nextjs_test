/* tslint:disable */
/* eslint-disable */
/**
* @param {User} user
* @returns {string}
*/
export function format_username(user: User): string;
/**
*/
export class User {
  free(): void;
/**
* @param {string} first_name
* @param {string} last_name
*/
  constructor(first_name: string, last_name: string);
/**
* @param {string} last_name
*/
  fast_name: string;
/**
* @param {string} first_name
*/
  first_name: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_user_free: (a: number) => void;
  readonly user_new: (a: number, b: number, c: number, d: number) => number;
  readonly user_set_first_name: (a: number, b: number, c: number) => void;
  readonly user_set_fast_name: (a: number, b: number, c: number) => void;
  readonly format_username: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
