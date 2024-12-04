// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, showImg, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = details
  const onSub = () => {
    showImg(id)
  }
  const activeTab = isActive ? '' : 'act'
  return (
    <li className={`item ${activeTab}`}>
      <button className="btn" onClick={onSub} type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem