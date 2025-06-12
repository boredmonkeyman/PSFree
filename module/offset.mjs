
// offsets for JSC::JSObject
export const js_cell = 0;
export const js_butterfly = 0x8;
// start of the array of inline properties (JSValues)
export const js_inline_prop = 0x10;

// sizeof JSC::JSObject
export const size_jsobj = js_inline_prop;

// offsets for JSC::JSArrayBufferView
export const view_m_vector = 0x10;
export const view_m_length = 0x18;
export const view_m_mode = 0x1c;

// sizeof JSC::JSArrayBufferView
export const size_view = 0x20;

// offsets for WTF::StringImpl
export const strimpl_strlen = 4;
export const strimpl_m_data = 8;
export const strimpl_inline_str = 0x14;

// sizeof WTF::StringImpl
export const size_strimpl = 0x18;

// offsets for WebCore::JSHTMLTextAreaElement, subclass of JSObject

// offset to m_wrapped, pointer to a DOM object
// for this class, it's a WebCore::HTMLTextAreaElement pointer
export const jsta_impl = 0x18;

// sizeof WebCore::JSHTMLTextAreaElement
export const size_jsta = 0x20;

// WebKit offsets end

export const KB = 1024;
export const MB = KB * KB;
export const GB = KB * KB * KB;
export const page_size = 16 * KB; // page size on the ps4

// size of the buffer used by setcontext/getcontext (see module/chain.mjs)
export const context_size = 0xc8;
