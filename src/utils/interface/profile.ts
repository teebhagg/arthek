

export interface ProfileInterface {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  avatar: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  bio: {
    _key: string;
    _type: string;
    children: {
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }[];
    markDefs: string[];
    style: string;
  }[];
  name: string;
  socialLinks: {
    _key: string;
    _type: string;
    name: string;
    url: string;
  }[];
  logo: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  title: string;
  }