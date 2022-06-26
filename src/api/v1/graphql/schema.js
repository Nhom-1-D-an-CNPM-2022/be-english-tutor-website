import graphql from 'graphql';
import courseServices from '../components/course/services';
import Tutor from '../components/tutor/model';

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const TutorType = new GraphQLObjectType({
  name: 'Tutor',
  fields: () => ({
    _id: { type: GraphQLString },
    displayName: { type: GraphQLString },
    hometown: { type: GraphQLString },
    videoInstruction: { type: GraphQLString },
    teachingStyles: { type: GraphQLString },
    aboutMe: { type: GraphQLString },
    courses: {
      type: new GraphQLList(CourseType),
      resolve(parent, args) {
        const tutorId = parent._id;
        return courseServices.findByTutorId(tutorId.toString());
      },
    },
  }),
});

const CourseType = new GraphQLObjectType({
  name: 'Course',
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    tutors: {
      type: new GraphQLList(TutorType),
      resolve(parent, args) {
        const { tutors } = parent;
        return Promise.all(tutors.map((tutorId) => Tutor.findById(tutorId)));
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    course: {
      type: CourseType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return courseServices.findById(args.id);
      },
    },
  },
});

const graphQLSchema = new graphql.GraphQLSchema({
  query: RootQuery,
});

export default graphQLSchema;
