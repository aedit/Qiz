const jsQuestions = [
  {
    question: `var foo = function foo() {
      console.log(foo === foo);  
  };
  foo();`,
    a: 'true',
    b: 'false',
    c: 'ReferenceError',
    d: 'foo already declared',
    answer: 'a',
  },
  {
    question: `function aaa() {
        return
        {
            test: 1
        };
    }
    alert(typeof aaa());`,
    a: 'function',
    b: 'number',
    c: 'object',
    d: 'undefined',
    answer: 'd',
  },
  {
    question: 'Which of the following is a server-side Java Script object?',
    a: 'Function',
    b: 'File',
    c: 'FileUpload',
    d: 'Date',
    answer: 'a',
  },
  {
    question:
      'Which of the below is used in Java script to insert special characters?',
    a: '\\',
    b: '%',
    c: '*',
    d: '&',
    answer: 'a',
  },
  {
    question:
      'Which of the following is the tainted property of a window object in Java Script?',
    a: 'PathName',
    b: 'Protocol',
    c: 'Defaultstatus',
    d: 'Host',
    answer: 'c',
  },
  {
    question:
      'Which of the following is used to capture all click events in a window?',
    a: 'window.captureEvents(Event.CLICK);',
    b: 'window.routeEvents(Event.CLICK );',
    c: 'window.handleEvents(Event.CLICK);',
    d: 'window.raiseEvents(Event.CLICK );',
    answer: 'a',
  },
  {
    question: '___________ JavaScript is also called client-side JavaScript.',
    a: 'Microsoft',
    b: 'Navigator',
    c: 'LiveWire',
    d: 'Native',
    answer: 'b',
  },
  {
    question: 'Why so Java and JavaScript have similar name?',
    a: 'Java Script is a stripped-down version of Java',
    b: 'The syntax of JavaScript is loosely based on Java syntax',
    c: 'They both support Object Oriented Programming',
    d: 'No relation',
    answer: 'b',
  },
  {
    question: 'What is the alternate name for Java script?',
    a: 'LimeScript',
    b: 'CoffeScript',
    c: 'TypeScript',
    d: 'ECMAScript',
    answer: 'd',
  },
  {
    question: 'How to append a value to an array of Java Script?',
    a: 'arr[arr.length] = value',
    b: 'arr[arr.length+1] = new Arrays()',
    c: 'arr[arr.length-1] = value',
    d: 'arr[arr.length*1] = value',
    answer: 'a',
  },
]

export default jsQuestions
