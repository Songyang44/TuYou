import PageHeader from '../../components/ui/PageHeader';
import PlaceCard from '../../components/cards/PlaceCard';
import { countries } from '../../data/mock';

export default function AttractionsHome() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="Official Travel Wiki"
        title="官方旅行百科"
        description="从国家到城市再到景点，整理开放时间、门票、最佳季节与拍照点，出发前先做好功课。"
      />
      <div className="container">
        <div className="grid-cards grid-cards-3">
          {countries.map((c) => (
            <PlaceCard
              key={c.id}
              to={`/attractions/${c.id}`}
              cover={c.cover}
              title={`${c.flagEmoji} ${c.name}`}
              subtitle={c.description}
              meta={`${c.cityCount} 个城市`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
