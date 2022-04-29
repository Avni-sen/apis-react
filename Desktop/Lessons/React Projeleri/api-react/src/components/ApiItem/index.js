import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import "./ApiItem.scss";
const ApiItem = ({ data: api, toogleBookmark }) => {
  return (
    <div className="api-items">
      <div className="item-icon">
        <img src={api.icon} alt="" />
      </div>
      <div className="item-detail">
        <h4>{api.name}</h4>
        <div className="item-category">{api.category}</div>
        <div className="item-description">{api.desc}</div>
      </div>
      <div className="item-hover">
        <button onClick={() => toogleBookmark(api.id)}>
          {api.bookmark ? <BsBookmarkFill /> : <BsBookmark />}
          Bookmark
        </button>
        <a href={api.name}>
          API Docs
          <RiArrowRightSLine />
        </a>
      </div>
    </div>
  );
};

export default ApiItem;
