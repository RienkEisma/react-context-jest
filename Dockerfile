FROM gitpod/workspace-full

# add your tools here
RUN pwd
RUN cd /workspace/react-context-jest  && npm install
RUN cd /workspace/react-context-jest  && npm start