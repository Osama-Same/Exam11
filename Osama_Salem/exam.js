const input=document.querySelector(".a")
const select=document.querySelector(".s")
const but=document.querySelector(".b")

const table=document.querySelector(".table")

const Student_Name=document.querySelector(".Student_Name")
const Student_Grade=document.querySelector(".Student_Grade")
const Course=document.querySelector(".Course")
const Result=document.querySelector(".Result")
const button=document.querySelector(".remove")

  let  x= [11,44,55,778,66,88] 
 but.addEventListener('click',()=>{
     input.append(table)

 })
        
       
  but.addEventListener('click',()=>{
  Student_Name.append(table)
  Course.append(table)
  Student_Grade = Math.floor(Math.random()* x.length)

  if(Result >= 50 )
  {
      return "pass"
  }
  return "faild"

})

button.addEventListener('click',()=>{
    remove.remove()
})