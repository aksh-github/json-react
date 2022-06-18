export const inject = (str, _obj) =>
  str.replace(/\${(.*?)}/g, (x, g) => {
    // console.log(getObjectProperty(_obj, g));
    switch (true) {
      case g.startsWith("@l"):
        g = g.replace("@l", "localData");
        break;
      case g.startsWith("@g"):
        g = g.replace("@g", "data");
        break;
    }
    return getObjectProperty(_obj, g);
  });

export const getObjectProperty = (object, path) => {
  if (!object) {
    // null or undefined
    // return object;
    return null;
  }
  const parts = path.split(".");
  return parts.reduce((object, key) => object?.[key], object);
};

export const xml2json = (xml, { ignoreTags = [] } = {}) => {
  // console.log(xml.nodeType, xml.nodeName);
  const el = xml.nodeType === 9 ? xml.documentElement : xml;
  if (ignoreTags.includes(el.nodeName)) {
    return null;
  }

  const h = { $: el.nodeName };
  // h.content = Array.from(el.childNodes || [])
  //   .filter((n) => n.nodeType === 3)
  //   .map((n) => n.textContent.trim())
  //   .join("");
  h.props = Array.from(el.attributes || [])
    .filter((a) => a)
    .reduce((h, a) => {
      h[a.name] = a.value;
      return h;
    }, {});
  h.children = Array.from(el.childNodes || [])
    .filter((n) => n.nodeType === 1 || n.nodeType === 3)
    .map((c) => {
      if (c.nodeType === 1) {
        const r = xml2json(c, { ignoreTags: ignoreTags });
        // h[c.nodeName] = h[c.nodeName] || r;
        return r;
      } else {
        //3
        // const txt = c.textContent.trim();
        // return txt ? { "#text": txt } : null;
        return c.textContent.trim();
      }
    })
    .filter((v) => v);

  // h.children = h.children.filter((v) => v);
  return h;
};
