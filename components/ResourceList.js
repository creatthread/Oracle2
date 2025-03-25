import { Button } from "@/components/ui/button";
import Section from "./Section";

const onlineResources = [
  { type: "image", title: "线上课程资源包图片1", url: "/resources/images/online1.jpg" },
  { type: "image", title: "线上课程资源包图片2", url: "/resources/images/online2.jpg" },
];

const offlineResources = [
  { type: "image", title: "线下实践展示图片1", url: "/resources/images/classroom.jpg" },
  { type: "image", title: "线下实践展示图片2", url: "/resources/images/outdoor.jpg" },
  { type: "link", title: "三下乡共成长--大手牵小手 支教伴成长", url: "https://share.hntv.tv/news/1/1818096948567945218" },
  { type: "link", title: "传承文化！大学生支教让红旗渠精神和甲骨文文化走进校园", url: "https://share.hntv.tv/news/1/1818139681181478913" },
];

function renderResource(resource, isImageOnly = false) {
  return (
    <div key={resource.title} className="resource-item">
      {resource.type === "image" && (
        <img
          src={resource.url}
          alt={resource.title}
          className={isImageOnly ? "resource-image" : "resource-image-small"}
        />
      )}
      {resource.type === "link" && (
        <Button asChild className="mt-2">
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            访问 {resource.title}
          </a>
        </Button>
      )}
      
    </div>
  );
}

export default function ResourceList() {
  return (
    <div className="container">
      {/* 线上课程资源包 */}
      <Section title="线上课程资源包">
          <div className="resource-left">
            {renderResource(onlineResources[0], true) || <div>左侧占位内容</div>}
          </div>
          <div className="resource-right">
            {renderResource(onlineResources[1], true) || <div>右侧占位内容</div>}
          </div>
      </Section>

      {/* 线下实践展示 */}
      <Section title="线下实践展示">
          <div className="resource-left">
            {renderResource(offlineResources[0], true) || <div>左侧占位内容</div>}
          </div>
          <div className="resource-right">
            {renderResource(offlineResources[1], true) || <div>右侧占位内容</div>}
        </div>
        {/* 链接部分 */}
        <div className="link-row">
          {renderResource(offlineResources[2])}
        </div>
        <div className="link-row">
          {renderResource(offlineResources[3])}
        </div>
      </Section>
    </div>
  );
}