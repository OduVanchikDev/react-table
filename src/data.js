

function random(){
  return new Array(31).fill(0).map(e => e = Math.floor(Math.random() * 1000)+1000)

}

const worksList = {
  'ремонт трубы':random(),
  'ремонт окна':random(),
  'ремонт ведра':random(),
  'ремонт луны':random(),
  'ремонт ноги':random(),
  'ремонт бобра':random(),
}


 export const data = JSON.stringify(worksList)
 
