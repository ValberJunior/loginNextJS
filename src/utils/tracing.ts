import { NodeTracerProvider } from '@opentelemetry/node';
import { SimpleSpanProcessor } from '@opentelemetry/tracing';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';

const provider = new NodeTracerProvider();
const exporter = new JaegerExporter({
  serviceName: 'LoginNextJS',
});

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.register();