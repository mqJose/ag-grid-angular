export const environmentConfig = {
  dayjsDate: 'DD/MM/YYYY', // Moment.js date format: http://momentjs.com/docs/#/displaying/format/
  angularDate: 'dd/MM/y', // Angular date format: https://angular.io/api/common/DatePipe
  datePickerFormat: 'dd/mm/yyyy', // Angular date format: https://angular.io/api/common/DatePipe
  renameFileFormat: 'ddMMyhhmmss',
  localeCode: 'es-ES',
  defaultUploadContainer: 'uploads',
  defaultFrontRoute: '/main',
  defaultLoginRoute: '/auth',
  defaultLogoutRoute: '/auth/out',
  baseTitle: 'JDX',
  defaultLang: 'en',
  passwordRegexValidation: /^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,}$/, // https://stackoverflow.com/a/50037816
  toastrConfigError: {
    closeButton: true,
    disableTimeOut: true,
    tapToDismiss: true
  },
  authConf: {
    user: 'user',
    identity: 'identity',
    access: 'access',
    created: 'created',
    ttl: 'ttl',
    id: 'id',
    appName: 'hardxode',
  },
  sessionConfig: {
    idleTime: 70, // minutes
    messageTime: 30, // seconds,
    checkInterval: 2, // seconds
    ignoredPaths: [
      '/',
      '/auth',
      '/recovery/*',
      '/register/*',
      '/error/401',
      '/error/403',
      '/error/404',
      '/error/500',
    ]
  },
  postItColors: {
    new: '#2E64FE',
    private: '#848484',
    publicNotOwner: '#088A08',
    public: '#FFFF00'
  },
  uploadComponent: {
    imageExtensions: ['png', 'jpg', 'gif', 'jpeg', 'tiff', 'bpm'],
    icons: [{
      ext: ['doc', 'odt', 'docx', 'rtf'],
      icon: 'file-word'
    }, {
      ext: ['xls', 'ods', 'csv', 'xlsx'],
      icon: 'file-xlsx'
    }, {
      ext: ['odp', 'ppt', 'pptx'],
      icon: 'file-powerpoint'
    }, {
      ext: ['pdf'],
      icon: 'file-pdf'
    }, {
      ext: ['json'],
      icon: 'json'
    }, {
      ext: ['png', 'jpg', 'gif', 'jpeg', 'tiff', 'bpm'],
      icon: 'file-image'
    }, {
      ext: ['mp3', 'wav', 'ogg'],
      icon: 'volume-high'
    }, {
      ext: ['mp4', 'mkv', 'flv', 'mpeg'],
      icon: 'file-video'
    }, {
      ext: ['js', 'html', 'ts', 'php'],
      icon: 'file-xml'
    }]
  },
  defaultFilePreview: './assets/images/common/no-image.jpg',
  bugSubmit: {
    mantisServer: 'http://jdx/mantis',
    mantisTokenApi: 'token',
  },
};
