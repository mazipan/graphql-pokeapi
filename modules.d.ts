type CookieHash = Record<string, string | boolean | number>;

interface Threshold {
  perf: number;
  seo: number;
  pwa: number;
  a11y: number;
  bp: number;
  script: number;
  style: number;
  image: number;
  tti: number;
}

interface SidToken {
  sid: string;
  access_token: string;
  expires_in: number;
  created_at: Date;
}

interface NetworkThrottle {
  cpuSlowdownMultiplier: number;
  throughputKbps: number;
  rttMs: number;
  requestLatencyMs: number;
  downloadThroughputKbps: number;
  uploadThroughputKbps: number;
}

interface NetworkThrottleMap {
  wifi: NetworkThrottle;
  lte4g: NetworkThrottle;
  fast3g: NetworkThrottle;
  slow3g: NetworkThrottle;
}
interface URLConfigResponse {
  url: string;
  group: string;
  name: string;
  device?: 'mobile' | 'desktop';
  featured?: boolean;
  dashboard?: boolean;
  competitor?: boolean;
  injectSid?: boolean;
  cookies?: CookieHash;
  threshold?: Threshold;
  slack?: string;
  otherParams?: string;
  networkThrottle?: string;
}
interface URLConfigParams extends Omit<URLConfigResponse, 'threshold'> {
  dateStart?: string;
  dateEnd?: string;
  limit?: number;
  deletedId?: boolean;
  updatedId?: string;
  configId?: string;
  // threshold param
  thresholdPerf?: number;
  thresholdSeo?: number;
  thresholdPwa?: number;
  thresholdA11y?: number;
  thresholdBp?: number;
  thresholdScript?: number;
  thresholdStyle?: number;
  thresholdImage?: number;
  thresholdTti?: number;
  slack?: string;
  page?: string;
}
interface AuditItem {
  id: string;
  title: string;
  description: string;
  numericValue: number;
  displayValue: string;
}

interface AuditItemDetailData {
  type: string;
  heading: any[],
  items: any[]
}
interface AuditItemDetail extends AuditItem {
  details: AuditItemDetailData;
}
interface Audits {
  'first-contentful-paint': AuditItem;
  'first-meaningful-paint': AuditItem;
  'speed-index': AuditItem;
  'time-to-first-byte': AuditItem;
  'network-server-latency': AuditItem;
  'first-cpu-idle': AuditItem;
  interactive: AuditItem;
  'network-requests': AuditItemDetail;
  'resource-summary': AuditItemDetail;
}
type CategoryItem = {
  id: string;
  title: string;
  score: number;
};
interface Categories {
  performance: CategoryItem;
  accessibility: CategoryItem;
  'best-practices': CategoryItem;
  seo: CategoryItem;
  pwa: CategoryItem;
}

type Timing = {
  total: number;
};

type Environment = {
  networkUserAgent: string;
  hostUserAgent: string;
  benchmarkIndex: number;
};
interface LighthouseReportRaw {
  userAgent: string;
  environment: Environment;
  configSettings: any;
  lighthouseVersion: string;
  requestedUrl: string;
  finalUrl: string;
  audits: Audits;
  categories: Categories;
  timing: Timing;
  fetchTime: Date;
}

interface LighthouseReport extends Omit<LighthouseReportRaw, 'fetchTime'> {
  name: string;
  device?: 'mobile' | 'desktop';
  group: string;
  fetchTime: Date;
  params: URLConfigParams;
}

interface Info {
  info: string;
  version: string;
  uptime: string;
  throttle?: string[];
}

interface MutationResponse {
  ok: boolean;
  message?: string;
}

type PromiseFactory = () => Promise<any>;

interface SlackParam {
  webHookUrl?: string;
  urlAction?: string;
  type?: string;
  title: string;
  message: string;
}

interface SlackParam {
  webHookUrl?: string;
  urlAction?: string;
  type?: string;
  title: string;
  message: string;
}
interface SlackInternalParam {
  webHookUrl: string;
  messageBody: any;
}

interface SlackThresholdItem {
  key: string;
  title: string;
  url?: string;
  actual: number;
  gate?: number;
  status: boolean;
}
interface SlackThreshold {
  summary: SlackThresholdItem[];
  timing: SlackThresholdItem[];
  resources: SlackThresholdItem[];
}
interface SlackThresholdParam {
  pageUrl: string;
  jobStart: string;
  jobEnd: string;
  duration: string;
  urlReport: string;
  username?: string;
  threshold: SlackThreshold;
}

interface ImageDimensionParam {
  dateStart?: string;
  dateEnd?: string;
  limit?: number;
  device?: 'mobile' | 'desktop' | 'all';
}

interface ImageDimension {
  parent?: {
    _id: string;
    name: string;
    fetchTime: string;
    finalUrl: string;
  };
  url: string;
  transferSize: number;
  width: number;
  height: number;
  type: string;
  pixels: number;
  bpp: number;
  densityIndex: number;
  potentialSavings?: number;
}

interface User {
  type: string;
  id: string;
  name: string;
  email: string;
  slackId: string;
  permissions?: string[];
}

interface PageSpeedReport {
  captchaResult: string;
  kind: string;
  url: string;
  loadingExperience: any;
  originLoadingExperience: any;
  lighthouseResult: any;
  analysisUTCTimestamp: Date;
  fetchDate?: string;
}


interface PriceComparison {
  captchaResult: string;
  kind: string;
  url: string;
  loadingExperience: any;
  originLoadingExperience: any;
  lighthouseResult: any;
  analysisUTCTimestamp: Date;
  fetchDate?: string;
}
