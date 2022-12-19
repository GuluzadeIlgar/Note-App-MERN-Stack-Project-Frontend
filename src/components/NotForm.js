import {useState} from 'react'

export default function NotForm() {

  const [baslik,setbaslik] = useState('')

  const [aciklama ,setaciklama] = useState('')

  const [hata,setHata] = useState(null)
  const handleSubmit=async(e)=>{
    e.preventDefault();

    const not={baslik,aciklama};
   // console.log(not);
    const response =await fetch('/api/notlar',{
      method:'POST',
      body:JSON.stringify(not),
      headers:{
        'Content-Type':'application/json'
      }
    })

  }




  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add new note</h3>
      <div className='create-group'>
        <div>
          <label>Note Tittle</label>
          <input type="text" onChange={(e)=>setbaslik(e.target.value)} value={baslik}></input>
        </div>
        <div>
          <label>Note Description</label>
          <input type="text" onChange={(e)=>setaciklama(e.target.value)} value={aciklama}></input>
        </div>
      </div>
      <button type='submit'>Add</button>
    </form>
  )
}
