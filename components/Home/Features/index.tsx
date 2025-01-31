import SectionTitle from '@/components/Common/SectionTitle';
import SingleFeature from '@/components/Home/Features/SingleFeature';
import type { FeatureRecord } from '@/graphql/types/graphql';
import type { Maybe } from 'graphql/jsutils/Maybe';

type Props = {
  features: FeatureRecord[];
  featuresHeader: string;
  featuresSubheader: Maybe<string>;
};

const Features = ({ features, featuresHeader, featuresSubheader }: Props) => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title={featuresHeader}
            paragraph={featuresSubheader}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
