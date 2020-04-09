export function logRuntime(inSeconds = false) {
   return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
   ) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
         let time = 'ms';
         let divisor = 1;
         if (inSeconds) {
            time = 's';
            divisor = 1000;
         }
         console.log('-------------------------------');
         console.log(`${propertyKey} parameters: ${JSON.stringify(args)}`);
         const t1 = performance.now();
         const returnDescriptor = originalMethod.apply(this, args);
         const t2 = performance.now();
         console.log(
            `${propertyKey} return: ${JSON.stringify(returnDescriptor)}`
         );
         console.log(`${propertyKey} runtime: ${(t2 - t1) / divisor} ${time}`);

         return returnDescriptor;
      };

      return descriptor;
   };
}
