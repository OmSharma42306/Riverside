
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sessions
 * 
 */
export type Sessions = $Result.DefaultSelection<Prisma.$SessionsPayload>
/**
 * Model Tracks
 * 
 */
export type Tracks = $Result.DefaultSelection<Prisma.$TracksPayload>
/**
 * Model JoinSession
 * 
 */
export type JoinSession = $Result.DefaultSelection<Prisma.$JoinSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **Sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.SessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tracks`: Exposes CRUD operations for the **Tracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.tracks.findMany()
    * ```
    */
  get tracks(): Prisma.TracksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.joinSession`: Exposes CRUD operations for the **JoinSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JoinSessions
    * const joinSessions = await prisma.joinSession.findMany()
    * ```
    */
  get joinSession(): Prisma.JoinSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Sessions: 'Sessions',
    Tracks: 'Tracks',
    JoinSession: 'JoinSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "sessions" | "tracks" | "joinSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sessions: {
        payload: Prisma.$SessionsPayload<ExtArgs>
        fields: Prisma.SessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findFirst: {
            args: Prisma.SessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findMany: {
            args: Prisma.SessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          create: {
            args: Prisma.SessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          createMany: {
            args: Prisma.SessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          delete: {
            args: Prisma.SessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          update: {
            args: Prisma.SessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          deleteMany: {
            args: Prisma.SessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          upsert: {
            args: Prisma.SessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.SessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      Tracks: {
        payload: Prisma.$TracksPayload<ExtArgs>
        fields: Prisma.TracksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TracksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TracksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          findFirst: {
            args: Prisma.TracksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TracksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          findMany: {
            args: Prisma.TracksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>[]
          }
          create: {
            args: Prisma.TracksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          createMany: {
            args: Prisma.TracksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TracksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>[]
          }
          delete: {
            args: Prisma.TracksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          update: {
            args: Prisma.TracksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          deleteMany: {
            args: Prisma.TracksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TracksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TracksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>[]
          }
          upsert: {
            args: Prisma.TracksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          aggregate: {
            args: Prisma.TracksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTracks>
          }
          groupBy: {
            args: Prisma.TracksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TracksGroupByOutputType>[]
          }
          count: {
            args: Prisma.TracksCountArgs<ExtArgs>
            result: $Utils.Optional<TracksCountAggregateOutputType> | number
          }
        }
      }
      JoinSession: {
        payload: Prisma.$JoinSessionPayload<ExtArgs>
        fields: Prisma.JoinSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoinSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoinSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload>
          }
          findFirst: {
            args: Prisma.JoinSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoinSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload>
          }
          findMany: {
            args: Prisma.JoinSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload>[]
          }
          create: {
            args: Prisma.JoinSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload>
          }
          createMany: {
            args: Prisma.JoinSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JoinSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload>[]
          }
          delete: {
            args: Prisma.JoinSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload>
          }
          update: {
            args: Prisma.JoinSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload>
          }
          deleteMany: {
            args: Prisma.JoinSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JoinSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JoinSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload>[]
          }
          upsert: {
            args: Prisma.JoinSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinSessionPayload>
          }
          aggregate: {
            args: Prisma.JoinSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJoinSession>
          }
          groupBy: {
            args: Prisma.JoinSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<JoinSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.JoinSessionCountArgs<ExtArgs>
            result: $Utils.Optional<JoinSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sessions?: SessionsOmit
    tracks?: TracksOmit
    joinSession?: JoinSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    tracks: number
    joins: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    tracks?: boolean | UserCountOutputTypeCountTracksArgs
    joins?: boolean | UserCountOutputTypeCountJoinsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinSessionWhereInput
  }


  /**
   * Count Type SessionsCountOutputType
   */

  export type SessionsCountOutputType = {
    tracks: number
    joinSession: number
  }

  export type SessionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | SessionsCountOutputTypeCountTracksArgs
    joinSession?: boolean | SessionsCountOutputTypeCountJoinSessionArgs
  }

  // Custom InputTypes
  /**
   * SessionsCountOutputType without action
   */
  export type SessionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsCountOutputType
     */
    select?: SessionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionsCountOutputType without action
   */
  export type SessionsCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
  }

  /**
   * SessionsCountOutputType without action
   */
  export type SessionsCountOutputTypeCountJoinSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tracks?: boolean | User$tracksArgs<ExtArgs>
    joins?: boolean | User$joinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tracks?: boolean | User$tracksArgs<ExtArgs>
    joins?: boolean | User$joinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionsPayload<ExtArgs>[]
      tracks: Prisma.$TracksPayload<ExtArgs>[]
      joins: Prisma.$JoinSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tracks<T extends User$tracksArgs<ExtArgs> = {}>(args?: Subset<T, User$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joins<T extends User$joinsArgs<ExtArgs> = {}>(args?: Subset<T, User$joinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * User.tracks
   */
  export type User$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    cursor?: TracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * User.joins
   */
  export type User$joinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    where?: JoinSessionWhereInput
    orderBy?: JoinSessionOrderByWithRelationInput | JoinSessionOrderByWithRelationInput[]
    cursor?: JoinSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinSessionScalarFieldEnum | JoinSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionCode: string | null
    sessionName: string | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionCode: string | null
    sessionName: string | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    userId: number
    sessionCode: number
    sessionName: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    userId?: true
    sessionCode?: true
    sessionName?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionCode?: true
    sessionName?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    userId?: true
    sessionCode?: true
    sessionName?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to aggregate.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type SessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithAggregationInput | SessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: SessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: number
    userId: number
    sessionCode: string
    sessionName: string
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends SessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type SessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionCode?: boolean
    sessionName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tracks?: boolean | Sessions$tracksArgs<ExtArgs>
    joinSession?: boolean | Sessions$joinSessionArgs<ExtArgs>
    _count?: boolean | SessionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionCode?: boolean
    sessionName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionCode?: boolean
    sessionName?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionCode?: boolean
    sessionName?: boolean
  }

  export type SessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionCode" | "sessionName", ExtArgs["result"]["sessions"]>
  export type SessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tracks?: boolean | Sessions$tracksArgs<ExtArgs>
    joinSession?: boolean | Sessions$joinSessionArgs<ExtArgs>
    _count?: boolean | SessionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tracks: Prisma.$TracksPayload<ExtArgs>[]
      joinSession: Prisma.$JoinSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      sessionCode: string
      sessionName: string
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type SessionsGetPayload<S extends boolean | null | undefined | SessionsDefaultArgs> = $Result.GetResult<Prisma.$SessionsPayload, S>

  type SessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface SessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessions'], meta: { name: 'Sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {SessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionsFindUniqueArgs>(args: SelectSubset<T, SessionsFindUniqueArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionsFindFirstArgs>(args?: SelectSubset<T, SessionsFindFirstArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionsFindManyArgs>(args?: SelectSubset<T, SessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {SessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends SessionsCreateArgs>(args: SelectSubset<T, SessionsCreateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionsCreateManyArgs>(args?: SelectSubset<T, SessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {SessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends SessionsDeleteArgs>(args: SelectSubset<T, SessionsDeleteArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {SessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionsUpdateArgs>(args: SelectSubset<T, SessionsUpdateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionsDeleteManyArgs>(args?: SelectSubset<T, SessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionsUpdateManyArgs>(args: SelectSubset<T, SessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {SessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends SessionsUpsertArgs>(args: SelectSubset<T, SessionsUpsertArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionsCountArgs>(
      args?: Subset<T, SessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionsGroupByArgs['orderBy'] }
        : { orderBy?: SessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessions model
   */
  readonly fields: SessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tracks<T extends Sessions$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Sessions$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinSession<T extends Sessions$joinSessionArgs<ExtArgs> = {}>(args?: Subset<T, Sessions$joinSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sessions model
   */
  interface SessionsFieldRefs {
    readonly id: FieldRef<"Sessions", 'Int'>
    readonly userId: FieldRef<"Sessions", 'Int'>
    readonly sessionCode: FieldRef<"Sessions", 'String'>
    readonly sessionName: FieldRef<"Sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sessions findUnique
   */
  export type SessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findUniqueOrThrow
   */
  export type SessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findFirst
   */
  export type SessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findFirstOrThrow
   */
  export type SessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findMany
   */
  export type SessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions create
   */
  export type SessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessions.
     */
    data: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
  }

  /**
   * Sessions createMany
   */
  export type SessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions createManyAndReturn
   */
  export type SessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions update
   */
  export type SessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessions.
     */
    data: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
    /**
     * Choose, which Sessions to update.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions updateMany
   */
  export type SessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Sessions updateManyAndReturn
   */
  export type SessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions upsert
   */
  export type SessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessions to update in case it exists.
     */
    where: SessionsWhereUniqueInput
    /**
     * In case the Sessions found by the `where` argument doesn't exist, create a new Sessions with this data.
     */
    create: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
    /**
     * In case the Sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
  }

  /**
   * Sessions delete
   */
  export type SessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter which Sessions to delete.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions deleteMany
   */
  export type SessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Sessions.tracks
   */
  export type Sessions$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    cursor?: TracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * Sessions.joinSession
   */
  export type Sessions$joinSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    where?: JoinSessionWhereInput
    orderBy?: JoinSessionOrderByWithRelationInput | JoinSessionOrderByWithRelationInput[]
    cursor?: JoinSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinSessionScalarFieldEnum | JoinSessionScalarFieldEnum[]
  }

  /**
   * Sessions without action
   */
  export type SessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
  }


  /**
   * Model Tracks
   */

  export type AggregateTracks = {
    _count: TracksCountAggregateOutputType | null
    _avg: TracksAvgAggregateOutputType | null
    _sum: TracksSumAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  export type TracksAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionId: number | null
  }

  export type TracksSumAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionId: number | null
  }

  export type TracksMinAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionId: number | null
    trackName: string | null
    s3Url: string | null
  }

  export type TracksMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionId: number | null
    trackName: string | null
    s3Url: string | null
  }

  export type TracksCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    trackName: number
    s3Url: number
    _all: number
  }


  export type TracksAvgAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
  }

  export type TracksSumAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
  }

  export type TracksMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    trackName?: true
    s3Url?: true
  }

  export type TracksMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    trackName?: true
    s3Url?: true
  }

  export type TracksCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    trackName?: true
    s3Url?: true
    _all?: true
  }

  export type TracksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to aggregate.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TracksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TracksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TracksMaxAggregateInputType
  }

  export type GetTracksAggregateType<T extends TracksAggregateArgs> = {
        [P in keyof T & keyof AggregateTracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracks[P]>
      : GetScalarType<T[P], AggregateTracks[P]>
  }




  export type TracksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithAggregationInput | TracksOrderByWithAggregationInput[]
    by: TracksScalarFieldEnum[] | TracksScalarFieldEnum
    having?: TracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TracksCountAggregateInputType | true
    _avg?: TracksAvgAggregateInputType
    _sum?: TracksSumAggregateInputType
    _min?: TracksMinAggregateInputType
    _max?: TracksMaxAggregateInputType
  }

  export type TracksGroupByOutputType = {
    id: number
    userId: number
    sessionId: number
    trackName: string
    s3Url: string
    _count: TracksCountAggregateOutputType | null
    _avg: TracksAvgAggregateOutputType | null
    _sum: TracksSumAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  type GetTracksGroupByPayload<T extends TracksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TracksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TracksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TracksGroupByOutputType[P]>
            : GetScalarType<T[P], TracksGroupByOutputType[P]>
        }
      >
    >


  export type TracksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    trackName?: boolean
    s3Url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracks"]>

  export type TracksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    trackName?: boolean
    s3Url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracks"]>

  export type TracksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    trackName?: boolean
    s3Url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracks"]>

  export type TracksSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    trackName?: boolean
    s3Url?: boolean
  }

  export type TracksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionId" | "trackName" | "s3Url", ExtArgs["result"]["tracks"]>
  export type TracksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }
  export type TracksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }
  export type TracksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }

  export type $TracksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tracks"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sessions: Prisma.$SessionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      sessionId: number
      trackName: string
      s3Url: string
    }, ExtArgs["result"]["tracks"]>
    composites: {}
  }

  type TracksGetPayload<S extends boolean | null | undefined | TracksDefaultArgs> = $Result.GetResult<Prisma.$TracksPayload, S>

  type TracksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TracksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TracksCountAggregateInputType | true
    }

  export interface TracksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tracks'], meta: { name: 'Tracks' } }
    /**
     * Find zero or one Tracks that matches the filter.
     * @param {TracksFindUniqueArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TracksFindUniqueArgs>(args: SelectSubset<T, TracksFindUniqueArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tracks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TracksFindUniqueOrThrowArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TracksFindUniqueOrThrowArgs>(args: SelectSubset<T, TracksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindFirstArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TracksFindFirstArgs>(args?: SelectSubset<T, TracksFindFirstArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tracks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindFirstOrThrowArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TracksFindFirstOrThrowArgs>(args?: SelectSubset<T, TracksFindFirstOrThrowArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.tracks.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.tracks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tracksWithIdOnly = await prisma.tracks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TracksFindManyArgs>(args?: SelectSubset<T, TracksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tracks.
     * @param {TracksCreateArgs} args - Arguments to create a Tracks.
     * @example
     * // Create one Tracks
     * const Tracks = await prisma.tracks.create({
     *   data: {
     *     // ... data to create a Tracks
     *   }
     * })
     * 
     */
    create<T extends TracksCreateArgs>(args: SelectSubset<T, TracksCreateArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tracks.
     * @param {TracksCreateManyArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const tracks = await prisma.tracks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TracksCreateManyArgs>(args?: SelectSubset<T, TracksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tracks and returns the data saved in the database.
     * @param {TracksCreateManyAndReturnArgs} args - Arguments to create many Tracks.
     * @example
     * // Create many Tracks
     * const tracks = await prisma.tracks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tracks and only return the `id`
     * const tracksWithIdOnly = await prisma.tracks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TracksCreateManyAndReturnArgs>(args?: SelectSubset<T, TracksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tracks.
     * @param {TracksDeleteArgs} args - Arguments to delete one Tracks.
     * @example
     * // Delete one Tracks
     * const Tracks = await prisma.tracks.delete({
     *   where: {
     *     // ... filter to delete one Tracks
     *   }
     * })
     * 
     */
    delete<T extends TracksDeleteArgs>(args: SelectSubset<T, TracksDeleteArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tracks.
     * @param {TracksUpdateArgs} args - Arguments to update one Tracks.
     * @example
     * // Update one Tracks
     * const tracks = await prisma.tracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TracksUpdateArgs>(args: SelectSubset<T, TracksUpdateArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tracks.
     * @param {TracksDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.tracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TracksDeleteManyArgs>(args?: SelectSubset<T, TracksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const tracks = await prisma.tracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TracksUpdateManyArgs>(args: SelectSubset<T, TracksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks and returns the data updated in the database.
     * @param {TracksUpdateManyAndReturnArgs} args - Arguments to update many Tracks.
     * @example
     * // Update many Tracks
     * const tracks = await prisma.tracks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tracks and only return the `id`
     * const tracksWithIdOnly = await prisma.tracks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TracksUpdateManyAndReturnArgs>(args: SelectSubset<T, TracksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tracks.
     * @param {TracksUpsertArgs} args - Arguments to update or create a Tracks.
     * @example
     * // Update or create a Tracks
     * const tracks = await prisma.tracks.upsert({
     *   create: {
     *     // ... data to create a Tracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tracks we want to update
     *   }
     * })
     */
    upsert<T extends TracksUpsertArgs>(args: SelectSubset<T, TracksUpsertArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.tracks.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TracksCountArgs>(
      args?: Subset<T, TracksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TracksAggregateArgs>(args: Subset<T, TracksAggregateArgs>): Prisma.PrismaPromise<GetTracksAggregateType<T>>

    /**
     * Group by Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TracksGroupByArgs['orderBy'] }
        : { orderBy?: TracksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTracksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tracks model
   */
  readonly fields: TracksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TracksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends SessionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionsDefaultArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tracks model
   */
  interface TracksFieldRefs {
    readonly id: FieldRef<"Tracks", 'Int'>
    readonly userId: FieldRef<"Tracks", 'Int'>
    readonly sessionId: FieldRef<"Tracks", 'Int'>
    readonly trackName: FieldRef<"Tracks", 'String'>
    readonly s3Url: FieldRef<"Tracks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tracks findUnique
   */
  export type TracksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where: TracksWhereUniqueInput
  }

  /**
   * Tracks findUniqueOrThrow
   */
  export type TracksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where: TracksWhereUniqueInput
  }

  /**
   * Tracks findFirst
   */
  export type TracksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * Tracks findFirstOrThrow
   */
  export type TracksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * Tracks findMany
   */
  export type TracksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }

  /**
   * Tracks create
   */
  export type TracksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The data needed to create a Tracks.
     */
    data: XOR<TracksCreateInput, TracksUncheckedCreateInput>
  }

  /**
   * Tracks createMany
   */
  export type TracksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TracksCreateManyInput | TracksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tracks createManyAndReturn
   */
  export type TracksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * The data used to create many Tracks.
     */
    data: TracksCreateManyInput | TracksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tracks update
   */
  export type TracksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The data needed to update a Tracks.
     */
    data: XOR<TracksUpdateInput, TracksUncheckedUpdateInput>
    /**
     * Choose, which Tracks to update.
     */
    where: TracksWhereUniqueInput
  }

  /**
   * Tracks updateMany
   */
  export type TracksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TracksWhereInput
    /**
     * Limit how many Tracks to update.
     */
    limit?: number
  }

  /**
   * Tracks updateManyAndReturn
   */
  export type TracksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * The data used to update Tracks.
     */
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TracksWhereInput
    /**
     * Limit how many Tracks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tracks upsert
   */
  export type TracksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The filter to search for the Tracks to update in case it exists.
     */
    where: TracksWhereUniqueInput
    /**
     * In case the Tracks found by the `where` argument doesn't exist, create a new Tracks with this data.
     */
    create: XOR<TracksCreateInput, TracksUncheckedCreateInput>
    /**
     * In case the Tracks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TracksUpdateInput, TracksUncheckedUpdateInput>
  }

  /**
   * Tracks delete
   */
  export type TracksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter which Tracks to delete.
     */
    where: TracksWhereUniqueInput
  }

  /**
   * Tracks deleteMany
   */
  export type TracksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TracksWhereInput
    /**
     * Limit how many Tracks to delete.
     */
    limit?: number
  }

  /**
   * Tracks without action
   */
  export type TracksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracks
     */
    omit?: TracksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TracksInclude<ExtArgs> | null
  }


  /**
   * Model JoinSession
   */

  export type AggregateJoinSession = {
    _count: JoinSessionCountAggregateOutputType | null
    _avg: JoinSessionAvgAggregateOutputType | null
    _sum: JoinSessionSumAggregateOutputType | null
    _min: JoinSessionMinAggregateOutputType | null
    _max: JoinSessionMaxAggregateOutputType | null
  }

  export type JoinSessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionId: number | null
  }

  export type JoinSessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionId: number | null
  }

  export type JoinSessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionId: number | null
    joinedAt: Date | null
  }

  export type JoinSessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    sessionId: number | null
    joinedAt: Date | null
  }

  export type JoinSessionCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    joinedAt: number
    _all: number
  }


  export type JoinSessionAvgAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
  }

  export type JoinSessionSumAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
  }

  export type JoinSessionMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    joinedAt?: true
  }

  export type JoinSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    joinedAt?: true
  }

  export type JoinSessionCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    joinedAt?: true
    _all?: true
  }

  export type JoinSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinSession to aggregate.
     */
    where?: JoinSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinSessions to fetch.
     */
    orderBy?: JoinSessionOrderByWithRelationInput | JoinSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoinSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JoinSessions
    **/
    _count?: true | JoinSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JoinSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JoinSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoinSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoinSessionMaxAggregateInputType
  }

  export type GetJoinSessionAggregateType<T extends JoinSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateJoinSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoinSession[P]>
      : GetScalarType<T[P], AggregateJoinSession[P]>
  }




  export type JoinSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinSessionWhereInput
    orderBy?: JoinSessionOrderByWithAggregationInput | JoinSessionOrderByWithAggregationInput[]
    by: JoinSessionScalarFieldEnum[] | JoinSessionScalarFieldEnum
    having?: JoinSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoinSessionCountAggregateInputType | true
    _avg?: JoinSessionAvgAggregateInputType
    _sum?: JoinSessionSumAggregateInputType
    _min?: JoinSessionMinAggregateInputType
    _max?: JoinSessionMaxAggregateInputType
  }

  export type JoinSessionGroupByOutputType = {
    id: number
    userId: number
    sessionId: number
    joinedAt: Date
    _count: JoinSessionCountAggregateOutputType | null
    _avg: JoinSessionAvgAggregateOutputType | null
    _sum: JoinSessionSumAggregateOutputType | null
    _min: JoinSessionMinAggregateOutputType | null
    _max: JoinSessionMaxAggregateOutputType | null
  }

  type GetJoinSessionGroupByPayload<T extends JoinSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoinSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoinSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoinSessionGroupByOutputType[P]>
            : GetScalarType<T[P], JoinSessionGroupByOutputType[P]>
        }
      >
    >


  export type JoinSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinSession"]>

  export type JoinSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinSession"]>

  export type JoinSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinSession"]>

  export type JoinSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    joinedAt?: boolean
  }

  export type JoinSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionId" | "joinedAt", ExtArgs["result"]["joinSession"]>
  export type JoinSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }
  export type JoinSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }
  export type JoinSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sessions?: boolean | SessionsDefaultArgs<ExtArgs>
  }

  export type $JoinSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JoinSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sessions: Prisma.$SessionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      sessionId: number
      joinedAt: Date
    }, ExtArgs["result"]["joinSession"]>
    composites: {}
  }

  type JoinSessionGetPayload<S extends boolean | null | undefined | JoinSessionDefaultArgs> = $Result.GetResult<Prisma.$JoinSessionPayload, S>

  type JoinSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JoinSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JoinSessionCountAggregateInputType | true
    }

  export interface JoinSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JoinSession'], meta: { name: 'JoinSession' } }
    /**
     * Find zero or one JoinSession that matches the filter.
     * @param {JoinSessionFindUniqueArgs} args - Arguments to find a JoinSession
     * @example
     * // Get one JoinSession
     * const joinSession = await prisma.joinSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JoinSessionFindUniqueArgs>(args: SelectSubset<T, JoinSessionFindUniqueArgs<ExtArgs>>): Prisma__JoinSessionClient<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JoinSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JoinSessionFindUniqueOrThrowArgs} args - Arguments to find a JoinSession
     * @example
     * // Get one JoinSession
     * const joinSession = await prisma.joinSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JoinSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, JoinSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JoinSessionClient<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinSessionFindFirstArgs} args - Arguments to find a JoinSession
     * @example
     * // Get one JoinSession
     * const joinSession = await prisma.joinSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JoinSessionFindFirstArgs>(args?: SelectSubset<T, JoinSessionFindFirstArgs<ExtArgs>>): Prisma__JoinSessionClient<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinSessionFindFirstOrThrowArgs} args - Arguments to find a JoinSession
     * @example
     * // Get one JoinSession
     * const joinSession = await prisma.joinSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JoinSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, JoinSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__JoinSessionClient<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JoinSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JoinSessions
     * const joinSessions = await prisma.joinSession.findMany()
     * 
     * // Get first 10 JoinSessions
     * const joinSessions = await prisma.joinSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const joinSessionWithIdOnly = await prisma.joinSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JoinSessionFindManyArgs>(args?: SelectSubset<T, JoinSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JoinSession.
     * @param {JoinSessionCreateArgs} args - Arguments to create a JoinSession.
     * @example
     * // Create one JoinSession
     * const JoinSession = await prisma.joinSession.create({
     *   data: {
     *     // ... data to create a JoinSession
     *   }
     * })
     * 
     */
    create<T extends JoinSessionCreateArgs>(args: SelectSubset<T, JoinSessionCreateArgs<ExtArgs>>): Prisma__JoinSessionClient<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JoinSessions.
     * @param {JoinSessionCreateManyArgs} args - Arguments to create many JoinSessions.
     * @example
     * // Create many JoinSessions
     * const joinSession = await prisma.joinSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JoinSessionCreateManyArgs>(args?: SelectSubset<T, JoinSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JoinSessions and returns the data saved in the database.
     * @param {JoinSessionCreateManyAndReturnArgs} args - Arguments to create many JoinSessions.
     * @example
     * // Create many JoinSessions
     * const joinSession = await prisma.joinSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JoinSessions and only return the `id`
     * const joinSessionWithIdOnly = await prisma.joinSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JoinSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, JoinSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JoinSession.
     * @param {JoinSessionDeleteArgs} args - Arguments to delete one JoinSession.
     * @example
     * // Delete one JoinSession
     * const JoinSession = await prisma.joinSession.delete({
     *   where: {
     *     // ... filter to delete one JoinSession
     *   }
     * })
     * 
     */
    delete<T extends JoinSessionDeleteArgs>(args: SelectSubset<T, JoinSessionDeleteArgs<ExtArgs>>): Prisma__JoinSessionClient<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JoinSession.
     * @param {JoinSessionUpdateArgs} args - Arguments to update one JoinSession.
     * @example
     * // Update one JoinSession
     * const joinSession = await prisma.joinSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JoinSessionUpdateArgs>(args: SelectSubset<T, JoinSessionUpdateArgs<ExtArgs>>): Prisma__JoinSessionClient<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JoinSessions.
     * @param {JoinSessionDeleteManyArgs} args - Arguments to filter JoinSessions to delete.
     * @example
     * // Delete a few JoinSessions
     * const { count } = await prisma.joinSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JoinSessionDeleteManyArgs>(args?: SelectSubset<T, JoinSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JoinSessions
     * const joinSession = await prisma.joinSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JoinSessionUpdateManyArgs>(args: SelectSubset<T, JoinSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinSessions and returns the data updated in the database.
     * @param {JoinSessionUpdateManyAndReturnArgs} args - Arguments to update many JoinSessions.
     * @example
     * // Update many JoinSessions
     * const joinSession = await prisma.joinSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JoinSessions and only return the `id`
     * const joinSessionWithIdOnly = await prisma.joinSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JoinSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, JoinSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JoinSession.
     * @param {JoinSessionUpsertArgs} args - Arguments to update or create a JoinSession.
     * @example
     * // Update or create a JoinSession
     * const joinSession = await prisma.joinSession.upsert({
     *   create: {
     *     // ... data to create a JoinSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JoinSession we want to update
     *   }
     * })
     */
    upsert<T extends JoinSessionUpsertArgs>(args: SelectSubset<T, JoinSessionUpsertArgs<ExtArgs>>): Prisma__JoinSessionClient<$Result.GetResult<Prisma.$JoinSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JoinSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinSessionCountArgs} args - Arguments to filter JoinSessions to count.
     * @example
     * // Count the number of JoinSessions
     * const count = await prisma.joinSession.count({
     *   where: {
     *     // ... the filter for the JoinSessions we want to count
     *   }
     * })
    **/
    count<T extends JoinSessionCountArgs>(
      args?: Subset<T, JoinSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoinSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JoinSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JoinSessionAggregateArgs>(args: Subset<T, JoinSessionAggregateArgs>): Prisma.PrismaPromise<GetJoinSessionAggregateType<T>>

    /**
     * Group by JoinSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JoinSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoinSessionGroupByArgs['orderBy'] }
        : { orderBy?: JoinSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JoinSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoinSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JoinSession model
   */
  readonly fields: JoinSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JoinSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoinSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends SessionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionsDefaultArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JoinSession model
   */
  interface JoinSessionFieldRefs {
    readonly id: FieldRef<"JoinSession", 'Int'>
    readonly userId: FieldRef<"JoinSession", 'Int'>
    readonly sessionId: FieldRef<"JoinSession", 'Int'>
    readonly joinedAt: FieldRef<"JoinSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JoinSession findUnique
   */
  export type JoinSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    /**
     * Filter, which JoinSession to fetch.
     */
    where: JoinSessionWhereUniqueInput
  }

  /**
   * JoinSession findUniqueOrThrow
   */
  export type JoinSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    /**
     * Filter, which JoinSession to fetch.
     */
    where: JoinSessionWhereUniqueInput
  }

  /**
   * JoinSession findFirst
   */
  export type JoinSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    /**
     * Filter, which JoinSession to fetch.
     */
    where?: JoinSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinSessions to fetch.
     */
    orderBy?: JoinSessionOrderByWithRelationInput | JoinSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinSessions.
     */
    cursor?: JoinSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinSessions.
     */
    distinct?: JoinSessionScalarFieldEnum | JoinSessionScalarFieldEnum[]
  }

  /**
   * JoinSession findFirstOrThrow
   */
  export type JoinSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    /**
     * Filter, which JoinSession to fetch.
     */
    where?: JoinSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinSessions to fetch.
     */
    orderBy?: JoinSessionOrderByWithRelationInput | JoinSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinSessions.
     */
    cursor?: JoinSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinSessions.
     */
    distinct?: JoinSessionScalarFieldEnum | JoinSessionScalarFieldEnum[]
  }

  /**
   * JoinSession findMany
   */
  export type JoinSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    /**
     * Filter, which JoinSessions to fetch.
     */
    where?: JoinSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinSessions to fetch.
     */
    orderBy?: JoinSessionOrderByWithRelationInput | JoinSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JoinSessions.
     */
    cursor?: JoinSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinSessions.
     */
    skip?: number
    distinct?: JoinSessionScalarFieldEnum | JoinSessionScalarFieldEnum[]
  }

  /**
   * JoinSession create
   */
  export type JoinSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a JoinSession.
     */
    data: XOR<JoinSessionCreateInput, JoinSessionUncheckedCreateInput>
  }

  /**
   * JoinSession createMany
   */
  export type JoinSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JoinSessions.
     */
    data: JoinSessionCreateManyInput | JoinSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JoinSession createManyAndReturn
   */
  export type JoinSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * The data used to create many JoinSessions.
     */
    data: JoinSessionCreateManyInput | JoinSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JoinSession update
   */
  export type JoinSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a JoinSession.
     */
    data: XOR<JoinSessionUpdateInput, JoinSessionUncheckedUpdateInput>
    /**
     * Choose, which JoinSession to update.
     */
    where: JoinSessionWhereUniqueInput
  }

  /**
   * JoinSession updateMany
   */
  export type JoinSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JoinSessions.
     */
    data: XOR<JoinSessionUpdateManyMutationInput, JoinSessionUncheckedUpdateManyInput>
    /**
     * Filter which JoinSessions to update
     */
    where?: JoinSessionWhereInput
    /**
     * Limit how many JoinSessions to update.
     */
    limit?: number
  }

  /**
   * JoinSession updateManyAndReturn
   */
  export type JoinSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * The data used to update JoinSessions.
     */
    data: XOR<JoinSessionUpdateManyMutationInput, JoinSessionUncheckedUpdateManyInput>
    /**
     * Filter which JoinSessions to update
     */
    where?: JoinSessionWhereInput
    /**
     * Limit how many JoinSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JoinSession upsert
   */
  export type JoinSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the JoinSession to update in case it exists.
     */
    where: JoinSessionWhereUniqueInput
    /**
     * In case the JoinSession found by the `where` argument doesn't exist, create a new JoinSession with this data.
     */
    create: XOR<JoinSessionCreateInput, JoinSessionUncheckedCreateInput>
    /**
     * In case the JoinSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoinSessionUpdateInput, JoinSessionUncheckedUpdateInput>
  }

  /**
   * JoinSession delete
   */
  export type JoinSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
    /**
     * Filter which JoinSession to delete.
     */
    where: JoinSessionWhereUniqueInput
  }

  /**
   * JoinSession deleteMany
   */
  export type JoinSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinSessions to delete
     */
    where?: JoinSessionWhereInput
    /**
     * Limit how many JoinSessions to delete.
     */
    limit?: number
  }

  /**
   * JoinSession without action
   */
  export type JoinSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinSession
     */
    select?: JoinSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinSession
     */
    omit?: JoinSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionCode: 'sessionCode',
    sessionName: 'sessionName'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const TracksScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    trackName: 'trackName',
    s3Url: 's3Url'
  };

  export type TracksScalarFieldEnum = (typeof TracksScalarFieldEnum)[keyof typeof TracksScalarFieldEnum]


  export const JoinSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    joinedAt: 'joinedAt'
  };

  export type JoinSessionScalarFieldEnum = (typeof JoinSessionScalarFieldEnum)[keyof typeof JoinSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    sessions?: SessionsListRelationFilter
    tracks?: TracksListRelationFilter
    joins?: JoinSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    sessions?: SessionsOrderByRelationAggregateInput
    tracks?: TracksOrderByRelationAggregateInput
    joins?: JoinSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    sessions?: SessionsListRelationFilter
    tracks?: TracksListRelationFilter
    joins?: JoinSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type SessionsWhereInput = {
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    id?: IntFilter<"Sessions"> | number
    userId?: IntFilter<"Sessions"> | number
    sessionCode?: StringFilter<"Sessions"> | string
    sessionName?: StringFilter<"Sessions"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tracks?: TracksListRelationFilter
    joinSession?: JoinSessionListRelationFilter
  }

  export type SessionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionCode?: SortOrder
    sessionName?: SortOrder
    user?: UserOrderByWithRelationInput
    tracks?: TracksOrderByRelationAggregateInput
    joinSession?: JoinSessionOrderByRelationAggregateInput
  }

  export type SessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionCode?: string
    sessionName?: string
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    userId?: IntFilter<"Sessions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tracks?: TracksListRelationFilter
    joinSession?: JoinSessionListRelationFilter
  }, "id" | "sessionCode" | "sessionName">

  export type SessionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionCode?: SortOrder
    sessionName?: SortOrder
    _count?: SessionsCountOrderByAggregateInput
    _avg?: SessionsAvgOrderByAggregateInput
    _max?: SessionsMaxOrderByAggregateInput
    _min?: SessionsMinOrderByAggregateInput
    _sum?: SessionsSumOrderByAggregateInput
  }

  export type SessionsScalarWhereWithAggregatesInput = {
    AND?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    OR?: SessionsScalarWhereWithAggregatesInput[]
    NOT?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sessions"> | number
    userId?: IntWithAggregatesFilter<"Sessions"> | number
    sessionCode?: StringWithAggregatesFilter<"Sessions"> | string
    sessionName?: StringWithAggregatesFilter<"Sessions"> | string
  }

  export type TracksWhereInput = {
    AND?: TracksWhereInput | TracksWhereInput[]
    OR?: TracksWhereInput[]
    NOT?: TracksWhereInput | TracksWhereInput[]
    id?: IntFilter<"Tracks"> | number
    userId?: IntFilter<"Tracks"> | number
    sessionId?: IntFilter<"Tracks"> | number
    trackName?: StringFilter<"Tracks"> | string
    s3Url?: StringFilter<"Tracks"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sessions?: XOR<SessionsScalarRelationFilter, SessionsWhereInput>
  }

  export type TracksOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    trackName?: SortOrder
    s3Url?: SortOrder
    user?: UserOrderByWithRelationInput
    sessions?: SessionsOrderByWithRelationInput
  }

  export type TracksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TracksWhereInput | TracksWhereInput[]
    OR?: TracksWhereInput[]
    NOT?: TracksWhereInput | TracksWhereInput[]
    userId?: IntFilter<"Tracks"> | number
    sessionId?: IntFilter<"Tracks"> | number
    trackName?: StringFilter<"Tracks"> | string
    s3Url?: StringFilter<"Tracks"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sessions?: XOR<SessionsScalarRelationFilter, SessionsWhereInput>
  }, "id">

  export type TracksOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    trackName?: SortOrder
    s3Url?: SortOrder
    _count?: TracksCountOrderByAggregateInput
    _avg?: TracksAvgOrderByAggregateInput
    _max?: TracksMaxOrderByAggregateInput
    _min?: TracksMinOrderByAggregateInput
    _sum?: TracksSumOrderByAggregateInput
  }

  export type TracksScalarWhereWithAggregatesInput = {
    AND?: TracksScalarWhereWithAggregatesInput | TracksScalarWhereWithAggregatesInput[]
    OR?: TracksScalarWhereWithAggregatesInput[]
    NOT?: TracksScalarWhereWithAggregatesInput | TracksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tracks"> | number
    userId?: IntWithAggregatesFilter<"Tracks"> | number
    sessionId?: IntWithAggregatesFilter<"Tracks"> | number
    trackName?: StringWithAggregatesFilter<"Tracks"> | string
    s3Url?: StringWithAggregatesFilter<"Tracks"> | string
  }

  export type JoinSessionWhereInput = {
    AND?: JoinSessionWhereInput | JoinSessionWhereInput[]
    OR?: JoinSessionWhereInput[]
    NOT?: JoinSessionWhereInput | JoinSessionWhereInput[]
    id?: IntFilter<"JoinSession"> | number
    userId?: IntFilter<"JoinSession"> | number
    sessionId?: IntFilter<"JoinSession"> | number
    joinedAt?: DateTimeFilter<"JoinSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sessions?: XOR<SessionsScalarRelationFilter, SessionsWhereInput>
  }

  export type JoinSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sessions?: SessionsOrderByWithRelationInput
  }

  export type JoinSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JoinSessionWhereInput | JoinSessionWhereInput[]
    OR?: JoinSessionWhereInput[]
    NOT?: JoinSessionWhereInput | JoinSessionWhereInput[]
    userId?: IntFilter<"JoinSession"> | number
    sessionId?: IntFilter<"JoinSession"> | number
    joinedAt?: DateTimeFilter<"JoinSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sessions?: XOR<SessionsScalarRelationFilter, SessionsWhereInput>
  }, "id">

  export type JoinSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    joinedAt?: SortOrder
    _count?: JoinSessionCountOrderByAggregateInput
    _avg?: JoinSessionAvgOrderByAggregateInput
    _max?: JoinSessionMaxOrderByAggregateInput
    _min?: JoinSessionMinOrderByAggregateInput
    _sum?: JoinSessionSumOrderByAggregateInput
  }

  export type JoinSessionScalarWhereWithAggregatesInput = {
    AND?: JoinSessionScalarWhereWithAggregatesInput | JoinSessionScalarWhereWithAggregatesInput[]
    OR?: JoinSessionScalarWhereWithAggregatesInput[]
    NOT?: JoinSessionScalarWhereWithAggregatesInput | JoinSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JoinSession"> | number
    userId?: IntWithAggregatesFilter<"JoinSession"> | number
    sessionId?: IntWithAggregatesFilter<"JoinSession"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"JoinSession"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    sessions?: SessionsCreateNestedManyWithoutUserInput
    tracks?: TracksCreateNestedManyWithoutUserInput
    joins?: JoinSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    sessions?: SessionsUncheckedCreateNestedManyWithoutUserInput
    tracks?: TracksUncheckedCreateNestedManyWithoutUserInput
    joins?: JoinSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessions?: SessionsUpdateManyWithoutUserNestedInput
    tracks?: TracksUpdateManyWithoutUserNestedInput
    joins?: JoinSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessions?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutUserNestedInput
    joins?: JoinSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SessionsCreateInput = {
    sessionCode: string
    sessionName: string
    user: UserCreateNestedOneWithoutSessionsInput
    tracks?: TracksCreateNestedManyWithoutSessionsInput
    joinSession?: JoinSessionCreateNestedManyWithoutSessionsInput
  }

  export type SessionsUncheckedCreateInput = {
    id?: number
    userId: number
    sessionCode: string
    sessionName: string
    tracks?: TracksUncheckedCreateNestedManyWithoutSessionsInput
    joinSession?: JoinSessionUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type SessionsUpdateInput = {
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    tracks?: TracksUpdateManyWithoutSessionsNestedInput
    joinSession?: JoinSessionUpdateManyWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUncheckedUpdateManyWithoutSessionsNestedInput
    joinSession?: JoinSessionUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type SessionsCreateManyInput = {
    id?: number
    userId: number
    sessionCode: string
    sessionName: string
  }

  export type SessionsUpdateManyMutationInput = {
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
  }

  export type SessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
  }

  export type TracksCreateInput = {
    trackName: string
    s3Url: string
    user: UserCreateNestedOneWithoutTracksInput
    sessions: SessionsCreateNestedOneWithoutTracksInput
  }

  export type TracksUncheckedCreateInput = {
    id?: number
    userId: number
    sessionId: number
    trackName: string
    s3Url: string
  }

  export type TracksUpdateInput = {
    trackName?: StringFieldUpdateOperationsInput | string
    s3Url?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTracksNestedInput
    sessions?: SessionsUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    trackName?: StringFieldUpdateOperationsInput | string
    s3Url?: StringFieldUpdateOperationsInput | string
  }

  export type TracksCreateManyInput = {
    id?: number
    userId: number
    sessionId: number
    trackName: string
    s3Url: string
  }

  export type TracksUpdateManyMutationInput = {
    trackName?: StringFieldUpdateOperationsInput | string
    s3Url?: StringFieldUpdateOperationsInput | string
  }

  export type TracksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    trackName?: StringFieldUpdateOperationsInput | string
    s3Url?: StringFieldUpdateOperationsInput | string
  }

  export type JoinSessionCreateInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutJoinsInput
    sessions: SessionsCreateNestedOneWithoutJoinSessionInput
  }

  export type JoinSessionUncheckedCreateInput = {
    id?: number
    userId: number
    sessionId: number
    joinedAt?: Date | string
  }

  export type JoinSessionUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinsNestedInput
    sessions?: SessionsUpdateOneRequiredWithoutJoinSessionNestedInput
  }

  export type JoinSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinSessionCreateManyInput = {
    id?: number
    userId: number
    sessionId: number
    joinedAt?: Date | string
  }

  export type JoinSessionUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SessionsListRelationFilter = {
    every?: SessionsWhereInput
    some?: SessionsWhereInput
    none?: SessionsWhereInput
  }

  export type TracksListRelationFilter = {
    every?: TracksWhereInput
    some?: TracksWhereInput
    none?: TracksWhereInput
  }

  export type JoinSessionListRelationFilter = {
    every?: JoinSessionWhereInput
    some?: JoinSessionWhereInput
    none?: JoinSessionWhereInput
  }

  export type SessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TracksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JoinSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionCode?: SortOrder
    sessionName?: SortOrder
  }

  export type SessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionCode?: SortOrder
    sessionName?: SortOrder
  }

  export type SessionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionCode?: SortOrder
    sessionName?: SortOrder
  }

  export type SessionsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionsScalarRelationFilter = {
    is?: SessionsWhereInput
    isNot?: SessionsWhereInput
  }

  export type TracksCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    trackName?: SortOrder
    s3Url?: SortOrder
  }

  export type TracksAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
  }

  export type TracksMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    trackName?: SortOrder
    s3Url?: SortOrder
  }

  export type TracksMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    trackName?: SortOrder
    s3Url?: SortOrder
  }

  export type TracksSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JoinSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    joinedAt?: SortOrder
  }

  export type JoinSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
  }

  export type JoinSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    joinedAt?: SortOrder
  }

  export type JoinSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    joinedAt?: SortOrder
  }

  export type JoinSessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type TracksCreateNestedManyWithoutUserInput = {
    create?: XOR<TracksCreateWithoutUserInput, TracksUncheckedCreateWithoutUserInput> | TracksCreateWithoutUserInput[] | TracksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutUserInput | TracksCreateOrConnectWithoutUserInput[]
    createMany?: TracksCreateManyUserInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type JoinSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinSessionCreateWithoutUserInput, JoinSessionUncheckedCreateWithoutUserInput> | JoinSessionCreateWithoutUserInput[] | JoinSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinSessionCreateOrConnectWithoutUserInput | JoinSessionCreateOrConnectWithoutUserInput[]
    createMany?: JoinSessionCreateManyUserInputEnvelope
    connect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
  }

  export type SessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type TracksUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TracksCreateWithoutUserInput, TracksUncheckedCreateWithoutUserInput> | TracksCreateWithoutUserInput[] | TracksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutUserInput | TracksCreateOrConnectWithoutUserInput[]
    createMany?: TracksCreateManyUserInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type JoinSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinSessionCreateWithoutUserInput, JoinSessionUncheckedCreateWithoutUserInput> | JoinSessionCreateWithoutUserInput[] | JoinSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinSessionCreateOrConnectWithoutUserInput | JoinSessionCreateOrConnectWithoutUserInput[]
    createMany?: JoinSessionCreateManyUserInputEnvelope
    connect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutUserInput | SessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutUserInput | SessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutUserInput | SessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type TracksUpdateManyWithoutUserNestedInput = {
    create?: XOR<TracksCreateWithoutUserInput, TracksUncheckedCreateWithoutUserInput> | TracksCreateWithoutUserInput[] | TracksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutUserInput | TracksCreateOrConnectWithoutUserInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutUserInput | TracksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TracksCreateManyUserInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutUserInput | TracksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutUserInput | TracksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type JoinSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinSessionCreateWithoutUserInput, JoinSessionUncheckedCreateWithoutUserInput> | JoinSessionCreateWithoutUserInput[] | JoinSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinSessionCreateOrConnectWithoutUserInput | JoinSessionCreateOrConnectWithoutUserInput[]
    upsert?: JoinSessionUpsertWithWhereUniqueWithoutUserInput | JoinSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinSessionCreateManyUserInputEnvelope
    set?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    disconnect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    delete?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    connect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    update?: JoinSessionUpdateWithWhereUniqueWithoutUserInput | JoinSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinSessionUpdateManyWithWhereWithoutUserInput | JoinSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinSessionScalarWhereInput | JoinSessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutUserInput | SessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutUserInput | SessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutUserInput | SessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type TracksUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TracksCreateWithoutUserInput, TracksUncheckedCreateWithoutUserInput> | TracksCreateWithoutUserInput[] | TracksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutUserInput | TracksCreateOrConnectWithoutUserInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutUserInput | TracksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TracksCreateManyUserInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutUserInput | TracksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutUserInput | TracksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type JoinSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinSessionCreateWithoutUserInput, JoinSessionUncheckedCreateWithoutUserInput> | JoinSessionCreateWithoutUserInput[] | JoinSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinSessionCreateOrConnectWithoutUserInput | JoinSessionCreateOrConnectWithoutUserInput[]
    upsert?: JoinSessionUpsertWithWhereUniqueWithoutUserInput | JoinSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinSessionCreateManyUserInputEnvelope
    set?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    disconnect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    delete?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    connect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    update?: JoinSessionUpdateWithWhereUniqueWithoutUserInput | JoinSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinSessionUpdateManyWithWhereWithoutUserInput | JoinSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinSessionScalarWhereInput | JoinSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type TracksCreateNestedManyWithoutSessionsInput = {
    create?: XOR<TracksCreateWithoutSessionsInput, TracksUncheckedCreateWithoutSessionsInput> | TracksCreateWithoutSessionsInput[] | TracksUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutSessionsInput | TracksCreateOrConnectWithoutSessionsInput[]
    createMany?: TracksCreateManySessionsInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type JoinSessionCreateNestedManyWithoutSessionsInput = {
    create?: XOR<JoinSessionCreateWithoutSessionsInput, JoinSessionUncheckedCreateWithoutSessionsInput> | JoinSessionCreateWithoutSessionsInput[] | JoinSessionUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: JoinSessionCreateOrConnectWithoutSessionsInput | JoinSessionCreateOrConnectWithoutSessionsInput[]
    createMany?: JoinSessionCreateManySessionsInputEnvelope
    connect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
  }

  export type TracksUncheckedCreateNestedManyWithoutSessionsInput = {
    create?: XOR<TracksCreateWithoutSessionsInput, TracksUncheckedCreateWithoutSessionsInput> | TracksCreateWithoutSessionsInput[] | TracksUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutSessionsInput | TracksCreateOrConnectWithoutSessionsInput[]
    createMany?: TracksCreateManySessionsInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type JoinSessionUncheckedCreateNestedManyWithoutSessionsInput = {
    create?: XOR<JoinSessionCreateWithoutSessionsInput, JoinSessionUncheckedCreateWithoutSessionsInput> | JoinSessionCreateWithoutSessionsInput[] | JoinSessionUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: JoinSessionCreateOrConnectWithoutSessionsInput | JoinSessionCreateOrConnectWithoutSessionsInput[]
    createMany?: JoinSessionCreateManySessionsInputEnvelope
    connect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type TracksUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<TracksCreateWithoutSessionsInput, TracksUncheckedCreateWithoutSessionsInput> | TracksCreateWithoutSessionsInput[] | TracksUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutSessionsInput | TracksCreateOrConnectWithoutSessionsInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutSessionsInput | TracksUpsertWithWhereUniqueWithoutSessionsInput[]
    createMany?: TracksCreateManySessionsInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutSessionsInput | TracksUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutSessionsInput | TracksUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type JoinSessionUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<JoinSessionCreateWithoutSessionsInput, JoinSessionUncheckedCreateWithoutSessionsInput> | JoinSessionCreateWithoutSessionsInput[] | JoinSessionUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: JoinSessionCreateOrConnectWithoutSessionsInput | JoinSessionCreateOrConnectWithoutSessionsInput[]
    upsert?: JoinSessionUpsertWithWhereUniqueWithoutSessionsInput | JoinSessionUpsertWithWhereUniqueWithoutSessionsInput[]
    createMany?: JoinSessionCreateManySessionsInputEnvelope
    set?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    disconnect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    delete?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    connect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    update?: JoinSessionUpdateWithWhereUniqueWithoutSessionsInput | JoinSessionUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: JoinSessionUpdateManyWithWhereWithoutSessionsInput | JoinSessionUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: JoinSessionScalarWhereInput | JoinSessionScalarWhereInput[]
  }

  export type TracksUncheckedUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<TracksCreateWithoutSessionsInput, TracksUncheckedCreateWithoutSessionsInput> | TracksCreateWithoutSessionsInput[] | TracksUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutSessionsInput | TracksCreateOrConnectWithoutSessionsInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutSessionsInput | TracksUpsertWithWhereUniqueWithoutSessionsInput[]
    createMany?: TracksCreateManySessionsInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutSessionsInput | TracksUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutSessionsInput | TracksUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type JoinSessionUncheckedUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<JoinSessionCreateWithoutSessionsInput, JoinSessionUncheckedCreateWithoutSessionsInput> | JoinSessionCreateWithoutSessionsInput[] | JoinSessionUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: JoinSessionCreateOrConnectWithoutSessionsInput | JoinSessionCreateOrConnectWithoutSessionsInput[]
    upsert?: JoinSessionUpsertWithWhereUniqueWithoutSessionsInput | JoinSessionUpsertWithWhereUniqueWithoutSessionsInput[]
    createMany?: JoinSessionCreateManySessionsInputEnvelope
    set?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    disconnect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    delete?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    connect?: JoinSessionWhereUniqueInput | JoinSessionWhereUniqueInput[]
    update?: JoinSessionUpdateWithWhereUniqueWithoutSessionsInput | JoinSessionUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: JoinSessionUpdateManyWithWhereWithoutSessionsInput | JoinSessionUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: JoinSessionScalarWhereInput | JoinSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTracksInput = {
    create?: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTracksInput
    connect?: UserWhereUniqueInput
  }

  export type SessionsCreateNestedOneWithoutTracksInput = {
    create?: XOR<SessionsCreateWithoutTracksInput, SessionsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: SessionsCreateOrConnectWithoutTracksInput
    connect?: SessionsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTracksInput
    upsert?: UserUpsertWithoutTracksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTracksInput, UserUpdateWithoutTracksInput>, UserUncheckedUpdateWithoutTracksInput>
  }

  export type SessionsUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<SessionsCreateWithoutTracksInput, SessionsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: SessionsCreateOrConnectWithoutTracksInput
    upsert?: SessionsUpsertWithoutTracksInput
    connect?: SessionsWhereUniqueInput
    update?: XOR<XOR<SessionsUpdateToOneWithWhereWithoutTracksInput, SessionsUpdateWithoutTracksInput>, SessionsUncheckedUpdateWithoutTracksInput>
  }

  export type UserCreateNestedOneWithoutJoinsInput = {
    create?: XOR<UserCreateWithoutJoinsInput, UserUncheckedCreateWithoutJoinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinsInput
    connect?: UserWhereUniqueInput
  }

  export type SessionsCreateNestedOneWithoutJoinSessionInput = {
    create?: XOR<SessionsCreateWithoutJoinSessionInput, SessionsUncheckedCreateWithoutJoinSessionInput>
    connectOrCreate?: SessionsCreateOrConnectWithoutJoinSessionInput
    connect?: SessionsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutJoinsNestedInput = {
    create?: XOR<UserCreateWithoutJoinsInput, UserUncheckedCreateWithoutJoinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinsInput
    upsert?: UserUpsertWithoutJoinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJoinsInput, UserUpdateWithoutJoinsInput>, UserUncheckedUpdateWithoutJoinsInput>
  }

  export type SessionsUpdateOneRequiredWithoutJoinSessionNestedInput = {
    create?: XOR<SessionsCreateWithoutJoinSessionInput, SessionsUncheckedCreateWithoutJoinSessionInput>
    connectOrCreate?: SessionsCreateOrConnectWithoutJoinSessionInput
    upsert?: SessionsUpsertWithoutJoinSessionInput
    connect?: SessionsWhereUniqueInput
    update?: XOR<XOR<SessionsUpdateToOneWithWhereWithoutJoinSessionInput, SessionsUpdateWithoutJoinSessionInput>, SessionsUncheckedUpdateWithoutJoinSessionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SessionsCreateWithoutUserInput = {
    sessionCode: string
    sessionName: string
    tracks?: TracksCreateNestedManyWithoutSessionsInput
    joinSession?: JoinSessionCreateNestedManyWithoutSessionsInput
  }

  export type SessionsUncheckedCreateWithoutUserInput = {
    id?: number
    sessionCode: string
    sessionName: string
    tracks?: TracksUncheckedCreateNestedManyWithoutSessionsInput
    joinSession?: JoinSessionUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type SessionsCreateOrConnectWithoutUserInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput>
  }

  export type SessionsCreateManyUserInputEnvelope = {
    data: SessionsCreateManyUserInput | SessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TracksCreateWithoutUserInput = {
    trackName: string
    s3Url: string
    sessions: SessionsCreateNestedOneWithoutTracksInput
  }

  export type TracksUncheckedCreateWithoutUserInput = {
    id?: number
    sessionId: number
    trackName: string
    s3Url: string
  }

  export type TracksCreateOrConnectWithoutUserInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutUserInput, TracksUncheckedCreateWithoutUserInput>
  }

  export type TracksCreateManyUserInputEnvelope = {
    data: TracksCreateManyUserInput | TracksCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JoinSessionCreateWithoutUserInput = {
    joinedAt?: Date | string
    sessions: SessionsCreateNestedOneWithoutJoinSessionInput
  }

  export type JoinSessionUncheckedCreateWithoutUserInput = {
    id?: number
    sessionId: number
    joinedAt?: Date | string
  }

  export type JoinSessionCreateOrConnectWithoutUserInput = {
    where: JoinSessionWhereUniqueInput
    create: XOR<JoinSessionCreateWithoutUserInput, JoinSessionUncheckedCreateWithoutUserInput>
  }

  export type JoinSessionCreateManyUserInputEnvelope = {
    data: JoinSessionCreateManyUserInput | JoinSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutUserInput, SessionsUncheckedUpdateWithoutUserInput>
    create: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutUserInput, SessionsUncheckedUpdateWithoutUserInput>
  }

  export type SessionsUpdateManyWithWhereWithoutUserInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionsScalarWhereInput = {
    AND?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    OR?: SessionsScalarWhereInput[]
    NOT?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    id?: IntFilter<"Sessions"> | number
    userId?: IntFilter<"Sessions"> | number
    sessionCode?: StringFilter<"Sessions"> | string
    sessionName?: StringFilter<"Sessions"> | string
  }

  export type TracksUpsertWithWhereUniqueWithoutUserInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutUserInput, TracksUncheckedUpdateWithoutUserInput>
    create: XOR<TracksCreateWithoutUserInput, TracksUncheckedCreateWithoutUserInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutUserInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutUserInput, TracksUncheckedUpdateWithoutUserInput>
  }

  export type TracksUpdateManyWithWhereWithoutUserInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutUserInput>
  }

  export type TracksScalarWhereInput = {
    AND?: TracksScalarWhereInput | TracksScalarWhereInput[]
    OR?: TracksScalarWhereInput[]
    NOT?: TracksScalarWhereInput | TracksScalarWhereInput[]
    id?: IntFilter<"Tracks"> | number
    userId?: IntFilter<"Tracks"> | number
    sessionId?: IntFilter<"Tracks"> | number
    trackName?: StringFilter<"Tracks"> | string
    s3Url?: StringFilter<"Tracks"> | string
  }

  export type JoinSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: JoinSessionWhereUniqueInput
    update: XOR<JoinSessionUpdateWithoutUserInput, JoinSessionUncheckedUpdateWithoutUserInput>
    create: XOR<JoinSessionCreateWithoutUserInput, JoinSessionUncheckedCreateWithoutUserInput>
  }

  export type JoinSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: JoinSessionWhereUniqueInput
    data: XOR<JoinSessionUpdateWithoutUserInput, JoinSessionUncheckedUpdateWithoutUserInput>
  }

  export type JoinSessionUpdateManyWithWhereWithoutUserInput = {
    where: JoinSessionScalarWhereInput
    data: XOR<JoinSessionUpdateManyMutationInput, JoinSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type JoinSessionScalarWhereInput = {
    AND?: JoinSessionScalarWhereInput | JoinSessionScalarWhereInput[]
    OR?: JoinSessionScalarWhereInput[]
    NOT?: JoinSessionScalarWhereInput | JoinSessionScalarWhereInput[]
    id?: IntFilter<"JoinSession"> | number
    userId?: IntFilter<"JoinSession"> | number
    sessionId?: IntFilter<"JoinSession"> | number
    joinedAt?: DateTimeFilter<"JoinSession"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    name: string
    email: string
    password: string
    tracks?: TracksCreateNestedManyWithoutUserInput
    joins?: JoinSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    email: string
    password: string
    tracks?: TracksUncheckedCreateNestedManyWithoutUserInput
    joins?: JoinSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type TracksCreateWithoutSessionsInput = {
    trackName: string
    s3Url: string
    user: UserCreateNestedOneWithoutTracksInput
  }

  export type TracksUncheckedCreateWithoutSessionsInput = {
    id?: number
    userId: number
    trackName: string
    s3Url: string
  }

  export type TracksCreateOrConnectWithoutSessionsInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutSessionsInput, TracksUncheckedCreateWithoutSessionsInput>
  }

  export type TracksCreateManySessionsInputEnvelope = {
    data: TracksCreateManySessionsInput | TracksCreateManySessionsInput[]
    skipDuplicates?: boolean
  }

  export type JoinSessionCreateWithoutSessionsInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutJoinsInput
  }

  export type JoinSessionUncheckedCreateWithoutSessionsInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type JoinSessionCreateOrConnectWithoutSessionsInput = {
    where: JoinSessionWhereUniqueInput
    create: XOR<JoinSessionCreateWithoutSessionsInput, JoinSessionUncheckedCreateWithoutSessionsInput>
  }

  export type JoinSessionCreateManySessionsInputEnvelope = {
    data: JoinSessionCreateManySessionsInput | JoinSessionCreateManySessionsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUpdateManyWithoutUserNestedInput
    joins?: JoinSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUncheckedUpdateManyWithoutUserNestedInput
    joins?: JoinSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TracksUpsertWithWhereUniqueWithoutSessionsInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutSessionsInput, TracksUncheckedUpdateWithoutSessionsInput>
    create: XOR<TracksCreateWithoutSessionsInput, TracksUncheckedCreateWithoutSessionsInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutSessionsInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutSessionsInput, TracksUncheckedUpdateWithoutSessionsInput>
  }

  export type TracksUpdateManyWithWhereWithoutSessionsInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutSessionsInput>
  }

  export type JoinSessionUpsertWithWhereUniqueWithoutSessionsInput = {
    where: JoinSessionWhereUniqueInput
    update: XOR<JoinSessionUpdateWithoutSessionsInput, JoinSessionUncheckedUpdateWithoutSessionsInput>
    create: XOR<JoinSessionCreateWithoutSessionsInput, JoinSessionUncheckedCreateWithoutSessionsInput>
  }

  export type JoinSessionUpdateWithWhereUniqueWithoutSessionsInput = {
    where: JoinSessionWhereUniqueInput
    data: XOR<JoinSessionUpdateWithoutSessionsInput, JoinSessionUncheckedUpdateWithoutSessionsInput>
  }

  export type JoinSessionUpdateManyWithWhereWithoutSessionsInput = {
    where: JoinSessionScalarWhereInput
    data: XOR<JoinSessionUpdateManyMutationInput, JoinSessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type UserCreateWithoutTracksInput = {
    name: string
    email: string
    password: string
    sessions?: SessionsCreateNestedManyWithoutUserInput
    joins?: JoinSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTracksInput = {
    id?: number
    name: string
    email: string
    password: string
    sessions?: SessionsUncheckedCreateNestedManyWithoutUserInput
    joins?: JoinSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTracksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
  }

  export type SessionsCreateWithoutTracksInput = {
    sessionCode: string
    sessionName: string
    user: UserCreateNestedOneWithoutSessionsInput
    joinSession?: JoinSessionCreateNestedManyWithoutSessionsInput
  }

  export type SessionsUncheckedCreateWithoutTracksInput = {
    id?: number
    userId: number
    sessionCode: string
    sessionName: string
    joinSession?: JoinSessionUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type SessionsCreateOrConnectWithoutTracksInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutTracksInput, SessionsUncheckedCreateWithoutTracksInput>
  }

  export type UserUpsertWithoutTracksInput = {
    update: XOR<UserUpdateWithoutTracksInput, UserUncheckedUpdateWithoutTracksInput>
    create: XOR<UserCreateWithoutTracksInput, UserUncheckedCreateWithoutTracksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTracksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTracksInput, UserUncheckedUpdateWithoutTracksInput>
  }

  export type UserUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessions?: SessionsUpdateManyWithoutUserNestedInput
    joins?: JoinSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessions?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    joins?: JoinSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionsUpsertWithoutTracksInput = {
    update: XOR<SessionsUpdateWithoutTracksInput, SessionsUncheckedUpdateWithoutTracksInput>
    create: XOR<SessionsCreateWithoutTracksInput, SessionsUncheckedCreateWithoutTracksInput>
    where?: SessionsWhereInput
  }

  export type SessionsUpdateToOneWithWhereWithoutTracksInput = {
    where?: SessionsWhereInput
    data: XOR<SessionsUpdateWithoutTracksInput, SessionsUncheckedUpdateWithoutTracksInput>
  }

  export type SessionsUpdateWithoutTracksInput = {
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    joinSession?: JoinSessionUpdateManyWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
    joinSession?: JoinSessionUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type UserCreateWithoutJoinsInput = {
    name: string
    email: string
    password: string
    sessions?: SessionsCreateNestedManyWithoutUserInput
    tracks?: TracksCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJoinsInput = {
    id?: number
    name: string
    email: string
    password: string
    sessions?: SessionsUncheckedCreateNestedManyWithoutUserInput
    tracks?: TracksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJoinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinsInput, UserUncheckedCreateWithoutJoinsInput>
  }

  export type SessionsCreateWithoutJoinSessionInput = {
    sessionCode: string
    sessionName: string
    user: UserCreateNestedOneWithoutSessionsInput
    tracks?: TracksCreateNestedManyWithoutSessionsInput
  }

  export type SessionsUncheckedCreateWithoutJoinSessionInput = {
    id?: number
    userId: number
    sessionCode: string
    sessionName: string
    tracks?: TracksUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type SessionsCreateOrConnectWithoutJoinSessionInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutJoinSessionInput, SessionsUncheckedCreateWithoutJoinSessionInput>
  }

  export type UserUpsertWithoutJoinsInput = {
    update: XOR<UserUpdateWithoutJoinsInput, UserUncheckedUpdateWithoutJoinsInput>
    create: XOR<UserCreateWithoutJoinsInput, UserUncheckedCreateWithoutJoinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJoinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJoinsInput, UserUncheckedUpdateWithoutJoinsInput>
  }

  export type UserUpdateWithoutJoinsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessions?: SessionsUpdateManyWithoutUserNestedInput
    tracks?: TracksUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    sessions?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionsUpsertWithoutJoinSessionInput = {
    update: XOR<SessionsUpdateWithoutJoinSessionInput, SessionsUncheckedUpdateWithoutJoinSessionInput>
    create: XOR<SessionsCreateWithoutJoinSessionInput, SessionsUncheckedCreateWithoutJoinSessionInput>
    where?: SessionsWhereInput
  }

  export type SessionsUpdateToOneWithWhereWithoutJoinSessionInput = {
    where?: SessionsWhereInput
    data: XOR<SessionsUpdateWithoutJoinSessionInput, SessionsUncheckedUpdateWithoutJoinSessionInput>
  }

  export type SessionsUpdateWithoutJoinSessionInput = {
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    tracks?: TracksUpdateManyWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateWithoutJoinSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type SessionsCreateManyUserInput = {
    id?: number
    sessionCode: string
    sessionName: string
  }

  export type TracksCreateManyUserInput = {
    id?: number
    sessionId: number
    trackName: string
    s3Url: string
  }

  export type JoinSessionCreateManyUserInput = {
    id?: number
    sessionId: number
    joinedAt?: Date | string
  }

  export type SessionsUpdateWithoutUserInput = {
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUpdateManyWithoutSessionsNestedInput
    joinSession?: JoinSessionUpdateManyWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUncheckedUpdateManyWithoutSessionsNestedInput
    joinSession?: JoinSessionUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionCode?: StringFieldUpdateOperationsInput | string
    sessionName?: StringFieldUpdateOperationsInput | string
  }

  export type TracksUpdateWithoutUserInput = {
    trackName?: StringFieldUpdateOperationsInput | string
    s3Url?: StringFieldUpdateOperationsInput | string
    sessions?: SessionsUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    trackName?: StringFieldUpdateOperationsInput | string
    s3Url?: StringFieldUpdateOperationsInput | string
  }

  export type TracksUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    trackName?: StringFieldUpdateOperationsInput | string
    s3Url?: StringFieldUpdateOperationsInput | string
  }

  export type JoinSessionUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionsUpdateOneRequiredWithoutJoinSessionNestedInput
  }

  export type JoinSessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinSessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TracksCreateManySessionsInput = {
    id?: number
    userId: number
    trackName: string
    s3Url: string
  }

  export type JoinSessionCreateManySessionsInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type TracksUpdateWithoutSessionsInput = {
    trackName?: StringFieldUpdateOperationsInput | string
    s3Url?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    trackName?: StringFieldUpdateOperationsInput | string
    s3Url?: StringFieldUpdateOperationsInput | string
  }

  export type TracksUncheckedUpdateManyWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    trackName?: StringFieldUpdateOperationsInput | string
    s3Url?: StringFieldUpdateOperationsInput | string
  }

  export type JoinSessionUpdateWithoutSessionsInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinsNestedInput
  }

  export type JoinSessionUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinSessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}