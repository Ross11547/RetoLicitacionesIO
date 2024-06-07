-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "nit" INTEGER NOT NULL,
    "departamento" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "correoElectronico" TEXT NOT NULL,
    "telefono" INTEGER NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "idEmpresa" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Convocatoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "modalidad" TEXT NOT NULL,
    "fechaPublicacion" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "archivo" JSONB NOT NULL,

    CONSTRAINT "Convocatoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formulario" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "archivo" JSONB NOT NULL,

    CONSTRAINT "Formulario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proyecto" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idFormulario" INTEGER NOT NULL,
    "idConvocatoria" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "cuce" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "entidad" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "fechaPublicacion" TIMESTAMP(3) NOT NULL,
    "fechaPresentacion" TIMESTAMP(3) NOT NULL,
    "contacto" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "tipoContratacion" TEXT NOT NULL,
    "modalidad" TEXT NOT NULL,

    CONSTRAINT "Proyecto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmpresaAdjudicada" (
    "id" SERIAL NOT NULL,
    "idProyecto" INTEGER NOT NULL,
    "fechaPublicacion" TEXT NOT NULL,
    "puntaje" INTEGER NOT NULL,

    CONSTRAINT "EmpresaAdjudicada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reporte" (
    "id" SERIAL NOT NULL,
    "idEmpresaAdicada" INTEGER NOT NULL,
    "idProyecto" INTEGER NOT NULL,
    "nombres" TEXT NOT NULL,
    "fechaReporte" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reporte_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proyecto_cuce_key" ON "Proyecto"("cuce");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proyecto" ADD CONSTRAINT "Proyecto_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proyecto" ADD CONSTRAINT "Proyecto_idFormulario_fkey" FOREIGN KEY ("idFormulario") REFERENCES "Formulario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proyecto" ADD CONSTRAINT "Proyecto_idConvocatoria_fkey" FOREIGN KEY ("idConvocatoria") REFERENCES "Convocatoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmpresaAdjudicada" ADD CONSTRAINT "EmpresaAdjudicada_idProyecto_fkey" FOREIGN KEY ("idProyecto") REFERENCES "Proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reporte" ADD CONSTRAINT "Reporte_idEmpresaAdicada_fkey" FOREIGN KEY ("idEmpresaAdicada") REFERENCES "EmpresaAdjudicada"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reporte" ADD CONSTRAINT "Reporte_idProyecto_fkey" FOREIGN KEY ("idProyecto") REFERENCES "Proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
