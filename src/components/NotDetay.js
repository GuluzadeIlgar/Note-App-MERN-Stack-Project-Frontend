export default function NotDetay({not}) {
  return (
    <div className="not-detay">
        <h4>{not.baslik}</h4>
        <h4>{not.aciklama}</h4>
        <p>{not.createdAt}</p>
    </div>
  )
}
