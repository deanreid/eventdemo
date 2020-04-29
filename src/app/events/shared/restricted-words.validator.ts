import { AbstractControl } from '@angular/forms'

 //custom validator
 export function restrictedWords(words) {
    console.log(words)
    return (control:AbstractControl): {[key: string]:any} => {
      if (!words) return null

      let invalidWords = words
      .map(w=>control.value.includes(w) ? w : null)
      .filter(w => w != null)
      //control.value.includes('foo') ? {'restrictedWords': 'foo'} : null
   return invalidWords && invalidWords.length > 0
   ? {'restrictedWords': invalidWords.join(', ')}
   : null
  }
}