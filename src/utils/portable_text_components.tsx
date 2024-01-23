export const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    em: ({ children }: any) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => <h1 className="text-2xl">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-xl">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-lg">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-base">{children}</h4>,
    h5: ({ children }: any) => <h5 className="text-sm">{children}</h5>,
    h6: ({ children }: any) => <h6 className="text-xs">{children}</h6>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul className="ml-8 list-none">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-10 list-none">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <li style={{ listStyleType: "disc" }}>{children}</li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }: any) => <li>✅ {children}</li>,
  },
};