import SECTIONS from './directory.data';

const directoryResolvers = {
  Query: {
    sections: (_root, _args, _context) => {
      return SECTIONS;
    }
  }
}

export default directoryResolvers;