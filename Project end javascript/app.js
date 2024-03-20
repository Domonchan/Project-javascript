function Find_BMI(Weight,Height)
{
    let value = Weight/(Height/100)**2 
    return value.toFixed(2) + "  kg/m<sup>2</sup>"
}
function display(element,value)
{
    document.getElementById(element).innerHTML = value
}
function activateFind_BMI(value1,value2)
{
    display("valueBMI",Find_BMI(value1,value2))
}

function toint(valueone,valuetwo)
{
  activateFind_BMI(parseInt(valueone),parseInt(valuetwo))
}

