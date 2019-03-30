//앱의 모든 설정을 넣어둔다
import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import schema from './schema';

class App {
  //GraphQLServer타입의 app변수를 만들어준다.
  public app: GraphQLServer;

  //생성자로 App클래스를 어떻게 만들어줄지 정해준다.
  constructor() {
    this.app = new GraphQLServer({
      schema,
    });
    this.middlewares();
  }

  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger('dev'));
    this.app.express.use(helmet());
  };
}
export default new App().app;
