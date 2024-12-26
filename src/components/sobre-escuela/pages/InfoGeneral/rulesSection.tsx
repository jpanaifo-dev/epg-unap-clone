import { Downloadable } from '@/components';
import { IDocument, IResApi } from '@/types';

interface IProps {
  documents: IResApi<IDocument>
}

export const RulesSection = (props: IProps) => {
  const { documents } = props;

  return (
    <section className="flex flex-col gap-[14px] w-full">
      {
        documents.results.length > 0 ? documents.results.map((document) => (
          <Downloadable
            key={document.id}
            title={document.description}
            fileName={document.description}
            file={document.file}
          />
        )) : <p>No hay documentos disponibles</p>
      }
    </section>
  );
};
