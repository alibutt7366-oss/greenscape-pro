import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'lawn-care',
    title: 'Lawn Care & Maintenance',
    shortDesc: 'Precision mowing, crisp edging, core aeration, seasonal fertilization, and comprehensive turf health stewardship.',
    fullDesc: 'A pristine lawn is the foundation of your property’s curb appeal. Our scheduled maintenance programs combine razor-sharp blade mowing at botanically calibrated heights with systematic core aeration, weed management, and organic soil enrichment tailored to warm- and cool-season grasses.',
    image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1200&q=80',
    category: 'maintenance',
    features: [
      'Commercial-grade precision mowing & clean edging',
      'Core aeration & overseeding programs',
      'Custom seasonal fertilizer & pre-emergent scheduling',
      'Thatch removal & soil compaction relief',
      'Clippings bagging or organic micro-mulching options'
    ],
    idealFor: 'Residential homeowners and commercial campuses seeking immaculate turf all season long.',
    seasonality: 'Weekly or bi-weekly service from Spring thaw through late Autumn dormancy.'
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design & Master Planning',
    shortDesc: 'Custom architectural landscaping blueprints, 2D/3D visualizations, and curated native flora selection.',
    fullDesc: 'Transforming an outdoor property requires balancing architectural harmony with horticultural longevity. Our landscape designers conduct on-site microclimate and soil analysis to develop holistic master plans featuring harmonious sightlines, privacy buffers, and seamless indoor-outdoor transitions.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1200&q=80',
    category: 'design',
    features: [
      'Detailed site topology, sun exposure & drainage analysis',
      'Custom 2D layout blueprints & material schedules',
      'Native & drought-resistant plant palette curation',
      'Architectural lighting & focal point integration',
      'Phased master plan roadmap for long-term investments'
    ],
    idealFor: 'New construction properties, complete backyard remodels, and estate revitalization.',
    seasonality: 'Year-round planning and architectural design consultations.'
  },
  {
    id: 'garden-installation',
    title: 'Garden Installation & Perennial Planting',
    shortDesc: 'Vibrant flower beds, ornamental grasses, foundation plantings, and pollinator-friendly botanical installations.',
    fullDesc: 'Bring life, color, and fragrance to your outdoor perimeter. We source premium specimen plants from certified nursery growers, amend garden soil with nutrient-rich compost, and install multi-tiered beds designed for continuous multi-season blooming and low-water maintenance.',
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80',
    category: 'installation',
    features: [
      'Layered perennial and biennial bed architecture',
      'Nursery-grade flowering shrubs, boxwoods, and ornamentals',
      'Organic soil conditioning & organic compost tilling',
      'Efficient drip irrigation and micro-watering line setup',
      'Pollinator-attracting and deer-resistant plant options'
    ],
    idealFor: 'Homeowners wanting lush floral perimeters, entrance borders, and serene courtyard gardens.',
    seasonality: 'Spring and Autumn planting windows for optimal root establishment.'
  },
  {
    id: 'mulching-cleanup',
    title: 'Mulching & Seasonal Cleanup',
    shortDesc: 'Deep bed edging, fresh hardwood bark mulching, Spring bed prep, and Autumn leaf collection.',
    fullDesc: 'Seasonal transitions demand prompt property defense. Our cleanup crew removes winter debris, establishes sharp vertical spade spade-edges along your turf-to-bed transitions, and installs premium double-shredded natural bark mulch to retain soil moisture and prevent weed germination.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    category: 'care',
    features: [
      'Sharp machine or hand-spaded bed edge trenches',
      'Double-shredded natural hardwood, cedar, or pine mulch',
      'Thorough Spring leaf, branch, and thatch clearing',
      'Autumn leaf vacuuming, bagging, and bed winterization',
      'Perennial cutbacks and winter protective crown prep'
    ],
    idealFor: 'Restoring property crispness after harsh winters or before the holiday season.',
    seasonality: 'Early Spring refresh (March-May) and Fall prep (September-November).'
  },
  {
    id: 'tree-shrub-care',
    title: 'Tree & Shrub Care',
    shortDesc: 'Health diagnostics, structural pruning, crown thinning, disease prevention, and root fertilization.',
    fullDesc: 'Woody ornamentals and mature canopy trees require skilled care to thrive and prevent structural property damage. We provide seasonal structural pruning, suckering removal, dormant oil pest protection, and deep-root injection fertilization that nourishes tree canopies from the roots upward.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    category: 'care',
    features: [
      'Dormant season structural and clearance pruning',
      'Deep root liquid mineral and mycorrhizae fertilization',
      'Hedge shaping, topiary trimming, and size containment',
      'Foliar fungal, blight, and pest assessment',
      'Young sapling staking, cabling, and trunk guard protection'
    ],
    idealFor: 'Preserving specimen trees, manicuring privacy hedges, and protecting arbor investments.',
    seasonality: 'Late Winter dormant pruning and growing season inspections.'
  },
  {
    id: 'hardscaping-outdoor-living',
    title: 'Hardscaping & Outdoor Living',
    shortDesc: 'Flagstone patios, retaining walls, walkways, fire features, pergolas, and natural stone masonry.',
    fullDesc: 'Expand your interior living space into the open air. Our hardscape specialists construct durable paver patios, natural limestone walkways, reinforced retaining walls, and custom fire pit gathering spaces engineered with proper aggregate base drainage to withstand freeze-thaw cycles.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    category: 'hardscape',
    features: [
      'Natural flagstone, bluestone, and interlocking concrete pavers',
      'Structural retaining walls & terraced slope management',
      'Custom outdoor fire pits, sitting walls, and masonry steps',
      'Permeable paver systems & French drain integration',
      'Low-voltage path and architectural accent lighting'
    ],
    idealFor: 'Properties seeking outdoor entertainment zones, level lawn tiers, and increased home valuation.',
    seasonality: 'Construction scheduled Spring through late Fall (weather permitting).'
  }
];
