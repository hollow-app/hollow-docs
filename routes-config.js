export const ROUTES = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Installation",
        href: "/installation",
        items: [
          { title: "Laravel", href: "/laravel" },
          { title: "React", href: "/react" },
          { title: "Gatsby", href: "/gatsby" },
        ],
      },
    ],
  },
  {
    title: "Server Actions",
    href: "/server-actions",
    noLink: true,
    items: [
      { title: "getSession", href: "/getSession" },
      { title: "getToken", href: "/getToken" },
    ],
  },
];

export const page_routes = ROUTES.flatMap((it) => {
  const getRecurrsiveAllLinks = (node) => {
    const ans = [];
    if (!node.noLink) {
      ans.push({ title: node.title, href: node.href });
    }
    node.items?.forEach((subNode) => {
      const temp = { ...subNode, href: `${node.href}${subNode.href}` };
      ans.push(...getRecurrsiveAllLinks(temp));
    });
    return ans;
  };
  return getRecurrsiveAllLinks(it);
});
