import { Link, useParams } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import PlaceCard from '../../components/cards/PlaceCard';
import Icon from '../../components/ui/Icon';
import { countries, cities, spots } from '../../data/mock';

export default function CityPage() {
  const { countryId, cityId } = useParams();
  const country = countries.find((c) => c.id === countryId) ?? countries[0];

  if (cityId) {
    const city = cities.find((c) => c.id === cityId) ?? cities[0];
    const citySpots = spots.filter((s) => s.cityId === city.id);
    return (
      <div className="page">
        <PageHeader
          eyebrow={`${country.flagEmoji} ${country.name}`}
          title={city.name}
          description={city.description}
        />
        <div className="container">
          <Link to={`/attractions/${country.id}`} className="text-faint" style={{ display: 'inline-block', marginBottom: 20 }}>
            ← 返回 {country.name} 城市列表
          </Link>
          <div className="grid-cards grid-cards-3">
            {citySpots.map((s) => (
              <PlaceCard
                key={s.id}
                to={`/attractions/${country.id}/${city.id}/${s.id}`}
                cover={s.cover}
                title={s.name}
                subtitle={s.description}
                meta={`★ ${s.rating} · 建议游玩 ${s.suggestedDuration}`}
              />
            ))}
          </div>
          {citySpots.length === 0 && (
            <div className="empty-state">
              <Icon name="map" size={32} />
              <p>该城市的景点资料正在整理中。</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  const countryCities = cities.filter((c) => c.countryId === country.id);
  return (
    <div className="page">
      <PageHeader eyebrow="Official Travel Wiki" title={`${country.flagEmoji} ${country.name}`} description={country.description} />
      <div className="container">
        <Link to="/attractions" className="text-faint" style={{ display: 'inline-block', marginBottom: 20 }}>
          ← 返回国家列表
        </Link>
        <div className="grid-cards grid-cards-3">
          {countryCities.map((c) => (
            <PlaceCard
              key={c.id}
              to={`/attractions/${country.id}/${c.id}`}
              cover={c.cover}
              title={c.name}
              subtitle={c.description}
              meta={`${c.spotCount} 个景点`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
