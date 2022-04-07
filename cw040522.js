Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

function sumStr(a,b) {
    let n1 = parseInt(a, 10)
     let n2 = parseInt(b, 10)
     let num = n1 + n2
     return num.toString()
   }

   Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
Examples (Input -> Output)

* 15  -> '101.25 Chinese Yuan'
* 465 -> '3138.75 Chinese Yuan'

The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

function usdcny(usd) {
    let num = 6.75 * usd
    let sum = num.toFixed(2)
      return `${sum} Chinese Yuan`
    }