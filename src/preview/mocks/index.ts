/**
 * Barrel agregador de mocks reutilizáveis.
 *
 * Acessível pelo consumer via:
 *   import { APP_SHELL_CONTEXTS, chatMocks, clientesMocks } from "@snksergio/design-system/preview/mocks";
 *
 * Os mocks de showcases específicas (ChatV2, ClientesShowcase) ficam em
 * namespaces dedicados para evitar colisão de nomes (ex: ambos têm STATUS_DOT).
 */

// AppShell mocks — exportados diretamente (sem prefixo)
export * from "./app-shell-mocks";

// Mocks da showcase ChatV2 — namespace
export * as chatMocks from "../pages/ChatV2/chat-v2-mocks";

// Mocks da showcase ClientesShowcase — namespace
export * as clientesMocks from "../pages/ClientesShowcase/clientes-showcase-mocks";
