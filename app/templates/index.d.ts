declare namespace <%= camelModuleName %> {
  interface Options {

		/**
    Add a prefix
    @default 'rainbows'
		*/
    readonly postfix?: string;
  }
}

/**
Do something!!

@param input - The input
@returns Something else

@example
```
import <%= camelModuleName %> from '<%= moduleName %>';

<%= camelModuleName %>('hello')
// => 'hello'
```
*/
declare function <%= camelModuleName %>(
  input: string,
  options?: <%= camelModuleName %>.Options,
): string;

export = <%= camelModuleName %>;