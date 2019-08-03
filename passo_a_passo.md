1. criar o projeto
    -  no terminal digitar "npm new blog"
2. instalar o mongo db no projeto
    - term: npm i --save -E @nestjs/mongoose @types/mongoose mongoose
3. colocar o mongoose no projeto
    - em app.module
        -- importar o MongooseModule de @nestjs/mongoose
        -- inseriri em imports[] do app:
            -- MongooseModule.forRoot(connectionstrinz)
            -- a connection string é "mongodb://localhost/nome_do_schema"
4. Criar modulos
    - term: nest g module caetegories
            nest g controller categories
            nest g service categories
5. Criando schema e interface
    criar de forma manual category.interface.ts e category.schema.ts
6. Criar o Schema
    - com o nome passando o type:string, required:true, trim:true, unique:true, em options do schema passar timestamp:true
7. Criar interface
    - interface de extender de mongoose.Document
    - a inteface contem id?:ObjectId e name: string
8. importar no module de categorias o schema
    - importar em import[] o MongoseModule.forFeature([])
        -- { name: 'Category', schema: CategorySchema }